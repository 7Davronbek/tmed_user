import { MeetingProvider } from '@videosdk.live/react-sdk'
import { authToken } from '@/shared/utils/createNewRoom'
import ParticipantsGridContainer from '@/entities/stream/ui/organisms/participantsGrid'
import MediaControl from '@/entities/stream/ui/organisms/mediaControl'

const SpeakerScreen = ({ meetingId }) => {
  return (
    <MeetingProvider  token={authToken} config={{ meetingId, name: 'Streamer', micEnabled: true,webcamEnabled: true}} joinWithoutUserInteraction>
      <MediaControl />
      <ParticipantsGridContainer />
    </MeetingProvider>
  )
}

export default SpeakerScreen