'use client'
import React, {useEffect, useMemo, useRef, useState} from "react";
import {Constants, MeetingConsumer, MeetingProvider, useMeeting, useParticipant,} from "@videosdk.live/react-sdk";
import Hls from "hls.js";
import ReactPlayer from "react-player";
import {MiniLoader} from "@/shared";
// import sx from './live.module.scss'

function JoinScreen({getMeetingAndToken, setMode}) {
    const [meetingId, setMeetingId] = useState(null);
    //Set the mode of joining participant and set the meeting id or generate new one
    const onClick = async (mode) => {
        setMode(mode);
        await getMeetingAndToken(meetingId);
    };
    return (
        <div className="container">
            <button onClick={() => onClick("CONFERENCE")}>Create Meeting</button>
            <br/>
            <br/>
            {" or "}
            <br/>
            <br/>
            <input
                type="text"
                placeholder="Enter Meeting Id"
                onChange={(e) => {
                    setMeetingId(e.target.value);
                }}
            />
            <br/>
            <br/>
            <button onClick={() => onClick("CONFERENCE")}>Join as Host</button>
            {" | "}
            <button onClick={() => onClick("VIEWER")}>Join as Viewer</button>
        </div>
    )
}

function ParticipantView(props) {
    const micRef = useRef(null);
    const {webcamStream, micStream, webcamOn, micOn, isLocal, displayName} =
        useParticipant(props.participantId);

    const videoStream = useMemo(() => {
        if (webcamOn && webcamStream) {
            const mediaStream = new MediaStream();
            mediaStream.addTrack(webcamStream.track);
            return mediaStream;
        }
    }, [webcamStream, webcamOn]);

    //Playing the audio in the <audio>
    useEffect(() => {
        if (micRef.current) {
            if (micOn && micStream) {
                const mediaStream = new MediaStream();
                mediaStream.addTrack(micStream.track);

                micRef.current.srcObject = mediaStream;
                micRef.current
                    .play()
                    .catch((error) =>
                        console.error("videoElem.current.play() failed", error)
                    );
            } else {
                micRef.current.srcObject = null;
            }
        }
    }, [micStream, micOn]);

    return (
        <div>
            <p>
                Participant: {displayName} | Webcam: {webcamOn ? "ON" : "OFF"} | Mic:{" "}
                {micOn ? "ON" : "OFF"}
            </p>
            <audio ref={micRef} autoPlay playsInline muted={isLocal}/>
            {webcamOn && (
                <ReactPlayer
                    //
                    playsinline // extremely crucial prop
                    pip={false}
                    light={false}
                    controls={false}
                    muted={true}
                    playing={true}
                    //
                    url={videoStream}
                    //
                    height={"300px"}
                    width={"300px"}
                    onError={(err) => {
                        console.log(err, "participant video error");
                    }}
                />
            )}
        </div>
    );
}

function Controls() {
    const {leave, toggleMic, toggleWebcam, startHls, stopHls} = useMeeting();
    return (
        <div>
            <button onClick={() => leave()}>Leave</button>
            &emsp;|&emsp;
            <button onClick={() => toggleMic()}>toggleMic</button>
            <button onClick={() => toggleWebcam()}>toggleWebcam</button>
            &emsp;|&emsp;
            <button
                onClick={() => {
                    //Start the HLS in SPOTLIGHT mode and PIN as
                    //priority so only speakers are visible in the HLS stream
                    startHls({
                        layout: {
                            type: "SPOTLIGHT",
                            priority: "PIN",
                            gridSize: "20",
                        },
                        theme: "LIGHT",
                        mode: "video-and-audio",
                        quality: "high",
                        orientation: "landscape",
                    });
                }}
            >
                Start HLS
            </button>
            <button onClick={() => stopHls()}>Stop HLS</button>
        </div>
    );
}

function SpeakerView() {
    const {participants, hlsState} = useMeeting();

    //Filtering the host/speakers from all the participants
    const speakers = useMemo(() => {
        return [...participants.values()].filter(
            (participant) => {
                return participant.mode === Constants.modes.CONFERENCE;
            }
        );
    }, [participants]);
    return (
        <div>
            <p>Current HLS State: {hlsState}</p>
            {/* Controls for the meeting */}
            <Controls/>

            {/* Rendring all the HOST participants */}
            {speakers.map((participant) => (
                <ParticipantView participantId={participant.id} key={participant.id}/>
            ))}
        </div>
    );
}

