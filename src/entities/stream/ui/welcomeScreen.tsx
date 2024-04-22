'use client'
import sx from '../style/style.module.scss'
import {useLocale, useTranslations} from 'next-intl'
import { FormEvent, useState } from 'react'
import { createNewRoom } from '@/shared/utils/createNewRoom'
import useLocalStorage from 'use-local-storage'
import { BaseButton, CONFERENCE, LocalstorageData, T_MED_DATA, VIEWER } from '@/shared'
import { useRouter } from 'next/navigation'
import { TextField } from '@mui/material'

export const WelcomeScreen = () => {
  const [meetingId, setMeetingId] = useState('')
  const [username, setUsername] = useState('')

  const [, setAppData] = useLocalStorage<LocalstorageData>(T_MED_DATA, { meetingId: '', mode: '', username: '' })
  const router = useRouter()
  const locale = useLocale()

  const createClick = async () => {
    const meetingId = await createNewRoom()
    setAppData({ meetingId, mode: CONFERENCE, username })
    router.push(`/${locale}/stream/room`)
  }
  const viewerClick = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setAppData({ meetingId, mode: VIEWER, username })
    router.push(`/${locale}/stream/room`)
  }
  const t = useTranslations('Main')
  return (
    <div className={sx.streamCard}>
      <div className={`container ${sx.containerWrap}`}>
        <h4 className={'title'}>{t('stream')}</h4>

        <div className={sx.w50} onClick={createClick}><BaseButton text={'Stream yaratish'} active={true} /></div>
        <br/>
        <br/>
        <br/>
        <form className={sx.w50} style={{ display: 'flex', flexDirection: 'column', gap: '12px'}} onSubmit={viewerClick}>
          <TextField
            fullWidth
            required={true}
            placeholder="Meeting ID kiriting"
            onChange={(e) => setMeetingId(e.target.value)}
            value={meetingId}
          />
          <TextField
            fullWidth
            required={true}
            placeholder="Ismingizni kiriting"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <button className={sx.button} type={'submit'}><BaseButton active={true} text={"Stream ga qo'shilish"} /></button>

        </form>
      </div>
    </div>
  )
}