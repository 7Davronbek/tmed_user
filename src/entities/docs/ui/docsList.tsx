// @ts-nocheck
'use client'
import {
  BaseButton,
  DocCard,
  NoData,
} from "@/shared";
import sx from "../style/docs.module.scss";
import { useLocale, useTranslations } from "next-intl";
import { useUnit } from "effector-react";
import {
  $docList,
  DocType,
  LawType,
  fetchDocListFx,
  getDocsListEv,
} from "@/entities";
import { useEffect, useState } from "react";
import Link from "next/link";

export const DocsList = () => {
  const t = useTranslations("Docs");
  const locale = useLocale();

  const [{results}, isLoading] = useUnit([$docList, fetchDocListFx.pending]);
  const [data, setData] = useState<DocType[]>([]);
  
  const [activeBtn, setActiveBtn] = useState<LawType>(LawType.LAW);

  const handleChange = (id: LawType) => {
    setActiveBtn(id);
    const newResults = results?.filter((doc) => doc.law_type === id);
    setData(newResults);
  };

  useEffect(() => {
    const newData = results?.filter((doc) => doc.law_type === activeBtn);
    setData(newData);
  }, [results, activeBtn]);

  useEffect(() => {
    getDocsListEv();
  }, []);

  return (
    <div>
      <div className={sx.docsLayout}>
        <h1 className={"title"}>{t("laws")}</h1>
        <div className={sx.wrap}>
          <button className="button" onClick={() => handleChange(LawType.LAW)}>
            <BaseButton active={activeBtn === LawType.LAW} text={t("laws")} />
          </button>

          <button
            className="button"
            onClick={() => handleChange(LawType.PRESIDENTIAL)}
          >
            <BaseButton
              active={activeBtn === LawType.PRESIDENTIAL}
              text={t("presidentialDecrees")}
            />
          </button>

          <button
            className="button"
            onClick={() => handleChange(LawType.CABINET)}
          >
            <BaseButton
              active={activeBtn === LawType.CABINET}
              text={t("ministerDecrees")}
            />
          </button>

          <button
            className="button"
            onClick={() => handleChange(LawType.RAILWAY)}
          >
            <BaseButton
              active={activeBtn === LawType.RAILWAY}
              text={t("railwayDecrees")}
            />
          </button>

          <button className="button" onClick={() => handleChange(LawType.SSV)}>
            <BaseButton
              active={activeBtn === LawType.SSV}
              text={t("svvDecrees")}
            />
          </button>
        </div>
      </div>

      {data &&
        !isLoading &&
        data.map((item) => (
          <DocCard
            key={item.id}
            id={item.id}
            link={item.link}
            name={item.name}
            lawType={item.lawType}
            image={item.file}
          />
        ))}

      <NoData show={data?.length === 0 || isLoading} loading={isLoading} />
    </div>
  );
};
