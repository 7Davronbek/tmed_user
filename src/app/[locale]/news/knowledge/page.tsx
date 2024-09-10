// @ts-nocheck
"use client";
import { $infoList, getInfoListEv } from "@/entities";
import { NewsLayout } from "@/widgets/layout";
import { Grid, SxProps } from "@mui/material";
import { useUnit } from "effector-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const KnowledgePage = () => {
  const t = useTranslations("News");
  const tr = useTranslations("Main");
  const locale = useLocale();
  useEffect(() => {
    getInfoListEv({ type: "KNOWLEDGE" });
  }, []);

  const [results] = useUnit([$infoList]);

  return (
    <NewsLayout title={tr("news")}>
      <Grid sx={sx} container spacing={4}>
        {results?.results?.map((item) => (
          <Grid className="card" key={item.id} item xs={12} md={4}>
            <Link href={`/${locale}/news/info/${item.id}`}>
              <Image
                width={100}
                height={100}
                src={item.main_photo}
                alt="TMED CLIENT"
              />
              <h3>{item?.title}</h3>
              <p>
                {item?.short_description.length > 200
                  ? item?.short_description.substring(0, 200) + "..."
                  : item?.short_description}
              </p>
            </Link>
          </Grid>
        ))}
      </Grid>
    </NewsLayout>
  );
};

export default KnowledgePage;

const sx: SxProps = {
  marginTop: "20px",
  ".card": {
    transition: "all 0.1s ease-in-out",

    "&:hover": {
      translate: "0 -10px",

      a: {
        color: "#10338c",
      },
    },
  },
  img: {
    width: "100%",
    height: "auto",
  },

  h3: {
    margin: "12px 0 !important",
  },
};
