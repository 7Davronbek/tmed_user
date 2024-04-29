import { HeaderMobile } from '@/entities/main/ui/headerBanner/headerMobile'
import { HeaderDesktop } from '@/entities/main/ui/headerBanner/headerDesktop'
import sx from './style.module.scss'

export const HeaderBanner = () => {
  return (
    <div>
      <div className={sx.desktop}>
        <HeaderDesktop />
      </div>
      <div className={sx.mobile}>
        <HeaderMobile />
      </div>
    </div>
  )
}