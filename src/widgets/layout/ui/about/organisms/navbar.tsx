'use client'
import Link from 'next/link'
import { FC } from 'react'
import sx from '../style/navbar.module.scss'
import { AppPathEnum, BaseButton, NavLink } from '@/shared'
import { useLocale, useTranslations } from 'next-intl'

type Props = {
  title: string
}
export const AboutNavbar: FC<Props> = ({ title }) => {
  const t = useTranslations('AboutUs')
  const tr = useTranslations('Main')
  const local = useLocale()
  return (
    <div className={sx.aboutNavbar}>
      <h1 className={'title'}>{title}</h1>
      <div className={sx.wrap}>
        <Link className={`${sx.myBtn} ${NavLink.isActiveLink(`/${local + AppPathEnum.ABOUT}`) ? sx.active : ''}`}
              href={`/${local + AppPathEnum.ABOUT}`}><BaseButton text={t('aboutInstitution')} />
        </Link>
        <Link
          className={`${sx.myBtn} ${NavLink.isActiveLink(`/${local + AppPathEnum.ABOUT + AppPathEnum.MANAGEMENT}`) ? sx.active : ''}`}
          href={`/${local + AppPathEnum.ABOUT + AppPathEnum.MANAGEMENT}`}><BaseButton text={tr('management')} />
        </Link>

        <Link className={`${sx.myBtn} ${NavLink.isActiveLink(`/${local + AppPathEnum.ABOUT + AppPathEnum.ADMINISTRATION}`) ? sx.active : ''}`}
              href={`/${local + AppPathEnum.ABOUT + AppPathEnum.ADMINISTRATION}`}><BaseButton text={t('administration')} />
        </Link>

        <Link className={`${sx.myBtn} ${NavLink.isActiveLink(`/${local + AppPathEnum.ABOUT + AppPathEnum.STRUCTURE}`) ? sx.active : ''}`}
              href={`/${local + AppPathEnum.ABOUT + AppPathEnum.STRUCTURE}`}><BaseButton text={t('structure')} />
        </Link>
      </div>
    </div>
  )
}