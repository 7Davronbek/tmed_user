import { createEffect, createEvent, createStore, sample } from "effector";
import { aboutApi } from "../api";
import { AboutType, ISCREATE } from "../types";
import { $lang } from "./admin.model";
import { createForm } from "effector-forms";
import { toast } from "react-toastify";

// FORM
export const $aboutForm = createForm<AboutType>({
  fields: {
    description: {
      init: "",
      rules: [
        {
          name: "description",
          validator: (value: string) => !!value,
          errorText: "Description is required",
        },
      ],
    },
    descriptionRu: {
      init: "",
      rules: [
        {
          name: "descriptionRu",
          validator: (value: string) => !!value,
          errorText: "Description is required",
        },
      ],
    },
    descriptionEn: {
      init: "",
      rules: [
        {
          name: "descriptionEn",
          validator: (value: string) => !!value,
          errorText: "Description is required",
        },
      ],
    },
  },
  validateOn: ["submit"],
});

// EFFECT
export const fetchAboutListFx = createEffect({ handler: aboutApi.fetchAbouts });
export const fetchAboutDetailFx = createEffect({
  handler: aboutApi.fetchAbout,
});
export const createAboutFx = createEffect({ handler: aboutApi.createAbout });
export const deleteAboutFx = createEffect({ handler: aboutApi.deleteAbout });

// EVENT
export const getAboutListEv = createEvent();
export const getAboutDetailEv = createEvent<string>("");
export const deleteAboutEv = createEvent<string>("");
export const toggleAboutModalEv = createEvent();
export const isCreateToggleEv = createEvent<ISCREATE>();

// STORE
export const $aboutModal = createStore<boolean>(false);
export const $aboutList = createStore<AboutType[] | []>([]);
export const $aboutDetail = createStore<AboutType | null>(null);
export const $isCreate = createStore<ISCREATE>(ISCREATE.CREATE);

// STORE MODIFYING
$aboutModal.on(toggleAboutModalEv, (state) => !state);
$aboutList.on(fetchAboutListFx.doneData, (_, { data }) => data);
$aboutDetail.on(fetchAboutDetailFx.doneData, (_, { data }) => data);
$isCreate.on(isCreateToggleEv, (state) => state);

// SAMPLE
sample({
  clock: getAboutListEv,
  source: $lang,
  filter: (src) => !!src,
  fn: (src) => ({ lang: src! }),
  target: fetchAboutListFx,
});

sample({
  clock: $aboutForm.formValidated,
  fn: (src) => ({
    description: src.description,
    descriptionRu: src.descriptionRu,
    descriptionEn: src.descriptionEn,
  }),
  target: createAboutFx,
});

sample({
  clock: deleteAboutEv,
  filter: (src) => !!src,
  target: deleteAboutFx,
});

sample({
  clock: getAboutDetailEv,
  filter: (src) => !!src,
  target: [fetchAboutDetailFx, toggleAboutModalEv],
});

sample({
  // @ts-ignore
  clock: fetchAboutDetailFx.doneData,
  // @ts-ignore
  fn: ({ data }) => ({
    description: data.description,
    descriptionRu: data.descriptionRu,
    descriptionEn: data.descriptionEn,
  }),
  target: $aboutForm.setForm,
});

// WATCH
createAboutFx.doneData.watch(() => {
  toggleAboutModalEv();
  getAboutListEv();
  $aboutForm.reset;
  toast.success("Created successfully!");
});

deleteAboutFx.doneData.watch(() => {
  getAboutListEv();
  toast.error("Deleted successfully!");
});

deleteAboutFx.failData.watch(() => {
  toast.error("Something went wrong");
});

createAboutFx.failData.watch(() => {
  toast.error("Something went wrong");
});
