'use client'
import useLocalStorage from 'use-local-storage'
import { CONFERENCE, LocalstorageData, T_MED_DATA } from '@/shared'
import { useRouter } from 'next/navigation'
import Viewer from '@/entities/stream/ui/viewer'
import SpeakerScreen from '@/entities/stream/ui/organisms/speakerScreen'

const RoomPage = () => {
  const [appData, setAppData] = useLocalStorage<LocalstorageData>(T_MED_DATA, { mode: '', meetingId: '' })
  const router = useRouter()
  if (appData === null || appData.meetingId === null || appData.meetingId === '') {
    return router.back()
  }
  return (
    <div className={'container'} style={{padding: '50px 0'}}>
      {appData.meetingId && (appData.mode === CONFERENCE) ?
        <> <SpeakerScreen meetingId={appData.meetingId} /></> :
        <><Viewer meetingId={appData.meetingId} setAppData={setAppData} /></>
      }
    </div>
  )
}

export default RoomPage