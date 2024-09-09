// @ts-nocheck
"use client";
import { $infoDetail, getInfoDetailEv } from "@/entities";
import { NewsLayout } from "@/widgets/layout";
import { Box, SxProps } from "@mui/material";
import { useUnit } from "effector-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import parse from "html-react-parser";

export default function InfoDetail() {
  const t = useTranslations("News");
  const params = useParams();

  const [results] = useUnit([$infoDetail]);
  console.log(results);

  useEffect(() => {
    getInfoDetailEv(params.id);
  }, [params.id]);

  return (
    <NewsLayout title={t("usefulInfo")}>
      <Box sx={sx}>
        <Image
          width={100}
          height={100}
          src={results?.main_photo}
          alt="TMED NEWS"
        />
        <h1>{results?.title}</h1>
        <div>{parse(String(results?.content))}</div>
      </Box>
    </NewsLayout>
  );
}

const sx:SxProps = {
    margin: '12px 0',

    img: {
        width: '100%',
        height: 'auto'
    },

    h1: {
        margin: '20px 0 !important',
        lineHeight: '43px'
    }
}