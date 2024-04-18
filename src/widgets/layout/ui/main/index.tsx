import { FC, PropsWithChildren } from 'react'
import { Content, Footer, Navbar, PreNavbar } from '@/widgets/layout/ui/main/organisms'

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='mainLayout'>
      <div style={{backgroundColor: '#10338C'}} className="prenav">
        <div className="container">
          <PreNavbar />
        </div>
      </div>
      <div className="container">
        <Navbar />
      </div>
        <Content>
          {children}
        </Content>
      <Footer />
    </div>
  )
}