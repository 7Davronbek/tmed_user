'use client'
import { Grid } from '@mui/material'
import footerBg from '@/assets/images/footer.png'
import Image from 'next/image'
import sx from '../style/main.module.scss'
import { Icon, sendFeedback } from '@/shared'
import qr from '@/assets/images/qr.png'
import card from '@/assets/images/card.png'
import { useTranslations } from 'next-intl'
import React, { useState } from 'react'
import InputMask from 'react-input-mask'

export const Footer = () => {
  const [phone, setPhone] = useState('+998')
  const [isLoading, setIsLoading] = useState(false)
  const t = useTranslations('Main')

  const sendFeedbackForm = async () => {
    setIsLoading(true)
    await sendFeedback({ phone })
    setIsLoading(false)
    setPhone('+998')
  }
  return (
    <div className={sx.footer}>
      <div className={sx.footerBg}><Image src={footerBg} alt={'footer'} /></div>
      <div className={'container'}>
        <Grid alignItems={'center'} className={sx.top} container spacing={1}>
          <Grid xs={12} item xl={1.5}>
            <Icon.TmedLogo isWhite={true} />
          </Grid>
          <Grid xs={12} item xl={5.5}>
            <h1>{t('questionOrSuggestion')}</h1>
          </Grid>
          <Grid xs={12} className={sx.bottom} item xl={5}>
            <InputMask
              mask="+998 (99) 999-99-99"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              disabled={false}
              placeholder={'+998_'}
              className={sx.inputMask}
            />

            <a style={{ opacity: `${isLoading ? '0.5' : '1'}` }} onClick={!isLoading ? sendFeedbackForm : () => {}}>{t('send')}</a>
          </Grid>
        </Grid>
        <Grid container className={sx.bottomNav}>
          <Grid className={sx.imageGrid} item xs={12} xl={3}>
            <Image src={qr} alt={'QR Code'} />
          </Grid>
          <Grid item xs={12} xl={5} className={sx.wrap}>
            <div>
              <a>{t('mobileApp')}</a>
              <a>{t('helpAndFeedback')}</a>
              <a>{t('paidServices')}</a>
            </div>
            <div>
              <a>{t('termsOfUse')}</a>
              <a>{t('privacyPolicy')}</a>
              <a>{t('webAds')}</a>
            </div>
          </Grid>
          <Grid item xs={12} xl={3}>
            <p>{t('paymentMethods')}</p>
            <Image style={{ width: '100%', height: 'auto' }} src={card} alt={'Payments'} />
          </Grid>
        </Grid>
      </div>
      <h6>©2024 T-med.uz. {t('allRightReserved')} </h6>
    </div>
  )
}

// const sx: SxProps = {
//   background: footerBg,
//   padding: '56px 0',
//
//   '.footerBg': {
//     position: 'absolute',
//     width: '100%',
//     height: '100%',
//     objectFit: 'cover',
//   },
// }