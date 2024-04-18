'use client'
import sx from '@/widgets/layout/ui/main/style/main.module.scss'
import { Icon } from '@/shared'
import { useRouter, usePathname } from 'next/navigation'
import { ChangeEvent } from 'react'
import { useLocale } from 'next-intl'

export const NavbarSelect = () => {
  const router = useRouter()
  const pathname = usePathname()
  const local = useLocale()
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    router.replace(`/${e.target.value}${pathname.substring(3)}`)
  }
  return (
    <h5 className={sx.wrap}>
      <Icon.Lang />
      <select defaultValue={local} onChange={handleChange} className={sx.select}>
        <option value="uz">Uz</option>
        <option value="ru">Ru</option>
        <option value="en">En</option>
      </select>
    </h5>
  )
}