"use client";
import { FC, PropsWithChildren, Suspense, useEffect } from "react";
import { Loader } from "@/shared";
import sx from "./style/main.module.scss";
import Link from "next/link";
import { useLocale } from "next-intl";
import Cookie from "js-cookie";

const DashboardTemplate: FC<PropsWithChildren> = ({ children }) => {
  const locale = useLocale();

  useEffect(() => {
    if (!Cookie.get("tmed-token")) {
      window.location.replace(`/${locale + "/admin"}`);
    }
  }, [locale]);

  const logout = () => {
    Cookie.remove("tmed-token");
    Cookie.remove("tmed-refresh-token");
    window.location.replace(`/${locale + "/admin"}`);
  };
  return (
    <Suspense fallback={<Loader />}>
      <div className={sx.dashboard}>
        <div className={sx.wrap}>
          <div className={sx.left}>
            <Link href={`/${locale}/admin/dashboard`}>Administrations</Link>
            <Link href={`/${locale}/admin/dashboard/doc`}>Docs</Link>
            <Link href={`/${locale}/admin/dashboard/about-us`}>About Us</Link>
            <Link href={`/${locale}/admin/dashboard/structure`}>Structure</Link>
            <button className="button" style={{display: 'block', marginLeft: 'auto', border: '1px solid silver', padding: '10px', borderRadius: '10px'}} onClick={logout}>LOGOUT</button>
          </div>
          <div className={sx.right}>{children}</div>
        </div>
      </div>
    </Suspense>
  );
};

export default DashboardTemplate;
