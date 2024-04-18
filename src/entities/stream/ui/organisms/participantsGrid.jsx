import { useMeeting } from '@videosdk.live/react-sdk'
import { useMemo } from 'react'
import SingleParticipant from '@/entities/stream/ui/molecules/singleParticipant'
import Chat from '@/entities/stream/ui/chat'
import sx from '../style/chat.module.scss'

const ParticipantsGridContainer = () => {
  const { participants } = useMeeting()

  const participantIds = useMemo(() => [...participants.keys()], [participants])

  return (
    <div className={sx.containerWrap}>
      {participantIds.slice(0,1).map((participantId) => (
        <div key={participantId}>
          <SingleParticipant
            {...{ participantId, key: participantId }}
          />
        </div>
      ))}
        <Chat />
    </div>
  )
}

export default ParticipantsGridContainer