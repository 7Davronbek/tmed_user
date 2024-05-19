"use client";
import { BaseButton, Icon, NoData, StrucutreCard } from "@/shared";
import sx from "../style/main.module.scss";
import {
  $structureList,
  StructureModal,
  deleteStructureEv,
  fetchStructureListFx,
  getStructureListEv,
  toggleStructureModalEv,
} from "@/entities";
import { useEffect } from "react";
import { useUnit } from "effector-react";
import Image from "next/image";
import Cookies from "js-cookie";

export default function StructurePage() {
  useEffect(() => {
    getStructureListEv();
  }, []);


  const [results, isLoading] = useUnit([
    $structureList,
    fetchStructureListFx.pending,
  ]);

  // const handleEdit = (id: string) => {};
  const handleDelete = (id: string) => {
    deleteStructureEv(id);
  };
  return (
    <div className={sx.dashboardPage}>
      <div className={sx.topWrap}>
        <h2>Structure</h2>
        <button onClick={() => toggleStructureModalEv()} className="button">
          <BaseButton
            active={true}
            icon={<Icon.AddIcon />}
            text={"Create structure"}
          />
        </button>
      </div>
      <div className={sx.bottomWrap}>
        {results &&
          !isLoading &&
          results.map((item) => (
            <StrucutreCard
              key={item.id}
              file={item.file}
              handleDelete={() => handleDelete(String(item.id))}
              image={item.image}
            />
          ))}
      </div>

      <NoData show={results.length === 0 || isLoading} loading={isLoading} />
      <StructureModal />
    </div>
  );
}
