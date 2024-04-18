'use client'

import { FC } from 'react'
import sx from '@/widgets/layout/ui/about/style/navbar.module.scss'
import Link from 'next/link'
import { AppPathEnum, BaseButton, NavLink } from '@/shared'
import { useLocale, useTranslations } from 'next-intl'

type Props = {
  title: string
}
export const NewsNavbar: FC<Props> = ({ title }) => {
  const t = useTranslations('News')
  const tr = useTranslations('Main')
  const locale = useLocale()
  return (
    <div className={sx.aboutNavbar}>
      <h1 className={'title'}>{title}</h1>
      <div className={sx.wrap}>
        <Link className={`${sx.myBtn} ${NavLink.isActiveLink(`/${locale + AppPathEnum.NEWS}`) ? sx.active : ''}`}
              href={`/${locale + AppPathEnum.NEWS}`}><BaseButton
          text={tr('news')} />
        </Link>
        <Link
          className={`${sx.myBtn} ${NavLink.isActiveLink(`/${locale + AppPathEnum.NEWS + AppPathEnum.INFO}`) ? sx.active : ''}`}
          href={`/${locale + AppPathEnum.NEWS + AppPathEnum.INFO}`}><BaseButton
          text={t('usefulInfo')} />
        </Link>
      </div>
    </div>
  )
}