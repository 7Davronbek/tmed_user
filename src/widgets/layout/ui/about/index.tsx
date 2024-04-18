import { FC, PropsWithChildren, Suspense } from 'react'
import { AboutNavbar, Content } from '@/widgets/layout/ui/about/organisms'
import { Loader } from '@/shared'

type Props = PropsWithChildren & {
  title: string
}

export const AboutLayout: FC<Props> = ({ children, title }) => {
  return (
    <Suspense fallback={<Loader />}>
      <div className={'container'}>
        <AboutNavbar title={title} />
        <Content>
          {children}
        </Content>
      </div>
    </Suspense>
  )
}