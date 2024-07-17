'use client'
import { ParticipantView } from "@/entities/stream/ui/participantView";
import { Controls } from "@/entities/stream/ui/controls";
import { useEffect, useState } from "react";
import sx from '../style/style.module.scss'
import { useMeeting } from "@videosdk.live/react-sdk";
import { MiniLoader } from "@/shared";
import Chat from "@/features/chat";

export const MeetingConfig = ({ onMeetingLeave, meetingId, modal, setModal }) => {
    const [joined, setJoined] = useState(null);
    const { join, participants, localWebcamOn, localMicOn } = useMeeting({
        onMeetingJoined: () => {
            setJoined("JOINED");
        },
        onMeetingLeft: () => {
            onMeetingLeave();
        },
    });

    useEffect(() => {
        window.scrollTo(0, 0);
        const joinMeeting = () => {
            setJoined("JOINING");
            setTimeout(() => {
                join();
            }, 2000)
        }
        joinMeeting()
    }, []);

    return (
        <div className={sx.meetingWrap}>
            {joined && joined === "JOINED" ? (
                <div className={sx.wrap}>
                    <div className={sx.left}>
                        <div className={sx.gridContainer}>
                            <Controls meetingId={meetingId} setModal={setModal} localMicOn={localMicOn} localWebcamOn={localWebcamOn} />
                            {[...participants.keys()].map((participantId) => (
                                <div className={sx.gridItem} key={participantId}>
                                    <ParticipantView
                                        participantId={participantId}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={`${sx.right} ${modal ? sx.active : ''}`}>
                        <Chat modal={modal} />
                        <div onClick={() => setModal(false)} className={sx.close}></div>
                    </div>
                </div>
            ) : joined && joined === "JOINING" ? (
                <p><MiniLoader /></p>
            ) : (
                <div></div>
            )}
        </div>
    );
}