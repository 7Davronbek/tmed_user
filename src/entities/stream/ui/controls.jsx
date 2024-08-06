'use client'
import { useMeeting, usePubSub, } from "@videosdk.live/react-sdk";
import sx from '../style/style.module.scss'
import { Icon, nameTructed } from "@/shared";
import { useState } from "react";
import { toast } from "react-toastify";

export const Controls = ({ localMicOn, localWebcamOn, setModal, meetingId,  }) => {
    const [copy, setCopy] = useState(false)
    const handleCopy = () => {
        setCopy(true)
        navigator.clipboard.writeText(meetingId)
        setTimeout(() => {
            setCopy(false)
        }, 3000)
    }

    const raiseHand = () => {
        publish("Raise Hand");
    };

    const _handleOnError = (data) => {
        const { code, message } = data;

        const joiningErrCodes = [
            4001, 4002, 4003, 4004, 4005, 4006, 4007, 4008, 4009, 4010,
        ];

        const isJoiningError = joiningErrCodes.findIndex((c) => c === code) !== -1;
        const isCriticalError = `${code}`.startsWith("500");

        new Audio(
            isCriticalError
                ? `https://static.videosdk.live/prebuilt/notification_critical_err.mp3`
                : `https://static.videosdk.live/prebuilt/notification_err.mp3`
        ).play();

        setMeetingErrorVisible(true);
        setMeetingError({
            code,
            message: isJoiningError ? "Unable to join meeting!" : message,
        });
    };

    const mMeeting = useMeeting({
        onError: _handleOnError,
    });

    const { publish } = usePubSub('RAISE_HAND', {
        onMessageReceived: (data) => {
            const localParticipantId = mMeeting?.localParticipant?.id;

            const { senderId, senderName } = data;

            const isLocal = senderId === localParticipantId;

            new Audio(
                `https://static.videosdk.live/prebuilt/notification.mp3`
            ).play();

            toast(`${isLocal ? "You" : nameTructed(senderName, 15)} raised hand 🖐🏼`);
        },
    });

    const { leave, toggleMic, toggleWebcam, localScreenShareOn, toggleScreenShare, presenterId } = useMeeting();
    return (
        <div className={sx.buttons}>
            <h5 onClick={() => handleCopy()} className={sx.clipboard}>{meetingId} {!copy ? <Icon.Copy /> :
                <Icon.CopySuccess />} </h5>
            <div className={sx.middle}>
                <h5 onClick={() => toggleMic()}>{!localMicOn ? <Icon.MicrofonOff /> : <Icon.MicrofonOn />}</h5>
                <h5 onClick={() => toggleWebcam()}>{!localWebcamOn ? <Icon.VideoOff /> : <Icon.VideoOn />}</h5>
                <h5 onClick={raiseHand}><Icon.HandShake /></h5>
                <h5 onClick={() => {toggleScreenShare()}}><Icon.ShareScreen /></h5>
                <h5 onClick={() => setModal(true)} className={sx.chat}>
                    <Icon.ChatWhite />
                </h5>
            </div>
            <h5 className={sx.end} onClick={() => leave()}><Icon.End /></h5>
        </div>
    );
}