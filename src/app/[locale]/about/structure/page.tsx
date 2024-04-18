  import { AboutLayout } from '@/widgets/layout/ui'
import Image from 'next/image'
import structure from '@/assets/images/tree.png'
  import { useTranslations } from 'next-intl'

const StructurePage = () => {
  const t = useTranslations('AboutUs')
  return (
    <AboutLayout title={t('structure')}>
      <Image style={{ width: '100%', height: 'auto' }} src={structure} alt={'T MED Struktura'} />
    </AboutLayout>
  )
}
export default StructurePage