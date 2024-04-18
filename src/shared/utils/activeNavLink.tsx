import { usePathname } from 'next/navigation'
import { useLocale } from 'next-intl'

export class NavLink {
  public static isActiveNavLink = (path: string): boolean => {
    const pathname = usePathname()
    const local = useLocale()
    if (pathname) {
      if (path !== `/${local}`) {
        return pathname.startsWith(path)
      }
      return pathname === path
    }
    return false
  }

  public static isActiveLink = (path: string): boolean => {
    const pathname = usePathname()
    return path === pathname
  }
}