import {
  createEffect,
  createEvent,
  createStore,
  restore,
  sample,
} from "effector";
import { aboutApi } from "../api";
import { AboutType } from "../types";
import { $lang, changeLanguageEv } from "../model";
import { createForm } from "effector-forms";
import { toast } from "react-toastify";

// FORM
// export const $aboutForm = createForm<AboutType>({
//   fields: {
//     description: {
//       init: "",
//       rules: [
//         {
//           name: "description",
//           validator: (value: string) => !!value,
//           errorText: "Description is required",
//         },
//       ],
//     },
//     descriptionRu: {
//       init: "",
//       rules: [
//         {
//           name: "descriptionRu",
//           validator: (value: string) => !!value,
//           errorText: "Description is required",
//         },
//       ],
//     },
//     descriptionEn: {
//       init: "",
//       rules: [
//         {
//           name: "descriptionEn",
//           validator: (value: string) => !!value,
//           errorText: "Description is required",
//         },
//       ],
//     },
//   },
//   validateOn: ["submit"],
// });

// EFFECT
export const fetchAboutListFx = createEffect({ handler: aboutApi.fetchAbouts });
export const fetchAboutDetailFx = createEffect({
  handler: aboutApi.fetchAbout,
});
export const createAboutFx = createEffect({ handler: aboutApi.createAbout });
export const updateAboutFx = createEffect({ handler: aboutApi.updateAbout });
export const deleteAboutFx = createEffect({ handler: aboutApi.deleteAbout });

// EVENT
export const getAboutListEv = createEvent();
export const getAboutDetailEv = createEvent<string>("");
export const deleteAboutEv = createEvent<string>("");
export const toggleAboutModalEv = createEvent();

// STORE
export const $aboutModal = createStore<boolean>(false);
export const $aboutList = createStore<AboutType | null>(null);
export const $aboutDetail = createStore<AboutType | null>(null);
export const $productId = restore(getAboutDetailEv, null);

// STORE MODIFYING
$aboutModal.on(toggleAboutModalEv, (state) => !state);
$aboutList.on(fetchAboutListFx.doneData, (_, { data }) => data);
$aboutDetail.on(fetchAboutDetailFx.doneData, (_, { data }) => data);

// SAMPLE
sample({
  clock: [getAboutListEv, changeLanguageEv],
  source: $lang,
  filter: (src) => !!src,
  fn: (src) => ({ lang: src! }),
  target: fetchAboutListFx,
});

// Create
// sample({
//   clock: $aboutForm.formValidated,
//   source: {
//     productId: $productId,
//   },
//   filter: ({ productId }, src) => !src.id && !productId,
//   fn: ({ productId }, src) => ({
//     description: src.description,
//     descriptionRu: src.descriptionRu,
//     descriptionEn: src.descriptionEn,
//   }),
//   target: createAboutFx,
// });

// Update
// sample({
//   clock: $aboutForm.formValidated,
//   source: {
//     productId: $productId,
//   },
//   filter: ({ productId }) => !!productId,
//   fn: ({ productId }, src) => ({
//     subjectId: productId!,
//     data: {
//       description: src.description,
//       descriptionRu: src.descriptionRu,
//       descriptionEn: src.descriptionEn,
//     },
//   }),
//   target: updateAboutFx,
// });

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

// sample({
//   // @ts-ignore
//   clock: fetchAboutDetailFx.doneData,
//   // @ts-ignore
//   fn: ({ data }) => ({
//     description: data.description,
//     descriptionRu: data.descriptionRu,
//     descriptionEn: data.descriptionEn,
//   }),
//   target: $aboutForm.setForm,
// });

// sample({
//   // @ts-ignore
//   clock: [createAboutFx.doneData, updateAboutFx.doneData],
//   target: [toggleAboutModalEv, getAboutListEv, $aboutForm.reset],
// });

// WATCH
createAboutFx.doneData.watch(() => {
  toast.success("Created successfully!");
});

updateAboutFx.doneData.watch(() => {
  toast.warning("Updated successfully!");
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
// TODO: $productId is saving and cannot create a new about
