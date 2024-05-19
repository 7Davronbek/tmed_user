"use client";
import {
  $aboutList,
  $isCreate,
  AboutModal,
  ISCREATE,
  deleteAboutEv,
  fetchAboutListFx,
  getAboutDetailEv,
  getAboutListEv,
  isCreateToggleEv,
  toggleAboutModalEv,
} from "@/entities";
import { BaseButton, Icon, MiniLoader, NoData } from "@/shared";
import { useUnit } from "effector-react";
import parse from "html-react-parser";
import { useEffect } from "react";
import sx from "../style/main.module.scss";

const AboutUsPage = () => {
  useEffect(() => {
    getAboutListEv();
  }, []);
  const [results, isLoading, isCreate] = useUnit([
    $aboutList,
    fetchAboutListFx.pending,
    $isCreate,
  ]);

  const handleDelete = (id: string) => {
    deleteAboutEv(id);
  };

  const handleEdit = (id: string) => {
    getAboutDetailEv(id);
    isCreateToggleEv(ISCREATE.UPDATE);
    console.log($isCreate);
  };

  const handleCreate = () => {
    toggleAboutModalEv();
    isCreateToggleEv(ISCREATE.CREATE);
    console.log($isCreate);
  };

  return (
    <div className={sx.dashboardPage}>
      <div className={sx.topWrap}>
        <h2>Description</h2>
        <button onClick={() => handleCreate()} className="button">
          <BaseButton
            active={true}
            icon={<Icon.AddIcon />}
            text={"Description"}
          />
        </button>
      </div>
      {results && !isLoading &&
        results.map((item) => (
          <div key={item.id}>
            <p>{parse(String(item.description))}</p>
            <button onClick={() => handleEdit(String(item.id))}>
              <Icon.EditIcon />
            </button>
            <button onClick={() => handleDelete(String(item.id))}>
              <Icon.DeleteIcon />
            </button>
          </div>
        ))}
        <NoData show={results.length === 0 || isLoading} loading={isLoading} />
      <AboutModal />
    </div>
  );
};

export default AboutUsPage;
