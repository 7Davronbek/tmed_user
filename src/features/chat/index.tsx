"use client";
import React, { FormEvent, useState } from "react";
import { useMeeting, usePubSub } from "@videosdk.live/react-sdk";
import sx from "./chat.module.scss";
import { TextField } from "@mui/material";
import { BaseButton, nameTructed, TimeFormatter } from "@/shared";
import { useLocale, useTranslations } from "next-intl";
import ScrollToBottom, { useScrollToBottom } from "react-scroll-to-bottom";
import { toast } from "react-toastify";

const Chat = ({ modal }: { modal: boolean }) => {
  const t = useTranslations("Main");
  const topic = "CHAT";
  const [input, setInput] = useState("");
  const scrollToBottom = useScrollToBottom();
  const locale = useLocale();
  const mMeeting = useMeeting();
  const localParticipantId = mMeeting?.localParticipant?.id;

  const { publish, messages } = usePubSub(topic, {
    onMessageReceived: (data) => {
      const localParticipantId = mMeeting?.localParticipant?.id;

      const { senderId, senderName, message } = data;

      const isLocal = senderId === localParticipantId;

      if (!isLocal) {
        // new Audio(
        //   `https://static.videosdk.live/prebuilt/notification.mp3`
        // ).play();

        toast(`${nameTructed(senderName, 15)} says: ${message}`);
      }
    },
    onOldMessagesReceived: (messages) => {
      console.log("Old Message ", messages);
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    scrollToBottom();
    publish(input, { persist: true });
    setInput("");
  };

  return (
    <div className={sx.chat + " " + `${modal ? sx.active : null}`}>
      <div className={sx.top}>
        <h3>{t("streamingChat")}</h3>
      </div>
      <ScrollToBottom className={sx.message}>
        {messages.map((item) => {
          const localSender = localParticipantId === item.senderId;
          return (
            <div className={localSender ? sx.active : sx.wrap} key={item.id}>
              {!localSender && (
                <div className={sx.imgWrap}>
                  {item.senderName.substring(0, 1).toUpperCase()}
                </div>
              )}

              <div className={sx.innerWrap}>
                <h6>
                  {localSender ? "You" : item.senderName}
                  <span>
                    {TimeFormatter.timeFormatterFn(
                      item.timestamp,
                      locale
                    ).substring(11)}
                  </span>
                </h6>
                <p>{item.message}</p>
              </div>
            </div>
          );
        })}
      </ScrollToBottom>
      <form style={{ display: "flex" }} onSubmit={handleSubmit}>
        <TextField
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
        />
        <button className={sx.button} type={"submit"}>
          <BaseButton active={true} text={t("send")} />
        </button>
      </form>
    </div>
  );
};

export default Chat;
