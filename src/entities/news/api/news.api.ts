import httpClient from "@/shared/api/axios";
import {ApiListType} from "@/shared";
import {NewsType} from "@/entities";

export const NewsApi = {
    fetchNewsList: () => httpClient.get<ApiListType<NewsType>>('/SMMS/api/v1.0/public/post/'),
}