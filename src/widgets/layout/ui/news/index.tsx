import { FC, PropsWithChildren, Suspense } from 'react'
import { Content } from '@/widgets/layout/ui/docs/organisms'
import { NewsNavbar } from '@/widgets/layout/ui/news/organisms'
import { Loader } from '@/shared'

type Props = PropsWithChildren & {
  title: string
}

export const NewsLayout: FC<Props> = ({ children, title }) => {
  return (
    <Suspense fallback={<Loader />}>
      <div className={'container'}>
        <NewsNavbar title={title} />
        <Content>
          {children}
        </Content>
      </div>
    </Suspense>
  )
}