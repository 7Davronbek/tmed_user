'use client'
import React, { FormEvent, useCallback, useEffect, useState } from 'react'
import { usePubSub } from '@videosdk.live/react-sdk'
import sx from './style/chat.module.scss'
import { useRouter } from 'next/navigation'
import {TextField} from "@mui/material";
import {BaseButton} from "@/shared";

const Chat = () => {

  const topic = 'CHAT'
  const [input, setInput] = useState('')

  const router = useRouter()

  const { publish, messages } = usePubSub(topic, )

  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    publish(input, { persist: true })
    setInput('')
    router.refresh()

    // publish(inputRef.current.value, { persist: true })
    // inputRef.current.value = ''
  }, [input, publish, router])
  useEffect(() => {
  }, [messages])

  return (
    <div className={sx.chat + ' ' +  sx.streamerChat}>
      <div className={sx.message}>
        {messages.map(item => {
          return (
            <div className={sx.wrap} key={item.id}>
              <h6>{item.senderName}</h6>
              <p>{item.message}</p>
            </div>
          )
        })}
      </div>
      <form style={{display: 'flex'}} onSubmit={handleSubmit}>
        <TextField fullWidth value={input} onChange={e => setInput(e.target.value)} type="text" />
        <button className={sx.button} type={'submit'}><BaseButton active={true} text={'Yuborish'} /></button>
      </form>
    </div>
  )
}

export default Chat