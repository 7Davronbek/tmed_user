import {createEffect} from "effector/effector.mjs";
import {createEvent, createStore, sample} from "effector";
import {apiListDefaultData, ApiListType, QueryParamsType} from "@/shared";
import {serviceApi, ServiceType} from "@/entities/clinic-services";

export const fetchServiceInfinityFx = createEffect({handler: serviceApi.fetchServiceInfinityList})
export const getServiceInfinityListEv = createEvent<QueryParamsType>()
export const $serviceList = createStore<ApiListType<ServiceType>>(apiListDefaultData)
$serviceList
    .on(fetchServiceInfinityFx.done, (state, {params, result: {data}}) => {
        return {...state, ...data, results: params.offset ? [...state.results, ...data.results] : data.results}
    })

sample({
    clock: getServiceInfinityListEv,
    target: fetchServiceInfinityFx
})