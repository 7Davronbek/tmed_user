// @ts-nocheck
import {createEffect, createEvent, createStore, sample} from "effector";
import {CommentType, NewsType} from "../types";
import { ApiListType, QueryParamsType} from "@/shared";
import {newsApi} from "../api";
import { apiListDefaultData } from "@/shared/data/api";

// EFFECT
export const fetchInfiniteNewsFx = createEffect({handler: newsApi.fetchNewsList})
export const fetchInfiniteCommentsFx = createEffect({handler: newsApi.fetchNewsCommentList})

// EVENT
export const getInfiniteNewsEv = createEvent<QueryParamsType>()
export const getCommentIdEv = createEvent<NewsType>()
export const modalToggleEv = createEvent()

// STORE
export const $newsList = createStore<ApiListType<NewsType>>(apiListDefaultData)
export const $commentsList = createStore<ApiListType<CommentType>>(apiListDefaultData)
export const $news = createStore<NewsType | null>(null)
export const $commentModal = createStore<boolean>(false)

// STORE MODIFYING
$newsList
    .on(fetchInfiniteNewsFx.done, (state, {params, result: {data}}) => {
        return {...state, ...data, results: params.offset ? [...state.results, ...data.results] : data.results}
    })
$commentsList
    .on(fetchInfiniteCommentsFx.done, (state, {params, result: {data}}) => {
        return {...state, ...data, results: params.offset ? [...state.results, ...data.results] : data.results}
    })
$commentModal.on([getCommentIdEv,modalToggleEv], state => !state)
$news.on(getCommentIdEv, (_, payload) => payload)

// SAMPLE
sample({
    clock: getInfiniteNewsEv,
    target: fetchInfiniteNewsFx,
})

sample({
    clock: getCommentIdEv,
    fn: (src) => ({objectId: String(src.id!)}),
    target: fetchInfiniteCommentsFx,
})
