import live from '@/assets/images/live.png'
import Image from "next/image";
import {TextField} from "@mui/material";
import {BaseButton} from "@/shared";
import {useState} from "react";
import sx from '../style/style.module.scss'

export const LiveConnect = ({getMeetingAndToken, setUsername, setIsLive}) => {
    const [meetingId, setMeetingId] = useState('');
    const handleSubmit = async () => {
        getMeetingAndToken(meetingId);
        setIsLive(true)
    };
    return (
        <div className={sx.streamCard}>
            <div className={sx.top}>
                <h2>T-MED VISION CONNECT</h2>
            </div>
            <div className={sx.middle}>
                <Image src={live} alt={'Vision connect'}/>
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