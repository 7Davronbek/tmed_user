'use client'

import { Icon, nameTructed } from "@/shared";
import { useMeeting, useParticipant } from "@videosdk.live/react-sdk";
import { useEffect, useMemo, useRef } from "react";
import ReactPlayer from "react-player";
import sx from "../style/style.module.scss";

export const PresenterView = ({ participantId }) => {
    const mMeeting = useMeeting();
    const presenterId = mMeeting?.presenterId;
    const micRef = useRef(null);

    const {
        webcamStream,
        micStream,
        webcamOn,
        micOn,
        isLocal,
        screenShareStream,
        screenShareOn,
        displayName,
        isActiveSpeaker,
    } = useParticipant(presenterId);

    const screenShare = useMemo(() => {
        if (screenShareOn && screenShareStream) {
            const mediaStream = new MediaStream();
            mediaStream.addTrack(screenShareStream.track);
            return mediaStream;
        }
    }, [screenShareStream, screenShareOn]);

    const videoStream = useMemo(() => {
        if (webcamOn && webcamStream) {
            const mediaStream = new MediaStream();
            mediaStream.addTrack(webcamStream.track);
            return mediaStream;
        }
    }, [webcamOn, webcamStream]);

    useEffect(() => {
        if (micRef.current) {
            if (micOn && micStream) {
                const mediaStream = new MediaStream();
                mediaStream.addTrack(micStream.track);

                micRef.current.srcObject = mediaStream;
                micRef.current
                    .play()
                    .catch((error) =>
                        toast.error("videoElem.current.play() failed", error)
                    );
            } else {
                micRef.current.srcObject = null;
            }
        }
    }, [micStream, micOn, micRef]);


    return (
        <>
            <audio ref={micRef} autoPlay muted={isLocal} />
            {webcamOn ? (
                <div className={sx.videoWrap}>
                    <ReactPlayer
                        playsinlinet
                        pip={false}
                        playIcon={<></>}
                        light={false}
                        controls={true}
                        muted={false}
                        playing={true}
                        url={participantId === presenterId ? screenShare : videoStream}
                        height={"400px"}
                        width={"100%"}
                        style={{ objectFit: "cover" }}
                        onError={(err) => {
                            toast.error(
                                err.message ? err.message : "Participant video error"
                            );
                        }}
                    />
                </div>
            ) : (
                <div className={sx.webCamOff}>
                    <h6>{displayName.substring(0, 1)}</h6>
                </div>
            )}
            <div className={sx.bottomWrap}>
                {micOn ? <Icon.MicrofonOn /> : <Icon.MicrofonOff />}
                <p>{nameTructed(displayName, 15)}</p>
                {isActiveSpeaker ? <div className={sx.speaking}></div> : null}
            </div>
        </>
    )
}