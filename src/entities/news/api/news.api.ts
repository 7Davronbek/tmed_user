import httpClient from "@/shared/api/axios";
import {ApiListType, ApiObjQueryParam, QueryParamsType} from "@/shared";
import {NewsType} from "@/entities";
import axios from "axios";

export const newsApi = {
    fetchNewsList:async ({...params}: QueryParamsType) => await axios.get<ApiListType<NewsType>>('https://api.t-med.uz/SMMS/api/v1.0/public/post/', {params}),
    fetchNewsCommentList:async ({objectId, ...params}: ApiObjQueryParam) => await httpClient.get(`https://api.t-med.uz/SMMS/api/v1.0/public/post/${objectId}/comment/`, {params})
}