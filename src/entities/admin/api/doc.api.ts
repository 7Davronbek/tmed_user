import { QueryParamsType } from "@/shared";
import { httpServer } from "@/shared/api";
import { DocType } from "../types";

export const docApi = {
    createDoc: async (data: FormData) => await httpServer.post<String>('/api/v1/admin/law', data, { headers: { 'Content-Type': 'multipart/form-data' } }),
    fetchDocs: async ({ lang }: QueryParamsType) => await httpServer.get<DocType[]>(`/api/v1/public/${lang}/law`),
    deleteDoc: async(id: string) => await httpServer.delete(`/api/v1/admin/law/${id}`)
}