import { ApiObjSubjBody, QueryParamsType } from "@/shared";
import { httpServer } from "@/shared/api";
import { AboutType } from "../types";

export const aboutApi = {
  createAbout: async (data: AboutType) =>
    await httpServer.post<void>("/api/v1/admin/about", data),
  updateAbout: async ({ subjectId, data }: ApiObjSubjBody<AboutType>) =>
    await httpServer.put<void>("/api/v1/admin/about/" + subjectId, data),
  fetchAbouts: async ({ lang }: QueryParamsType) =>
    await httpServer.get<AboutType>(`/${lang}/api/v1/about-us/`),
  fetchAbout: async (id: string) =>
    await httpServer.get<AboutType>(`/api/v1/public/about/${id}`),
  deleteAbout: async (id: string) =>
    await httpServer.delete(`/api/v1/admin/about/${id}`),
};