function ViewerView() {
    // States to store downstream url and current HLS state
    const playerRef = useRef(null);
    //Getting the hlsUrls
    const {hlsUrls, hlsState} = useMeeting();

    //Playing the HLS stream when the playbackHlsUrl is present and it is playable
    useEffect(() => {
        if (hlsUrls.playbackHlsUrl && hlsState === "HLS_PLAYABLE") {
            if (Hls.isSupported()) {
                const hls = new Hls({
                    maxLoadingDelay: 1, // max video loading delay used in automatic start level selection
                    defaultAudioCodec: "mp4a.40.2", // default audio codec
                    maxBufferLength: 0, // If buffer length is/becomes less than this value, a new fragment will be loaded
                    maxMaxBufferLength: 1, // Hls.js will never exceed this value
                    startLevel: 0, // Start playback at the lowest quality level
                    startPosition: -1, // set -1 playback will start from intialtime = 0
                    maxBufferHole: 0.001, // 'Maximum' inter-fragment buffer hole tolerance that hls.js can cope with when searching for the next fragment to load.
                    highBufferWatchdogPeriod: 0, // if media element is expected to play and if currentTime has not moved for more than highBufferWatchdogPeriod and if there are more than maxBufferHole seconds buffered upfront, hls.js will jump buffer gaps, or try to nudge playhead to recover playback.
                    nudgeOffset: 0.05, // In case playback continues to stall after first playhead nudging, currentTime will be nudged evenmore following nudgeOffset to try to restore playback. media.currentTime += (nb nudge retry -1)*nudgeOffset
                    nudgeMaxRetry: 1, // Max nb of nudge retries before hls.js raise a fatal BUFFER_STALLED_ERROR
                    maxFragLookUpTolerance: .1, // This tolerance factor is used during fragment lookup.
                    liveSyncDurationCount: 1, // if set to 3, playback will start from fragment N-3, N being the last fragment of the live playlist
                    abrEwmaFastLive: 1, // Fast bitrate Exponential moving average half-life, used to compute average bitrate for Live streams.
                    abrEwmaSlowLive: 3, // Slow bitrate Exponential moving average half-life, used to compute average bitrate for Live streams.
                    abrEwmaFastVoD: 1, // Fast bitrate Exponential moving average half-life, used to compute average bitrate for VoD streams
                    abrEwmaSlowVoD: 3, // Slow bitrate Exponential moving average half-life, used to compute average bitrate for VoD streams
                    maxStarvationDelay: 1, // ABR algorithm will always try to choose a quality level that should avoid rebuffering
                });

                let player = document.querySelector("#hlsPlayer");

                hls.loadSource(hlsUrls.playbackHlsUrl);
                hls.attachMedia(player);
            } else {
                if (typeof playerRef.current?.play === "function") {
                    playerRef.current.src = hlsUrls.playbackHlsUrl;
                    playerRef.current.play();
                }
            }
        }
    }, [hlsUrls, hlsState, playerRef.current]);

    return (
        <div>
            {hlsState !== "HLS_PLAYABLE" ? (
                <div>
                    <p>Live stream xali boshlanmadi yoki vaqtinchalik to&aposxtatildi</p>
                </div>
            ) : (
                hlsState === "HLS_PLAYABLE" && (
                    <div>
                        <video
                            ref={playerRef}
                            id="hlsPlayer"
                            autoPlay={true}
                            controls
                            style={{width: "100%", height: "100%"}}
                            playsInline
                            muted={false}
                            onError={(err) => {
                                console.log(err, "hls video error");
                            }}
                        ></video>
                    </div>
                )
            )}
        </div>
    );
}

function Container(props) {
    const [joined, setJoined] = useState(null);
    //Get the method which will be used to join the meeting.
    const {join} = useMeeting();
    const mMeeting = useMeeting({
        //callback for when a meeting is joined successfully
        onMeetingJoined: () => {
            setJoined("JOINED");
        },
        //callback for when a meeting is left
        onMeetingLeft: () => {
            props.onMeetingLeave();
        },
        //callback for when there is an error in a meeting
        onError: (error) => {
            alert(error.message);
        },
    });
    useEffect(() => {
        setJoined("JOINING");
        join();
    }, [])

    return (
        <div className="container">
            <h3>LIVE ID: {props.meetingId}</h3>
            {joined && joined === "JOINED" ? (
                mMeeting.localParticipant.mode === Constants.modes.CONFERENCE ? (
                    <SpeakerView/>
                ) : mMeeting.localParticipant.mode === Constants.modes.VIEWER ? (
                    <ViewerView/>
                ) : null
            ) : joined && joined === "JOINING" ? (
                <p><MiniLoader /></p>
            ) : null}
            <h5 onClick={() => props.onMeetingLeave()}>leave</h5>
        </div>
    );
}

function LiveApp({getMeetingAndToken, meetingId, onMeetingLeave}) {
    return (
        <Container onMeetingLeave={onMeetingLeave} meetingId={meetingId} getMeetingAndToken={getMeetingAndToken}/>
    )
}

export default LiveApp;