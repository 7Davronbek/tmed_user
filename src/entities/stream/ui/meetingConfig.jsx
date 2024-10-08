'use client'
import { ParticipantView } from "@/entities/stream/ui/participantView";
import { Controls } from "@/entities/stream/ui/controls";
import { useEffect, useState } from "react";
import sx from '../style/style.module.scss'
import { useMeeting } from "@videosdk.live/react-sdk";
import { MiniLoader } from "@/shared";
import Chat from "@/features/chat";
import { PresenterView } from './presenterView'

export const MeetingConfig = ({ onMeetingLeave, meetingId, modal, setModal }) => {
    const [joined, setJoined] = useState(null);
    const { join, participants, localWebcamOn, localMicOn } = useMeeting({
        onParticipantJoined,
        onMeetingJoined: () => {
            setJoined("JOINED");
        },
        onMeetingLeft: () => {
            onMeetingLeave();
        },
    });

    function onParticipantJoined(participant) {
        participant && participant.setQuality("high");
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        const joinMeeting = () => {
            setJoined("JOINING");
            setTimeout(() => {
                join();
            }, 2000)
        }
        joinMeeting()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const mMeeting = useMeeting();
    const isPresenting = !!mMeeting.presenterId;

    return (
        <div className={sx.meetingWrap}>
            {joined && joined === "JOINED" ? (
                <div className={sx.wrap}>
                    <div className={sx.left}>
                        <div className={sx.gridContainer}>
                            <Controls meetingId={meetingId} setModal={setModal} localMicOn={localMicOn} localWebcamOn={localWebcamOn} />
                            {[...participants.keys()].map((participantId) => {
                                return (
                                    <div className={sx.gridItem} key={participantId}>
                                        {isPresenting ?
                                            <PresenterView participantId={participantId} /> : null}
                                        {isPresenting ? null :
                                            <ParticipantView
                                                participantId={participantId}
                                            />}
                                    </div>
                                )
                            })}
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
                <div>Something went wrong</div>
            )}
        </div>
    );
}