import axios from "axios";
import Cookies from "js-cookie";

export const httpServer = axios.create({
  baseURL: process.env.VITE_ADMIN_URL,
  headers: {
    // 'Accept': 'application/json',
    // 'Content-Type': 'multipart/form-data',
    // Authorization:
    //   "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIrOTk4OTQzNjk4MDU4IiwiaWF0IjoxNzE2MDYxNzYyLCJleHAiOjE3MTY2NjY1NjJ9.shwFfsmfddsvue-2wgaHyL4ildVyFpIyMEaAmeH5ENQ",
  },
});
httpServer.interceptors.request.use((config) => {
  const token = Cookies.get("tmed-token");
  const lang = Cookies.get("NEXT_LOCALE");

  config.headers["Accept-Language"] = lang

  if (token) {
    if (config?.headers?.notAuth === undefined) {
      config.headers = Object.assign(config?.headers || {}, {
        Authorization: "Bearer " + token,
      });
    } else {
      delete config.headers.notAuth;
    }
    return config;
  } else {
    delete config?.headers?.["Authorization"];

    return config;
  }
});
export default httpServer;
