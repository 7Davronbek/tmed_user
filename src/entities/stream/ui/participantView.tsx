import { useEffect, useMemo, useRef } from "react";
import { useParticipant } from "@videosdk.live/react-sdk";
import ReactPlayer from "react-player";
import sx from "../style/style.module.scss";
import { Icon, nameTructed } from "@/shared";
import { toast } from "react-toastify";

export const ParticipantView = ({
  participantId,
}: {
  participantId: string;
}) => {
  const micRef = useRef<HTMLAudioElement>(null);
  const {
    webcamStream,
    micStream,
    webcamOn,
    micOn,
    isLocal,
    displayName,
    isActiveSpeaker,
    screenShareStream,
    screenShareOn,
  } = useParticipant(participantId);

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
  }, [micStream, micOn]);

  return (
    <div key={participantId}>
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
            url={videoStream}
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
    </div>
  );
};
