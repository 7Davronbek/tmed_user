// @ts-nocheck
import httpClient from "@/shared/api/axios";

export const infoApi = {
  fetchInfoList: async ({ lang, ...params }) =>
    await httpClient.get(`/${lang}/api/v1/contents/`, { params }),
  fetchInfoDetail: async ({ lang, id }) =>
    await httpClient.get(`/${lang}/api/v1/contents/${id}`),
};
