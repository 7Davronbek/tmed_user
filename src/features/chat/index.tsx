'use client'
import React, {FormEvent, useState} from 'react'
import {usePubSub} from '@videosdk.live/react-sdk'
import sx from './chat.module.scss'
import {TextField} from "@mui/material";
import {BaseButton, TimeFormatter} from "@/shared";
import {useLocale} from "next-intl";
import ScrollToBottom, {useScrollToBottom, useSticky} from 'react-scroll-to-bottom';

const Chat = ({modal}: { modal: boolean }) => {
    const topic = 'CHAT'
    const [input, setInput] = useState('')
    const scrollToBottom = useScrollToBottom();
    const locale = useLocale()

    const {publish, messages} = usePubSub(topic, {
        onMessageReceived: (message) => {
            console.log("New Message ", message);
        },
        onOldMessagesReceived: (messages) => {
            console.log("Old Message ", messages);
        },
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        scrollToBottom()
        publish(input, {persist: true})
        setInput('')
    }

    return (
        <div className={sx.chat + ' ' + `${modal ? sx.active : null}`}>
            <div className={sx.top}>
                <h3>Streaming chat</h3>
            </div>
            <ScrollToBottom className={sx.message}>
                {messages.map(item => {
                    console.log(item)
                    return (
                        <div className={sx.wrap} key={item.id}>
                            <div className={sx.imgWrap}>{item.senderName.substring(0, 1).toUpperCase()}</div>
                            <div>
                                <h6>{item.senderName}
                                    <span>{TimeFormatter.timeFormatterFn(item.timestamp, locale).substring(11)}</span>
                                </h6>
                                <p>{item.message}</p>

                            </div>
                        </div>
                    )
                })}
            </ScrollToBottom>
            <form style={{display: 'flex'}} onSubmit={handleSubmit}>
                <TextField fullWidth value={input} onChange={e => setInput(e.target.value)} type="text"/>
                <button className={sx.button} type={'submit'}><BaseButton active={true} text={'Yuborish'}/></button>
            </form>
        </div>
    )
}

export default Chat