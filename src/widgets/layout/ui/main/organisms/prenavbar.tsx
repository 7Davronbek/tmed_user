import React from "react";
import { Icon } from "@/shared";
import sx from "../style/main.module.scss";
import { NavbarSelect } from "@/widgets/layout/ui/main/molecules";
import { useTranslations } from "next-intl";

export const PreNavbar = () => {
  const t = useTranslations("Main");
  return (
    <div className={sx.prenavbar}>
      <h5 className={sx.wrap}>
        <Icon.Location width={24} height={24} color={"#00C1C1"} /> Toshkent{" "}
        <Icon.ArrowDown color={"#fff"} />
      </h5>

      <div className={sx.wrap + " " + sx.middle}>
        <a
          target={"_blank"}
          rel={"noreferrer"}
          href={"https://www.instagram.com/nsurailway"}
          className={sx.icon}
        >
          <Icon.Instagram />
        </a>
        <a
          target={"_blank"}
          rel={"noreferrer"}
          href={"https://www.facebook.com/nsurailways"}
          className={sx.icon}
        >
          <Icon.Facebook />
        </a>
        <a
          target={"_blank"}
          rel={"noreferrer"}
          href={"https://twitter.com/nsurailway"}
          className={sx.icon}
        >
          <Icon.Twitter />
        </a>
        <a
          target={"_blank"}
          rel={"noreferrer"}
          href={"https://t.me/nsurailway"}
          className={sx.icon}
        >
          <Icon.Telegram />
        </a>
        <a
          target={"_blank"}
          rel={"noreferrer"}
          href={"https://www.youtube.com/@nsurailway"}
          className={sx.icon}
        >
          <Icon.Youtube />
        </a>

        <div className={sx.left}></div>

        <a
          target={"_blank"}
          rel={"noreferrer"}
          href={"https://t.me/Medic_UTY"}
          className={sx.wrap}
        >
          <Icon.TelegramOutline /> {t("onlineConsultation")}
        </a>

        <a
          target={"_blank"}
          rel={"noreferrer"}
          href={"https://t.me/KutubxonaFil14"}
          className={sx.wrap}
          style={{ marginLeft: "20px" }}
        >
          {t("onlinelibrary")}
        </a>
        <div className={sx.left}></div>
        <a href={"tel: +998 (71) 299 98 27"} className={sx.wrap}>
          <Icon.Phone width={24} height={24} color={"#00C1C1"} /> +998 (71) 299
          98 27
        </a>

        <div className={sx.left}></div>
      </div>
      <NavbarSelect />
    </div>
  );
};
