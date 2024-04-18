import Image from 'next/image'
import news from '@/assets/images/img.png'
import news2 from '@/assets/images/img_1.png'

export const News = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px'}}>
      <div>
        <Image style={{width: '100%', height: 'auto'}} src={news} alt={'T WED Yangiliklar'} />
      </div>

      <div>
        <Image style={{width: '100%', height: 'auto'}} src={news2} alt={'T WED Yangiliklar'} />
      </div>
    </div>
  )
}