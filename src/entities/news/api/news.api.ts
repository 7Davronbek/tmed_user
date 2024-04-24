import httpClient from "@/shared/api/axios";
import {ApiListType, ApiObjQueryParam, QueryParamsType} from "@/shared";
import {NewsType} from "@/entities";

export const newsApi = {
    fetchNewsList:async ({...params}: QueryParamsType) => await httpClient.get<ApiListType<NewsType>>('/SMMS/api/v1.0/public/post/', {params}),
    fetchNewsCommentList:async ({objectId, ...params}: ApiObjQueryParam) => await httpClient.get(`SMMS/api/v1.0/public/post/${objectId}/comment/`, {params})
}