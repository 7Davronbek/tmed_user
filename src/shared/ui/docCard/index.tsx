import { Icon } from "@/shared/icons";
import sx from "./doc.module.scss";
import { BaseButton } from "../button";
import { useTranslations } from "next-intl";
import { DocResType } from "@/entities";
type DocProps = DocResType & {
  deleteDoc?: (id: string) => void;
  image: string;
};
export function DocCard({
  id,
  link,
  image,
  lawType,
  name,
  deleteDoc,
}: DocProps) {
  const t = useTranslations("Docs");

  return (
    <div className={sx.card}>
      <a
        href={image}
        target="_blank"
        rel="noopener noreferrer"
        download
        className={sx.wrap}
      >
        <Icon.Docs />
        <span>{name}</span>
      </a>
      <div className={sx.download}>
        <a href={image} className={sx.mobileDownload}>
          <Icon.Download /> <span>{t("download")}</span>
        </a>
        <a target="_blank" href={link ? link : "#"} className={sx.btn}>
          <BaseButton text={t("link")} icon={<Icon.World />} active={true} />
        </a>
        {deleteDoc && (
          <button onClick={() => deleteDoc(String(id))}>
            <Icon.DeleteIcon />
          </button>
        )}
      </div>
    </div>
  );
}
