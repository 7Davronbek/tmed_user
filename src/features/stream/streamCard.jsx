'use client'
import {VisionConnect} from "@/entities/stream/ui";
import sx from './stream.module.scss'
import {useState} from "react";
import {authToken, createMeeting} from "@/entities/stream/api";
import {MeetingProvider} from "@videosdk.live/react-sdk";
import {MeetingConfig} from "@/entities/stream/ui/meetingConfig";
import LiveApp from "@/entities/live/live";
import {LiveConnect} from "@/entities/stream/ui/liveCard";

export const StreamCard = () => {
    const [meetingId, setMeetingId] = useState(null);
    const [username, setUsername] = useState('')
    const [isLive, setIsLive] = useState(false)
    const [modal, setModal] = useState(false)
    const getMeetingAndToken = async (id) => {
        const meetingId =
            id == null ? await createMeeting({token: authToken}) : id;
        setMeetingId(meetingId);
    };
    const onMeetingLeave = () => {
        setMeetingId(null);
    };

    return authToken && meetingId ? (
        <MeetingProvider
            config={{
                meetingId,
                micEnabled: true,
                webcamEnabled: true,
                name: username,
                mode: isLive ? 'VIEWER' : 'CONFERENCE'
            }}
            token={authToken}
        >
            {
                isLive ?
                    <LiveApp modal={modal} setModal={setModal} onMeetingLeave={onMeetingLeave} meetingId={meetingId} getMeetingAndToken={getMeetingAndToken}/>
                    :
                    <MeetingConfig modal={modal} setModal={setModal} meetingId={meetingId} onMeetingLeave={onMeetingLeave}/>
            }
        </MeetingProvider>
    ) : (
        <div className={sx.stream}>
            <h1>Jonli efir</h1>
            <div className={sx.streamCard}>
                <VisionConnect setIsLive={setIsLive} setUsername={setUsername} getMeetingAndToken={getMeetingAndToken}/>
                <LiveConnect setIsLive={setIsLive} setUsername={setUsername} getMeetingAndToken={getMeetingAndToken}/>
            </div>
        </div>
    )
}