import {createEvent, createStore, sample} from "effector";
import {apiListDefaultData, ApiListType, QueryParamsType} from "@/shared";
import {institutionApi, InstitutionType} from "@/entities/institution";
import {createEffect} from "effector/effector.mjs";

export const fetchInstitutionInfinityListFx = createEffect({handler: institutionApi.fetchInstitutionList})
export const getInstitutionInfinityListEv = createEvent<QueryParamsType>()
export const $institutionList = createStore<ApiListType<InstitutionType>>(apiListDefaultData)
$institutionList
    .on(fetchInstitutionInfinityListFx.done, (state, {params, result: {data}}) => {
        return {...state, ...data, results: params.offset ? [...state.results, ...data.results] : data.results}
    })

sample({
    clock: getInstitutionInfinityListEv,
    target: fetchInstitutionInfinityListFx
})