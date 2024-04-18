import { Grid } from '@mui/material'
import Image from 'next/image'
import banner1 from '@/assets/images/banner1.png'
import sx from '@/entities/main/ui/headerBanner/style.module.scss'
import banner2 from '@/assets/images/banner2.png'
import banner3 from '@/assets/images/banner3.png'
import banner4 from '@/assets/images/banner4.png'
import banner5 from '@/assets/images/banner5.png'

export const HeaderDesktop = () => {
  return (
    <Grid style={{ padding: '24px 0' }} justifyContent={'space-between'} container>
      <Grid item xs={3.7}>
        <Image
          src={banner1}
          className={sx.imageStyle}
          alt="T MED"
          priority
          width={0}
          height={0}
        />
      </Grid>
      <Grid display={'flex'} alignItems={'center'} flexDirection={'column'} justifyContent={'space-between'} item xs={4}>
        <Image
          src={banner2}
          className={sx.imageStyle}
          alt="T MED"
          priority
          width={0}
          height={0}
        />
        <Image
          src={banner3}
          className={sx.imageStyle}
          alt="T MED"
          priority
          width={0}
          height={0}
        />
      </Grid>
      <Grid display={'flex'} alignItems={'center'} flexDirection={'column'} justifyContent={'space-between'} item xs={4}>
        <Image
          src={banner4}
          className={sx.imageStyle}
          alt="T MED"
          width={0}
          height={0}
          priority
        />
        <Image
          src={banner5}
          className={sx.imageStyle}
          alt="T MED"
          priority
          width={0}
          height={0}
        />
      </Grid>
    </Grid>
  )
}