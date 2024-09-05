"use client";
import { Grid } from "@mui/material";
import { AdministrationsCard, NoData } from "@/shared";
import { useTranslations } from "next-intl";
import { useUnit } from "effector-react";
import {
  $administrationDetail,
  $administrationList,
  AdminEnum,
  AdminTypes,
  fetchInfinityAdministrationFx,
  getInfiniteAdministrationEv,
} from "@/entities";
import { useEffect, useState } from "react";
import AboutLayout from "@/widgets/layout/ui/about";

const AdministrationPage = () => {
  const t = useTranslations("AboutUs");

  const [{results}, isLoading] = useUnit([
    $administrationList,
    fetchInfinityAdministrationFx.pending,
    $administrationDetail,
  ]);
  const [data, setData] = useState([]);

  const [activeBtn, setActiveBtn] = useState(
    AdminEnum.ADMINISTRATION
  );

  useEffect(() => {
    getInfiniteAdministrationEv();
  }, []);

  useEffect(() => {
    const newData = results?.filter(
      (item) => item.administration_type === activeBtn
    );
    setData(newData);
  }, [results, activeBtn]);

  return (
    <AboutLayout title={t("administration")}>
      <Grid gap={3} container justifyContent={"space-between"}>
        {data?.length > 0 &&
          !isLoading &&
          data.map((item) => (
            <AdministrationsCard
              key={item.id}
              image={String(item.file)}
              name={item.full_name}
              phoneNumber={item.phone_number}
              email={item.email}
              admissionDay={item.reception_day}
              staj={item.role}
              permission={item.permission}
              jobTitle={item.job_description}
            />
          ))}
      </Grid>

      <NoData show={data?.length === 0 || isLoading} loading={isLoading} />
    </AboutLayout>
  );
};
export default AdministrationPage;
