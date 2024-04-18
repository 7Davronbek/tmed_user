import { Grid } from '@mui/material'
import Image from 'next/image'
import statistics from '@/assets/images/statistics.png'
import uz from '@/assets/images/uz.png'
import sx from './style.module.scss'
import { useTranslations } from 'next-intl'

export const Statistics = () => {
  const t = useTranslations('Main')
  return (
    <div className={sx.statistics}>
      <p className={'title'}>{t('statistics')}</p>

      <Grid className={sx.grid} container>
        <Grid className={sx.cardStyle} item xs={2}>
          <h5 className={sx.textStyle}><span className={'primary-text-gradient'}>2005</span> {t('medicalService')}
          </h5>
          <Image
            src={statistics}
            className={sx.imageStyle}
            alt="T MED"
          />
        </Grid>
        <Grid className={sx.cardStyle} item xs={2.3}>
          <h5 className={sx.textStyle}><span className={'primary-text-gradient'}>3,5{t('mln')}</span> {t('medicalSupport')}</h5>
          <Image
            src={statistics}
            className={sx.imageStyle}
            alt="T MED"
          />
        </Grid>
        <Grid className={sx.cardStyle} item xs={2}>
          <h5 className={sx.textStyle}><span className={'primary-text-gradient'}>2008</span> {t('medicalProfessionals')}</h5>
          <Image
            src={statistics}
            className={sx.imageStyle}
            alt="T MED"
          />
        </Grid>
        <Grid className={sx.cardStyle} item xs={4}>
          <h5 className={sx.textStyle}><span className={'primary-text-gradient'}>12</span> {t('medicalCenter')}</h5>
          <Image
            src={uz}
            className={sx.imageStyle}
            alt="T MED"
          />
        </Grid>
      </Grid>
    </div>
  )
}