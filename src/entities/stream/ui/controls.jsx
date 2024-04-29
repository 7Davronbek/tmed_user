'use client'
import {useMeeting,} from "@videosdk.live/react-sdk";
import sx from '../style/style.module.scss'
import {Icon} from "@/shared";
import {useState} from "react";

export const Controls = ({localMicOn, localWebcamOn, setModal, meetingId}) => {
    const [copy, setCopy] = useState(false)
    const handleCopy = () => {
        setCopy(true)
        navigator.clipboard.writeText(meetingId)
        setTimeout(() => {
            setCopy(false)
        }, 3000)
    }

    const {leave, toggleMic, toggleWebcam} = useMeeting();
    return (
        <div className={sx.buttons}>
            <h5  onClick={() => handleCopy()} className={sx.clipboard}>{meetingId} {!copy ? <Icon.Copy /> : <Icon.CopySuccess />} </h5>
            <div className={sx.middle}>
                <h5 onClick={() => toggleMic()}>{!localMicOn ? <Icon.MicrofonOff/> : <Icon.MicrofonOn/>}</h5>
                <h5 onClick={() => toggleWebcam()}>{!localWebcamOn ? <Icon.VideoOff/> : <Icon.VideoOn/>}</h5>
                <h5 className={sx.end} onClick={() => leave()}>Chiqish</h5>
            </div>
            <h5 onClick={() => setModal(true)} className={sx.chat}>
                <Icon.ChatWhite/>
            </h5>
        </div>
    );
}