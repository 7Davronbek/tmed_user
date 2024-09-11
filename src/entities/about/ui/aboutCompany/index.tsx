// @ts-nocheck
"use client";
import { $aboutList, fetchAboutListFx, getAboutListEv } from "@/entities/admin";
import sx from "../../style/style.module.scss";
import { Grid, SxProps } from "@mui/material";
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
              src={results.main_photo}
              alt={results.description}
            />
            <div className={sx.box}>{parse(String(results.description))}</div>
            {results.images.map((item) => (
              <div key={item.id}>
                <Image
                  width={"200"}
                  height={"200"}
                  src={item.url}
                  alt={results.description}
                />
              </div>
            ))}
          </div>
        )}
        {/* <NoData show={results || isLoading} loading={isLoading} /> */}
      </Grid>
    </Grid>
  );
};
