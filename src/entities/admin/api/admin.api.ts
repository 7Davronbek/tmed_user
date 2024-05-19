import {httpServer} from "@/shared/api";
import { QueryParamsType} from "@/shared";
import {AdminTypes} from "@/entities";

export const adminApi = {
    createAdministration: async (data: FormData) => await httpServer.post<String>('/api/v1/admin/administration', data, { headers: { 'Content-Type': 'multipart/form-data' } }),
    fetchAdministrations: async ({ lang }: QueryParamsType) => await httpServer.get<AdminTypes[]>(`/api/v1/public/${lang}/administration`),
    fetchAdministration: async (id: string) => await httpServer.get<AdminTypes>(`/api/v1/public/administration/${id}`),
    deleteAdministration: async(id: string) => await httpServer.delete(`/api/v1/admin/administration/${id}`)
}