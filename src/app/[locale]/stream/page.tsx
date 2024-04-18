import { WelcomeScreen } from '@/entities'
import { Suspense } from 'react'
import { Loader } from '@/shared'

const StreamPage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <WelcomeScreen />
    </Suspense>
  )
}

export default StreamPage