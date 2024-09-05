import { FC, PropsWithChildren, Suspense } from 'react'
import { Loader } from '@/shared'
import { Content, DocsNavbar } from '@/widgets/layout/ui/docs/organisms'

const DocsTemplate: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Suspense fallback={<Loader />}>
      <div className="container">
        <Content>
          {children}
        </Content>
      </div>
    </Suspense>
  )
}

export default DocsTemplate