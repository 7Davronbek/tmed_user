import { NewsLayout } from '@/widgets/layout'
import { useTranslations } from 'next-intl'
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