'use client'
import {useMeeting,} from "@videosdk.live/react-sdk";
import sx from '../style/style.module.scss'
import {Icon} from "@/shared";

export const Controls = ({localMicOn, localWebcamOn, setModal, meetingId}) => {
    const {leave, toggleMic, toggleWebcam} = useMeeting();
    return (
        <div className={sx.buttons}>
            <h5 onClick={() => navigator.clipboard.writeText(meetingId)} className={sx.clipboard}>{meetingId}</h5>
            <div className={sx.middle}>
                <h5 onClick={() => toggleMic()}>{!localMicOn ? <Icon.MicrofonOff/> : <Icon.MicrofonOn/>}</h5>
                <h5 onClick={() => toggleWebcam()}>{!localWebcamOn ? <Icon.VideoOff/> : <Icon.VideoOn/>}</h5>
                <h5 className={sx.end} onClick={() => leave()}>Tugatish</h5>
            </div>
            <h5 onClick={() => setModal(true)} className={sx.chat}>
                <Icon.ChatWhite/>
            </h5>
        </div>
    );
}