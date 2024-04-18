import sx from '../../style/style.module.scss'
import { Grid } from '@mui/material'
import { useTranslations } from 'next-intl'

export const AboutCompany = () => {
  const t = useTranslations('AboutUs')
  return (
    <Grid alignItems={'center'} className={sx.aboutCompany} container>
      <Grid className={sx.gridWrap} item xs={12}>
        <p>
          {t('description1')}
        </p>
        <br />
        <p>
          {t('description2')}
        </p>
        <br />
        <p>
          {t('description3')}
        </p>
        <br />
        <p>
          {t('description4')}
        </p>
        <br />
        <p>
          {t('description5')}
        </p>
        <br />
        <p>
          {t('description6')}
        </p>
      </Grid>
    </Grid>
  )
}