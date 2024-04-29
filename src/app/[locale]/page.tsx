'use client'
import { Grid } from '@mui/material'
import Link from 'next/link'
import { BaseButton } from '@/shared'
import { FeedbackForm } from '@/entities/main/ui/feedbackForm'
import Image from 'next/image'
import railwayLogo from '@/assets/images/railwayLogo.svg'
import {
  CentralHospital,
  DoctorList,
  HeaderBanner,
  Institution,
  Managers,
  News,
  ServiceList,
  Statistics,
} from '@/entities'
import sx from './style/style.module.scss'
import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations('Main')
  return (
    <div>
      <div className="container">
        <HeaderBanner />

        <Grid marginTop={'56px'} className={sx.wrap}>
          <p className={'title'}>
            <Image
              src={railwayLogo}
              alt="T MED"
            />
            {t('institution')}
          </p>
          <Link href={'/'}>
            <BaseButton text={t('seeAll')} active={true} />
          </Link>
        </Grid>

        <Institution />

      </div>

      <CentralHospital />

      <div className="container">

        <Managers />

        <Grid marginBottom={'8px'}>
          <p className={'title'}>{t('clinicService')}</p>
        </Grid>

        <ServiceList />

        <Grid className={sx.wrap}>
          <p className={'title'}>{t('clinicDoctors')} (218)</p>
          <Link className={sx.link} href={'/'}>
            <BaseButton text={t('seeAll')} active={true} />
          </Link>
        </Grid>

        <DoctorList />

        <Grid className={sx.wrap}>
          <p className={'title'}>{t('news')}</p>
          <Link className={sx.link} href={'/'}>
            <BaseButton text={t('seeAll')} active={true} />
          </Link>
        </Grid>

        <News />

        <Statistics />

        <Grid className={sx.wrap}>
          <p className={'title'}>{t('sendFeedback')}</p>
        </Grid>

        <FeedbackForm />
      </div>
    </div>
  )
}