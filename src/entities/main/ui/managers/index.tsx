import { Grid } from '@mui/material'
import raxbar from '@/assets/images/raxbar.jpg'
import raxbar2 from '@/assets/images/raxbar2.jpg'
import { AdministrationsCard } from '@/shared'
import sx from './style.module.scss'
import { useTranslations } from 'next-intl'

export const Managers = () => {
  const t = useTranslations('Main')
  return (
    <div className={sx.managers}>
      <h1 className={'title'}>{t('management')}</h1>

      <Grid marginTop={4} className={sx.gridWrap} container>

        <AdministrationsCard email={'nvs@railway.uz'} image={raxbar} name={'MAMASIDIKOV MUXSINJON MUSAJONOVICH'}
                             phoneNumber={'+998 71 299-98-27'}
                             admissionDay={'Dushanbadan Jumagacha \n' +
                               '16:00 dan 18:00 gacha'}
                             jobTitle={'Sog\'liqni saqlash xizmati boshlig\'i'}
        />
        <AdministrationsCard email={'nvs26@mail.ru'} image={raxbar2} name={'SHAYUNUSOV BUNYOD SOLIYEVICH'} phoneNumber={'+998 71 299-75-45'}
                             admissionDay={'Dushanbadan Jumagacha \n' +
                               '16:00 dan 18:00 gacha'}
                             jobTitle={'Xizmat boshlig\'i o\'rinbosari - davolash bo\'limi mudiri'}
        />

      </Grid>
    </div>
  )
}
