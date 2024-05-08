import {ApiListType, QueryParamsType} from "@/shared";
import httpClient from "@/shared/api/axios";
import {ServiceType} from "@/entities/clinic-services";

export const serviceApi = {
    fetchServiceInfinityList: async ({...params}: QueryParamsType) => await httpClient.get<ApiListType<ServiceType>>('/PMS/api/v1.0/public/category/', {params}),
}