import {ApiListType, QueryParamsType} from "@/shared";
import httpClient from "@/shared/api/axios";
import {InstitutionType} from "@/entities/institution";

export const institutionApi = {
    fetchInstitutionList:async ({...params}: QueryParamsType) => await httpClient.get<ApiListType<InstitutionType>>('/BMS/api/v1.0/public/org/?cluster=t-med', {params}),
}