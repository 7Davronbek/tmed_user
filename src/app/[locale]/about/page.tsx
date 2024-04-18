import { AboutLayout } from '@/widgets/layout/ui'
import { AboutCompany } from '@/entities'
import { useTranslations } from 'next-intl'

const AboutPage = () => {
  const t = useTranslations('AboutUs')
  return (
    <>
        <AboutLayout title={t('aboutInstitution')}>
          <AboutCompany />
        </AboutLayout>
    </>
  )
}

export default AboutPage