import {create} from "zustand";
import {newsApi, NewsStore} from "@/entities";
import {apiListDefaultData} from "@/shared";
import httpClient from "@/shared/api/axios";
export const useNewsStore = create<NewsStore>((set) => ({
    isLoading: false,
    error: '',
    news: apiListDefaultData,
    comments: apiListDefaultData,
    isCommentModalOpen: false,
    infinityNews: apiListDefaultData,
    getNews: async () => {
        try {
            set({isLoading: true})
            // const {data} = await newsApi.fetchNewsList()
            set({isLoading: false})
        } catch (err) {
            set({isLoading: false, error: 'Something went wrong'})
        }
    },
    getComments: async (postId: string) => {
        try {
            // set({isLoading: true})
            const {data} = await httpClient.get(`SMMS/api/v1.0/public/post/${postId}/comment/`)
            set({comments: data})
        } catch (err) {
            set({isLoading: false, error: 'Something went wrong'})
        }
    },
    toggleModal: () => {
        set((state) => ({isCommentModalOpen: !state.isCommentModalOpen}))
    },
    getInfinityNews: async () => {
        const res = await httpClient.get('/SMMS/api/v1.0/public/post/')
    }
}))