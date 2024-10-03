"use client";
import { FormLabel, Grid, TextareaAutosize, TextField } from "@mui/material";
import { BaseButton, sendFeedback } from "@/shared";
import sx from "./style.module.scss";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import InputMask from "react-input-mask";
import { toast } from "react-toastify";

export const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [phone, setPhone] = useState("+998");
  const [isLoading, setIsLoading] = useState(false);

  const sendFeedbackForm = async () => {
    if (phone.length < 19) {
      toast.error("Phone number is important");
    } else {
      setIsLoading(true);
      await sendFeedback({ name, phone, desc });
      setIsLoading(false);
      setName("");
      setPhone("+998");
      setDesc("");
    }
  };
  const t = useTranslations("Main");
  return (
    <Grid className={sx.feedbackForm} container spacing={3}>
      <Grid className={sx.gridWrap} item xs={6}>
        <FormLabel htmlFor={"status-name"}>{t("FIO")}</FormLabel>
        <TextField
          fullWidth
          variant="outlined"
          id={"status-name"}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Grid>

      <Grid className={sx.gridWrap} item xs={6}>
        <FormLabel htmlFor={"status-phone"}>{t("phoneNumber")}</FormLabel>

        <InputMask
          id={"status-phone"}
          placeholder="+998 (_) _ _ _"
          mask="+998 (99) 999-99-99"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          disabled={false}
          className={sx.inputMask}
        />
      </Grid>

      <Grid className={sx.gridWrap} item xs={12}>
        <FormLabel htmlFor={"status-izoh"}>{t("explanation")}</FormLabel>
        <TextareaAutosize
          minRows={10}
          maxRows={10}
          className="input"
          id={"status-izoh"}
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
      </Grid>

      <Grid item xs={6} />

      <div
        style={{ opacity: `${isLoading ? "0.5" : "1"}` }}
        onClick={!isLoading ? sendFeedbackForm : () => {}}
        className={sx.btn}
      >
        <BaseButton text={t("send")} active={true} />
      </div>
    </Grid>
  );
};
