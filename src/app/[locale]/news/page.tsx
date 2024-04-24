import { NewsLayout } from '@/widgets/layout'
import { useTranslations } from 'next-intl'
import {NewsCard} from "@/entities";
import {NewsCardFeature} from "@/features";

const NewsPage = () => {
  const t = useTranslations('Main')
  return (
    <NewsLayout title={t('news')}>
        <NewsCardFeature />
    </NewsLayout>
  )
}

export default NewsPage