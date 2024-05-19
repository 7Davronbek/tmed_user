"use client";
import { $aboutList, fetchAboutListFx, getAboutListEv } from "@/entities/admin";
import sx from "../../style/style.module.scss";
import { Grid } from "@mui/material";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { useUnit } from "effector-react";
import { NoData } from "@/shared";
import parse from "html-react-parser";

export const AboutCompany = () => {
  const t = useTranslations("AboutUs");

  useEffect(() => {
    getAboutListEv();
  }, []);
  const [results, isLoading] = useUnit([$aboutList, fetchAboutListFx.pending]);
  return (
    <Grid alignItems={"center"} className={sx.aboutCompany} container>
      <Grid className={sx.gridWrap} item xs={12}>
        {results &&
          !isLoading &&
          results.map((item) => (
            <div key={item.id}>
              <p>{parse(String(item.description))}</p>
            </div>
          ))}
        <NoData show={results.length === 0 || isLoading} loading={isLoading} />
      </Grid>
    </Grid>
  );
};
