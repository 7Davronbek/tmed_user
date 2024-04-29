'use client'
import { AboutLayout } from '@/widgets/layout/ui'
import { AboutCompany } from '@/entities'
import { useTranslations } from 'next-intl'

const AboutPage = () => {
  const t = useTranslations('AboutUs')
  return (
    <div    >
        <AboutLayout title={t('aboutInstitution')}>
          <AboutCompany />
        </AboutLayout>
    </div>
  )
}

export default AboutPage