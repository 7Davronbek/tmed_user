'use client'
import { AboutLayout } from "@/widgets/layout/ui";
import { Grid } from "@mui/material";
import { AdministrationsCard, NoData } from "@/shared";
import raxbar4 from "@/assets/images/raxbar4.jpg";
import raxbar5 from "@/assets/images/raxbar5.jpg";
import raxbar6 from "@/assets/images/raxbar6.jpg";
import raxbar7 from "@/assets/images/raxbar7.jpg";
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

const AdministrationPage = () => {
  const t = useTranslations("AboutUs");

  const [results, isLoading] = useUnit([
    $administrationList,
    fetchInfinityAdministrationFx.pending,
    $administrationDetail,
  ]);
  const [data, setData] = useState<AdminTypes[]>([]);

  const [activeBtn, setActiveBtn] = useState<AdminEnum>(
    AdminEnum.ADMINISTRATION
  );

  useEffect(() => {
    getInfiniteAdministrationEv();
  }, []);

  useEffect(() => {
    const newData = results.filter(
      (item) => item.administrationType === activeBtn
    );
    setData(newData);
  }, [results, activeBtn]);

  return (
    <AboutLayout title={t("administration")}>
      <Grid gap={3} container justifyContent={"space-between"}>
        {data.length > 0 &&
          !isLoading &&
          data.map((item) => (
            <AdministrationsCard
              key={item.id}
              image={String(item.image)}
              name={item.fullName}
              phoneNumber={item.phoneNumber}
              email={item.email}
              admissionDay={item.receptionDay}
              staj={item.jobDescription}
              permission={item.permission}
              jobTitle={item.role}
            />
          ))}
      </Grid>

      <NoData show={data.length === 0 || isLoading} loading={isLoading} />
    </AboutLayout>
  );
};
export default AdministrationPage;
