import { BaseButton, Icon } from '@/shared'
import sx from '../style/docs.module.scss'
import { useTranslations } from 'next-intl'

export const DocsList = () => {
  const t = useTranslations('Docs')
  return (
    <div>
      <div className={sx.card}>
        <a href={'/files/doc1.pdf'}
           target="_blank"
           rel="noopener noreferrer"
           download
           className={sx.wrap}>
          <Icon.Docs />
          <span>27.02.2023 йил 182-Н буйруғи</span>
        </a>
        <div className={sx.download}>
            <a className={sx.mobileDownload}><Icon.Download /> <span>{t('download')}</span></a>
          <div className={sx.btn}><BaseButton text={t('link')} icon={<Icon.World />} active={true} /></div>
        </div>
      </div>
      <div className={sx.card}>
        <a href={'/files/doc2.pdf'}
           target="_blank"
           rel="noopener noreferrer"
           download
           className={sx.wrap}>
          <Icon.Docs />
          <span>56-Н от 24.02.2006</span>
        </a>
        <div className={sx.download}>
          <a className={sx.mobileDownload}><Icon.Download /> <span>{t('download')}</span></a>
          <div className={sx.btn}><BaseButton text={t('link')} icon={<Icon.World />} active={true} /></div>
        </div>
      </div>
      <div className={sx.card}>
        <a href={'/files/doc3.pdf'}
           target="_blank"
           rel="noopener noreferrer"
           download
           className={sx.wrap}>
          <Icon.Docs />
          <span>115-НЗ от 26.01.17</span>
        </a>
        <div className={sx.download}>
          <a className={sx.mobileDownload}><Icon.Download /> <span>{t('download')}</span></a>
          <div className={sx.btn}><BaseButton text={t('link')} icon={<Icon.World />} active={true} /></div>
        </div>
      </div>
      <div className={sx.card}>
        <a href={'/files/doc4.pdf'}
           target="_blank"
           rel="noopener noreferrer"
           download
           className={sx.wrap}>
          <Icon.Docs />
          <span>330-Н от 15.04.2022</span>
        </a>
        <div className={sx.download}>
          <a className={sx.mobileDownload}><Icon.Download /> <span>{t('download')}</span></a>
          <div className={sx.btn}><BaseButton text={t('link')} icon={<Icon.World />} active={true} /></div>
        </div>
      </div>
      <div className={sx.card}>
        <a href={'/files/doc5.pdf'}
           target="_blank"
           rel="noopener noreferrer"
           download
           className={sx.wrap}>
          <Icon.Docs />
          <span>740-Н от 30.10.2020</span>
        </a>
        <div className={sx.download}>
          <a className={sx.mobileDownload}><Icon.Download /> <span>{t('download')}</span></a>
          <div className={sx.btn}><BaseButton text={t('link')} icon={<Icon.World />} active={true} /></div>
        </div>
      </div>
      <div className={sx.card}>
        <a href={'/files/doc6.pdf'}
           target="_blank"
           rel="noopener noreferrer"
           download
           className={sx.wrap}>
          <Icon.Docs />
          <span>740-Н от 30.10.2020 (1-илова)</span>
        </a>
        <div className={sx.download}>
          <a className={sx.mobileDownload}><Icon.Download /> <span>{t('download')}</span></a>
          <div className={sx.btn}><BaseButton text={t('link')} icon={<Icon.World />} active={true} /></div>
        </div>
      </div>
      <div className={sx.card}>
        <a href={'/files/doc7.pdf'}
           target="_blank"
           rel="noopener noreferrer"
           download
           className={sx.wrap}>
          <Icon.Docs />
          <span>740-Н от 30.10.2020 (2-илова)</span>
        </a>
        <div className={sx.download}>
          <a className={sx.mobileDownload}><Icon.Download /> <span>{t('download')}</span></a>
          <div className={sx.btn}><BaseButton text={t('link')} icon={<Icon.World />} active={true} /></div>
        </div>
      </div>
    </div>
  )
}