'use client'
import Link from 'next/link'

const NotFound = () => {
  return (

    <html lang="uz">
    <body>
    <div className={'container'}>
      <h3 style={{ textAlign: 'center', padding: '50px 0', fontWeight: 500 }}>Page not found <Link href={'/'}>GO
        HOME</Link></h3>
    </div>
    </body>
    </html>
  )
}

export default NotFound