import { httpServer } from "@/shared/api";
import { StructureType } from "../types";

export const structureApi = {
  createStructure: async (data: FormData) =>
    await httpServer.post<String>("/api/v1/admin/structure", data, {
      headers: { "Content-Type": "multipart/form-data" },
    }),
  fetchStructures: async () =>
    await httpServer.get<StructureType[]>(`/en/api/v1/structure/`),
  deleteStructure: async (id: string) =>
    await httpServer.delete(`/api/v1/admin/structure/${id}`),
};
