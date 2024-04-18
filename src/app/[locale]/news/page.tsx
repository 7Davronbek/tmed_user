import { News } from '@/entities'
import { NewsLayout } from '@/widgets/layout'
import { useTranslations } from 'next-intl'

const NewsPage = () => {
  const t = useTranslations('Main')
  return (
    <NewsLayout title={t('news')}>
      <News />
    </NewsLayout>
  )
}

export default NewsPage