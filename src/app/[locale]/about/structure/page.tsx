'use client'
import { AboutLayout } from "@/widgets/layout/ui";
import Image from "next/image";
import structure from "@/assets/images/tree.png";
import { useTranslations } from "next-intl";
import { NoData, StrucutreCard } from "@/shared";
import { useEffect } from "react";
import {
  $structureList,
  fetchStructureListFx,
  getStructureListEv,
} from "@/entities";
import { useUnit } from "effector-react";

const StructurePage = () => {
  const t = useTranslations("AboutUs");
  useEffect(() => {
    getStructureListEv();
  }, []);

  const [results, isLoading] = useUnit([
    $structureList,
    fetchStructureListFx.pending,
  ]);
  return (
    <AboutLayout title={t("structure")}>
      {results &&
        !isLoading &&
        results.map((item) => (
          <StrucutreCard key={item.id} file={item.file} image={item.image} />
        ))}

      <NoData show={results.length === 0 || isLoading} loading={isLoading} />
    </AboutLayout>
  );
};
export default StructurePage;
