// @ts-nocheck
"use client";
import Box from "@mui/material/Box";
import React, { ChangeEventHandler, FormEvent, useCallback } from "react";
import { BaseButton, fileToBase64, Icon } from "@/shared";
import {
  $structureForm,
  $structureModal,
  createStructureFx,
  toggleStructureModalEv,
} from "@/entities";
import { useForm } from "effector-forms";
import Image from "next/image";
import { useUnit } from "effector-react";
import sx from "./structure.module.scss";

export const StructureModal = () => {
  const { fields, eachValid, submit } = useForm($structureForm);
  const [loading, isOpen] = useUnit([
    createStructureFx.pending,
    $structureModal,
  ]);

  const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    async (e) => {
      if (e.target.files && e.target.files?.length > 0) {
        const url = await fileToBase64(e.target.files[0]);
        fields.file.onChange({ url: String(url), file: e.target.files[0] });
      } else {
        fields.file.onChange({ url: null });
      }
    },
    [fields.file]
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (eachValid) {
      submit();
    }
  };

  return (
    <div className={`${sx.card} ${isOpen ? sx.active : ""}`}>
      <form className={sx.form} onSubmit={handleSubmit}>
        <Box sx={{ width: "100%" }}>
          <div className={sx.cardWrap}>
            <input
              className=""
              accept="image/*, image/png"
              onChange={onChange}
              type="file"
            />
            {fields.file.value.url ? (
              <Image
                alt={"T-MED Client"}
                width={160}
                height={160}
                src={fields.file.value.url}
              />
            ) : (
              <div>No Image</div>
            )}
            <h5 className="errorMessage">
              {fields.file.errorText() && (
                <span>
                  <Icon.ErrorIcon /> {fields.file.errorText()}
                </span>
              )}
            </h5>
            <button
              className={"button"}
              disabled={!eachValid && !loading}
              type={"submit"}
            >
              <BaseButton active={true} text={"Save"} />
            </button>
          </div>
        </Box>
      </form>
      <div onClick={() => toggleStructureModalEv()} className={sx.close}></div>
    </div>
  );
};
