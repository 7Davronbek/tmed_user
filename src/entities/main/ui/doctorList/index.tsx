import { Grid } from '@mui/material'
import Image from 'next/image'
import doctor from '@/assets/images/shifokor.png'
import sx from './style.module.scss'

export const DoctorList = () => {
  return (
    <div>
      <Grid className={sx.doctorList} container justifyContent={'space-between'}>
        <Grid className={sx.gridWrap} item xs={3.9}>
          <div className={sx.cards}>
            <Image
              src={doctor}
              alt="T MED"
            />
            <div className={sx.wrap}>
              <p className={sx.name}>Kabuljonov Muhammadilyos</p>
              <p className={sx.title}>Dizayner</p>
              <p className={sx.title}>Ish tajribasi: <span>3 yil</span></p>
              <p className={sx.title}>Ish vaqti: <span>09:00-18:00</span></p>
            </div>
          </div>
        </Grid>
        <Grid className={sx.gridWrap} item xs={3.9}>
          <div className={sx.cards}>
            <Image
              src={doctor}
              alt="T MED"
            />
            <div className={sx.wrap}>
              <p className={sx.name}>Kabuljonov Muhammadilyos</p>
              <p className={sx.title}>Dizayner</p>
              <p className={sx.title}>Ish tajribasi: <span>3 yil</span></p>
              <p className={sx.title}>Ish vaqti: <span>09:00-18:00</span></p>
            </div>
          </div>
        </Grid>
        <Grid className={sx.gridWrap} item xs={3.9}>
          <div className={sx.cards}>
            <Image
              src={doctor}
              alt="T MED"
            />
            <div className={sx.wrap}>
              <p className={sx.name}>Kabuljonov Muhammadilyos</p>
              <p className={sx.title}>Dizayner</p>
              <p className={sx.title}>Ish tajribasi: <span>3 yil</span></p>
              <p className={sx.title}>Ish vaqti: <span>09:00-18:00</span></p>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}