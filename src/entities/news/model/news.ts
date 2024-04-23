import {createEffect, createEvent, createStore, sample} from "effector";
import {NewsApi, NewsType} from "@/entities";
import {apiListDefaultData, ApiListType} from "@/shared";
import {NextRouter} from "next/router";

/* ------------------------------------------- Effects ------------------------------------------ */
export const fetchNewsListFx = createEffect({handler: NewsApi.fetchNewsList})

/* ------------------------------------------- Events ------------------------------------------- */
export const fetchNewsEv = createEvent<NextRouter | null>()

/* ------------------------------------------- Stores ------------------------------------------- */
export const $news = createStore<NextRouter | ApiListType<NewsType>>(apiListDefaultData)

/* -------------------------------------- Stores Modifying -------------------------------------- */
$news
    .on(fetchNewsListFx.doneData, (_, {data}) => data)

/* ------------------------------------------- Samples ------------------------------------------ */

sample({
    clock: fetchNewsEv,
    target: fetchNewsListFx
})