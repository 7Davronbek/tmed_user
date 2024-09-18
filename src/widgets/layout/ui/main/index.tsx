import { PropsWithChildren } from 'react'
import { Content, Footer, Navbar, PreNavbar } from '@/widgets/layout/ui/main/organisms'

export default async function MainLayout ({ children }:PropsWithChildren) {
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