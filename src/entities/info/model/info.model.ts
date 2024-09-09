// @ts-nocheck
import { createEffect, createEvent, createStore, sample } from "effector";
import { infoApi } from "../api";
import { $lang, changeLanguageEv } from "@/entities/admin";

export const fetchInfoListFx = createEffect({ handler: infoApi.fetchInfoList });
export const fetchInfoDetailFx = createEffect({
  handler: infoApi.fetchInfoDetail,
});
export const getInfoListEv = createEvent();
export const getInfoDetailEv = createEvent();
export const $infoList = createStore(null);
export const $infoDetail = createStore(null);

$infoList.on(fetchInfoListFx.doneData, (_, { data }) => data);
$infoDetail.on(fetchInfoDetailFx.doneData, (_, { data }) => data);

sample({
  clock: [getInfoListEv, changeLanguageEv],
  source: $lang,
  filter: (src) => !!src,
  fn: (src) => ({ lang: src! }),
  target: fetchInfoListFx,
});

sample({
  clock: [getInfoDetailEv, changeLanguageEv],
  source: $lang,
  filter: (lang, id) => !!lang && !!id,
  fn: (lang, id) => ({ lang, id }),
  target: fetchInfoDetailFx,
});
