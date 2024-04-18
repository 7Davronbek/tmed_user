import { NewsLayout } from '@/widgets/layout'
import { News } from '@/entities'
import { useTranslations } from 'next-intl'

const InfoPage = () => {
  const t = useTranslations('News')
  return (
    <NewsLayout title={t('usefulInfo')}>
      <News />
    </NewsLayout>
  )
}

export default InfoPage