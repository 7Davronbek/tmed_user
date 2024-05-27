"use client";
import { BaseButton } from "@/shared";
import { httpServer } from "@/shared/api";
// import {redirect} from "next/navigation"
import { useLocale } from "next-intl";
import { useState } from "react";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

const AdminPage = () => {
  const locale = useLocale();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    httpServer
      .post("api/v1/auth/authenticate", { phoneNumber, password })
      .then((res) => {
        // console.log(res.data.access_token)
        Cookies.set("tmed-token", res.data.access_token, { expires: 1 });
        Cookies.set("tmed-refresh-token", res.data.refresh_token, {
          expires: 7,
        });
        window.location.replace(`/${locale + "/admin/dashboard"}`);
      })
      .catch(() => {
        toast.error("Bad Request");
      });
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        width: "60%",
        margin: "auto",
        gap: "18px",
        padding: "50px 0 100px",
      }}
      onSubmit={handleLogin}
    >
      <h1>LOGIN</h1>
      <input
        className="input"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder={"Username"}
        type="text"
      />
      <input
        className="input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder={"Password"}
        type="password"
      />
      <button className="button" type={"submit"}>
        <BaseButton active={true} text={"Login"} />
      </button>
    </form>
  );
};

export default AdminPage;
