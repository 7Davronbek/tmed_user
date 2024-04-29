import {useCallback, useEffect, useMemo, useRef} from "react";
import {useMeeting, useParticipant} from "@videosdk.live/react-sdk";
import ReactPlayer from "react-player";
import sx from '../style/style.module.scss'
import {Icon} from "@/shared";

export const ParticipantView = ({participantId,}: { participantId: string }) => {
    const micRef = useRef<HTMLAudioElement>(null);
    const {leave, toggleMic, toggleWebcam} = useMeeting();
    const {webcamStream, micStream, webcamOn, micOn, isLocal, displayName} =
        useParticipant(participantId);

    const videoStream = useMemo(() => {
        if (webcamOn && webcamStream) {
            const mediaStream = new MediaStream();
            mediaStream.addTrack(webcamStream.track);
            return mediaStream;
        }
    }, [webcamStream, webcamOn]);

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

    const handleWebcam = () => {
        toggleWebcam()
    }

    const handleMic = () => {
        toggleMic()
    }

    return (
        <div key={participantId}>
            <div>
                {/*<h5 onClick={() => handleWebcam()}>Webcam: {webcamOn ? "ON" : "OFF"}</h5>*/}
                {/*<h5 onClick={() => handleMic()}>Mic:{" "}{micOn ? "ON" : "OFF"}</h5>*/}
            </div>

            {/*<div className={sx.buttons}>*/}
            {/*    <h5 onClick={() => toggleWebcam()}>{webcamOn ? <Icon.VideoOn/> : <Icon.VideoOff/>}</h5>*/}
            {/*    <h5 onClick={() => toggleMic()}>{micOn ? <Icon.MicrofonOn/> : <Icon.MicrofonOff/>}</h5>*/}
            {/*    <h5 onClick={() => leave()}>Leave</h5>*/}
            {/*</div>*/}

            <audio ref={micRef} autoPlay muted={isLocal}/>
            {webcamOn ? (
                <div className={sx.videoWrap}>
                    <ReactPlayer
                        //
                        playsinlinet
                        pip={false}
                        light={false}
                        controls={true}
                        muted={false}
                        playing={true}
                        url={videoStream}
                        height={"400px"}
                        width={"100%"}
                        style={{objectFit: 'cover'}}
                        onError={(err) => {
                            console.log(err, "participant video error");
                        }}
                    />
                </div>
            ) : <div className={sx.webCamOff}><h6>{displayName.substring(0, 1)}</h6></div>}
        </div>
    );
}