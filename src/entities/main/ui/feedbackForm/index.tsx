'use client'
import { FormLabel, Grid, TextField } from '@mui/material'
import { BaseButton, sendFeedback } from '@/shared'
import sx from './style.module.scss'
import { useTranslations } from 'next-intl'
import React, { useState } from 'react'
import InputMask from 'react-input-mask'

export const FeedbackForm = () => {
  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')
  const [phone, setPhone] = useState('+998')
  const [isLoading, setIsLoading] = useState(false)

  const sendFeedbackForm = async () => {
    setIsLoading(true)
    await sendFeedback({ name, phone, desc })
    setIsLoading(false)
    setName('')
    setPhone('+998')
    setDesc('')
  }
  const t = useTranslations('Main')
  return (
    <Grid className={sx.feedbackForm} container spacing={3}>

      <Grid className={sx.gridWrap} item xs={6}>
        <FormLabel htmlFor={'status-name'}>{t('FIO')}</FormLabel>
        <TextField
          fullWidth
          variant="outlined"
          id={'status-name'}
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </Grid>

      <Grid className={sx.gridWrap} item xs={6}>
        <FormLabel htmlFor={'status-phone'}>{t('phoneNumber')}</FormLabel>

        <InputMask
          placeholder="+998 (_) _ _ _"
          mask="+998 (99) 999-99-99"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          disabled={false}
          className={sx.inputMask}
          />
      </Grid>

      <Grid className={sx.gridWrap} item xs={6}>
        <FormLabel htmlFor={'status-izoh'}>{t('explanation')}</FormLabel>
        <TextField
          fullWidth
          variant="outlined"
          id={'status-izoh'}
          value={desc}
          onChange={e => setDesc(e.target.value)}
        />
      </Grid>

      <Grid item xs={6} />

      <div style={{ opacity: `${isLoading ? '0.5' : '1'}` }} onClick={!isLoading ? sendFeedbackForm : () => {
      }} className={sx.btn}><BaseButton text={t('send')} active={true} /></div>

    </Grid>
)
}