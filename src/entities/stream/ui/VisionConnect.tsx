'use client'
import sx from '../style/style.module.scss'
import vision from '@/assets/images/visionConnect.png'
import Image from "next/image";
import {TextField} from "@mui/material";
import {BaseButton} from "@/shared";
import {useState} from "react";

export const VisionConnect = ({getMeetingAndToken, setUsername, setIsLive}: {
    getMeetingAndToken: (meeting?: string) => void,
    setUsername: (value: string) => void,
    setIsLive: (value: boolean) => void
}) => {
    const [meetingId, setMeetingId] = useState<string>('');
    const handleSubmit = async () => {
        getMeetingAndToken(meetingId);
        setIsLive(false)
    };
    return (
        <div className={sx.streamCard}>
            <div className={sx.top}>
                <h2>T-MED VISION CONNECT</h2>
            </div>
            <div className={sx.middle}>
                <Image src={vision} alt={'Vision connect'}/>
            </div>
            <div className={sx.bottom}>
                <TextField
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                    required fullWidth placeholder={'Username'}/>
                <TextField
                    onChange={(e) => {
                        setMeetingId(e.target.value);
                    }} required fullWidth placeholder={'Vision connect ID'}/>
                <div onClick={handleSubmit}><BaseButton active={true} text={'Присоединение к конференции VC'}/></div>
            </div>
        </div>
    )
}