import {NewsLayout} from '@/widgets/layout'
import {useTranslations} from 'next-intl'
import {NewsCardFeature} from "@/features";

export default function NewsPage() {
    const t = useTranslations('Main')
    return (
        <NewsLayout title={t('news')}>
            <NewsCardFeature />
        </NewsLayout>
    )
}