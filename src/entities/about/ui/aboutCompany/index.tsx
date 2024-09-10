// @ts-nocheck
"use client";
import { $aboutList, fetchAboutListFx, getAboutListEv } from "@/entities/admin";
import sx from "../../style/style.module.scss";
import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useUnit } from "effector-react";
// import { NoData } from "@/shared";
import parse from "html-react-parser";
import Image from "next/image";

export const AboutCompany = () => {

  useEffect(() => {
    getAboutListEv();
  }, []);
  const [results] = useUnit([$aboutList, fetchAboutListFx.pending]);

  return (
    <Grid alignItems={"center"} className={sx.aboutCompany} container>
      <Grid className={sx.gridWrap} item xs={12}>
        {!!results && (
          <div>
            <Image
              width={"200"}
              height={"200"}
              src={results.photo}
              alt={results.description}
            />
            <p>{parse(String(results.description))}</p>
          </div>
        )}
        {/* <NoData show={results || isLoading} loading={isLoading} /> */}
      </Grid>
    </Grid>
  );
};