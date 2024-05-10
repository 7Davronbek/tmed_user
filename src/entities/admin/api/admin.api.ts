import {httpServer} from "@/shared/api";

export const adminApi = {
    createAdministration: (data: FormData) => httpServer.post<String>('/api/v1/admin/administration', data)
}