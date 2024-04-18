import {useMeeting, Constants} from '@videosdk.live/react-sdk'
import {useCallback, useEffect, useMemo} from 'react'
import useLocalStorage from 'use-local-storage'
import {BaseButton, Icon, LocalstorageData, T_MED_DATA} from '@/shared'
import {useRouter} from 'next/navigation'
import sx from "@/entities/stream/ui/style/chat.module.scss";

const MediaControl = () => {
    const {toggleMic, toggleWebcam, startHls, stopHls, hlsState, meetingId} =
        useMeeting()

    const {isHlsStarted, isHlsStopped, isHlsPlayable} = useMemo(
        () => ({
            isHlsStarted: hlsState === Constants.hlsEvents.HLS_STARTED,
            isHlsStopped: hlsState === Constants.hlsEvents.HLS_STOPPED,
            isHlsPlayable: hlsState === Constants.hlsEvents.HLS_PLAYABLE,
        }),
        [hlsState],
    )
    const router = useRouter()

    useEffect(() => {

    }, [isHlsStarted, isHlsStopped, isHlsPlayable])

    const _handleToggleHls = useCallback(() => {
        if (isHlsStopped) {
            startHls({quality: 'high'})
        } else {
            stopHls()
        }
    }, [isHlsStopped, startHls, stopHls])

    const [, setAppData] = useLocalStorage(T_MED_DATA, {mode: '', meetingId: '', username: ''})
    const handleClick = () => {
        setAppData({meetingId: '', mode: ''})
        router.push('/en/stream')
        router.refresh()
    }

    return (
        <div style={{marginBottom: '20px'}}>
            <button className={sx.button} onClick={handleClick}><BaseButton icon={<Icon.ArrowDown/>} active={true}/>
            </button>
            <p>Meeting id: {meetingId}</p>
            <p>Xolati: {hlsState}</p>
            <div style={{padding: '10px 0 0 0'}}></div>
            <button className={sx.button} onClick={() => toggleMic()}><BaseButton active={true} text={'Mikrofon'}/>
            </button>
            <button className={sx.button} onClick={() => toggleWebcam()}><BaseButton active={true} text={'Kamera'}/>
            </button>
            <button className={sx.button} onClick={() => _handleToggleHls()}>
                <BaseButton active={true} text={"Stream"}/>
            </button>
        </div>
    )
}

export default MediaControl