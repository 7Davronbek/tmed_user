"use client";
import { BaseButton, DocCard, Icon, NoData } from "@/shared";
import sx from "../style/main.module.scss";
import {
  $docList,
  $lang,
  DocModal,
  DocType,
  LawType,
  deleteDocEv,
  fetchDocListFx,
  getDocsListEv,
  toggleDocModalEv,
} from "@/entities";
import { useEffect, useState } from "react";
import { useUnit } from "effector-react";

export default function DocPage() {
  const [results, isLoading] = useUnit([$docList, fetchDocListFx.pending]);
  const [data, setData] = useState<DocType[]>([]);

  const [activeBtn, setActiveBtn] = useState<LawType>(LawType.LAW);

  const handleChange = (id: LawType) => {
    setActiveBtn(id);
    const newResults = results.filter((doc) => doc.lawType === id);
    setData(newResults);
  };

  const handleEdit = (id: string) => {
    console.log(id);
  };
  const handleDelete = (id: string) => {
    deleteDocEv(id);
  };

  useEffect(() => {
    const newData = results.filter((doc) => doc.lawType === activeBtn);
    setData(newData);
  }, [results, activeBtn]);

  useEffect(() => {
    getDocsListEv();
  }, []);
  return (
    <div className={sx.dashboardPage}>
      <div className={sx.topWrap}>
        <h2>Documentation</h2>
        <button onClick={() => toggleDocModalEv()} className="button">
          <BaseButton
            active={true}
            icon={<Icon.AddIcon />}
            text={"Create Documentation"}
          />
        </button>
      </div>

      <div className={sx.wrap}>
        <button className="button" onClick={() => handleChange(LawType.LAW)}>
          <BaseButton active={activeBtn === LawType.LAW} text="LAW" />
        </button>
        <button
          className="button"
          onClick={() => handleChange(LawType.PRESIDENTIAL)}
        >
          <BaseButton
            active={activeBtn === LawType.PRESIDENTIAL}
            text="PRESIDENTIAL"
          />
        </button>
        <button
          className="button"
          onClick={() => handleChange(LawType.CABINET)}
        >
          <BaseButton active={activeBtn === LawType.CABINET} text="CABINET" />
        </button>
        <button
          className="button"
          onClick={() => handleChange(LawType.RAILWAY)}
        >
          <BaseButton active={activeBtn === LawType.RAILWAY} text="RAILWAY" />
        </button>
        <button className="button" onClick={() => handleChange(LawType.SSV)}>
          <BaseButton active={activeBtn === LawType.SSV} text="SSV" />
        </button>
      </div>

      <div className={sx.bottomWrap}>
        {data &&
          !isLoading &&
          data.map((item) => (
            <DocCard
              key={item.id}
              id={item.id}
              deleteDoc={() => handleDelete(String(item.id))}
              link={item.link}
              name={item.name}
              lawType={item.lawType}
              image={item.image!}
            />
          ))}
      </div>

      <NoData show={data.length === 0 || isLoading} loading={isLoading} />
      <DocModal />
    </div>
  );
}
