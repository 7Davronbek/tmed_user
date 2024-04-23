import { NewsLayout } from '@/widgets/layout'
import { useTranslations } from 'next-intl'
import {NewsCard} from "@/entities";

const NewsPage = () => {
  const t = useTranslations('Main')
  return (
    <NewsLayout title={t('news')}>
        <NewsCard />
    </NewsLayout>
  )
}

export default NewsPage