import { AboutLayout } from '@/widgets/layout/ui'
import { Grid } from '@mui/material'
import { AdministrationsCard } from '@/shared'
import raxbar4 from '@/assets/images/raxbar4.jpg'
import raxbar5 from '@/assets/images/raxbar5.jpg'
import raxbar6 from '@/assets/images/raxbar6.jpg'
import raxbar7 from '@/assets/images/raxbar7.jpg'
import { useTranslations } from 'next-intl'

const AdministrationPage = () => {
  const t = useTranslations('AboutUs')
  return (
    <AboutLayout title={t('administration')}>

      <Grid container justifyContent={'space-between'}>

        <AdministrationsCard image={raxbar4} name={'MAYMAKOVA SHAXLO RISBAYEVNA'} phoneNumber={'+998 71 299-96-83'}
                             email={'nvs@railway.uz'}
                             jobTitle={'Bosh ginekolog'}
        />

        <AdministrationsCard image={raxbar5} name={'KOCHKAROVA DILOROM RIXSIBOYEVNA'} phoneNumber={'+998 71 299-75-45'}
                             email={'omonvs1968@mail.ru'}
                             jobTitle={'Shifokor nazoratchi'}
        />

        <AdministrationsCard image={raxbar6} name={'UBAYDULLAEV ABDUXAFIZ MARUFJONOVICH'}
                             phoneNumber={'+998 71 299-95-07'} email={'nvs-injener@mail.ru'}
                             jobTitle={'Bosh muhandis'}
        />

        <AdministrationsCard image={raxbar7} name={'GANIEV BOBOMUROD SAIDMURODOVICH'} phoneNumber={'+998 71 299-91-55'}
                             email={'bobomurodganiev@gmail.com'}
                             jobTitle={'Yetakchi iqtisodchi'}
        />

      </Grid>

    </AboutLayout>
  )
}
export default AdministrationPage