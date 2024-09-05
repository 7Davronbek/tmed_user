import {ApiListType, QueryParamsType} from "@/shared";
import httpClient from "@/shared/api/axios";
import {InstitutionType} from "@/entities/institution";
import axios from "axios";

export const institutionApi = {
    fetchInstitutionList:async ({...params}: QueryParamsType) => await axios.get<ApiListType<InstitutionType>>('http://82.215.78.34/BMS/api/v1.0/public/org/?cluster=t-med', {params}),
}