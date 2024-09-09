// @ts-nocheck
import httpClient from "@/shared/api/axios";

export const infoApi = {
  fetchInfoList: async ({ lang }) =>
    await httpClient.get(`/${lang}/api/v1/contents/`),
  fetchInfoDetail: async ({ lang, id }) =>
    await httpClient.get(`/${lang}/api/v1/contents/${id}`),
};
