'use client'
import { AboutCompany } from '@/entities'
import { useTranslations } from 'next-intl'
import AboutLayout from "@/widgets/layout/ui/about";

const AboutPage = async () => {
  const t = useTranslations('AboutUs')
  return (
    <div>
        <AboutLayout title={t('aboutInstitution')}>
          <AboutCompany />
        </AboutLayout>
    </div>
  )
}

export default AboutPage