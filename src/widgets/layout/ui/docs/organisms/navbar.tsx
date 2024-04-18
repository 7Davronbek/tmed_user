'use client'
import sx from '../style/docs.module.scss'
import Link from 'next/link'
import { AppPathEnum, BaseButton, NavLink } from '@/shared'
import { useLocale, useTranslations } from 'next-intl'

export const DocsNavbar = () => {
  const t = useTranslations('Docs')
  const locale = useLocale()
  return (
    <div className={sx.docsLayout}>
      <h1 className={'title'}>{t('laws')}</h1>
      <div className={sx.wrap}>

        <Link className={`${sx.myBtn} ${NavLink.isActiveLink(`/${locale + AppPathEnum.DOCS}`) ? sx.active : ''}`}
              href={`/${locale + AppPathEnum.DOCS}`}><
          BaseButton text={t('laws')} />
        </Link>

        <Link
          className={`${sx.myBtn} ${NavLink.isActiveLink(`/${locale + AppPathEnum.DOCS + AppPathEnum.PRESIDENTIAL_DECREE}`) ? sx.active : ''}`}
          href={`/${locale + AppPathEnum.DOCS + AppPathEnum.PRESIDENTIAL_DECREE}`}><
          BaseButton text={t('presidentialDecrees')} />
        </Link>

        <Link
          className={`${sx.myBtn} ${NavLink.isActiveLink(`/${locale + AppPathEnum.DOCS + AppPathEnum.MINISTERIAL_DECISION}`) ? sx.active : ''}`}
          href={`/${locale + AppPathEnum.DOCS + AppPathEnum.MINISTERIAL_DECISION}`}><
          BaseButton text={t('ministerDecrees')} />
        </Link>

        <Link className={`${sx.myBtn} ${NavLink.isActiveLink('/docs/ministerial-decision') ? sx.active : ''}`}
              href={'/docs/ministerial-decision'}><
          BaseButton text={t('railwayDecrees')} />
        </Link>

        <Link className={`${sx.myBtn} ${NavLink.isActiveLink('/docs/ministerial-decision') ? sx.active : ''}`}
              href={'/docs/ministerial-decision'}><
          BaseButton text={t('svvDecrees')} />
        </Link>

      </div>
    </div>
  )
}