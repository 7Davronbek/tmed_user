import {ApiListType, QueryParamsType} from "@/shared";
import {ServiceType} from "@/entities/clinic-services";
import axios from "axios";

export const serviceApi = {
    fetchServiceInfinityList: async ({...params}: QueryParamsType) => await axios.get<ApiListType<ServiceType>>('http://82.215.78.34/PMS/api/v1.0/public/category/', {params}),
}