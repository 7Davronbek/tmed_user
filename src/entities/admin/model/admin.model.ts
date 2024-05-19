import { createForm } from "effector-forms";
import { AdminEnum, AdminTypes } from "@/entities";
import { adminApi } from "@/entities/admin/api";
import { createEffect, createEvent, createStore, sample } from "effector";
import Cookies from "js-cookie";

// FORM
export const $administrationForm = createForm<AdminTypes>({
  fields: {
    email: {
      init: "",
      rules: [
        {
          name: "email",
          validator: (value: string) => /\S+@\S+\.\S+/.test(value),
          errorText: "Email is not valid",
        },
      ],
    },
    image: {
      init: { url: null },
      rules: [
        {
          name: "image",
          errorText: "Image is required",
          validator: (value) => Boolean(value.url),
        },
      ],
    },
    phoneNumber: {
      init: "",
      rules: [
        {
          name: "phoneNumber",
          validator: (value: string) => /^9989[012345789][0-9]{7}$/.test(value),
          errorText: "Phone number is not valid",
        },
      ],
    },
    administrationType: { init: "ADMINISTRATION" as AdminEnum },
    fullName: {
      init: "",
      rules: [
        {
          name: "fullName",
          validator: (value: string) => Boolean(value),
          errorText: "Full Name is required",
        },
      ],
    },
    fullNameRu: {
      init: "",
      rules: [
        {
          name: "fullNameRu",
          validator: (value: string) => Boolean(value),
          errorText: "Full Name is required",
        },
      ],
    },
    fullNameEn: {
      init: "",
      rules: [
        {
          name: "fullNameEn",
          validator: (value: string) => Boolean(value),
          errorText: "Full Name is required",
        },
      ],
    },
    role: {
      init: "",
      rules: [
        {
          name: "role",
          validator: (value: string) => Boolean(value),
          errorText: "Role is required",
        },
      ],
    },
    roleRu: {
      init: "",
      rules: [
        {
          name: "roleRu",
          validator: (value: string) => Boolean(value),
          errorText: "Role is required",
        },
      ],
    },
    roleEn: {
      init: "",
      rules: [
        {
          name: "roleEn",
          validator: (value: string) => Boolean(value),
          errorText: "Role is required",
        },
      ],
    },
    receptionDay: {
      init: "",
      rules: [
        {
          name: "receptionDay",
          validator: (value: string) => Boolean(value),
          errorText: "Reception day is required",
        },
      ],
    },
    receptionDayRu: {
      init: "",
      rules: [
        {
          name: "receptionDayRu",
          validator: (value: string) => Boolean(value),
          errorText: "Reception day is required",
        },
      ],
    },
    receptionDayEn: {
      init: "",
      rules: [
        {
          name: "receptionDayEn",
          validator: (value: string) => Boolean(value),
          errorText: "Reception day is required",
        },
      ],
    },
    jobDescription: { init: "" },
    jobDescriptionRu: { init: "" },
    jobDescriptionEn: { init: "" },
    permission: { init: "" },
    permissionRu: { init: "" },
    permissionEn: { init: "" },
  },

  validateOn: ["submit"],
});

// EFFECT
export const createAdministrationFx = createEffect({
  handler: adminApi.createAdministration,
});
export const fetchInfinityAdministrationFx = createEffect({
  handler: adminApi.fetchAdministrations,
});
export const fetchAdministrationFx = createEffect({
  handler: adminApi.fetchAdministration,
});
export const deleteAdministrationFx = createEffect({
  handler: adminApi.deleteAdministration,
});

// EVENT
export const getInfiniteAdministrationEv = createEvent();
export const getAdministrationEv = createEvent<string>("");
export const toggleAdministrationModalEv = createEvent();
export const deleteAdministrationEv = createEvent<string>("");

// STORE
export const $lang = createStore<string | null>(
  Cookies.get("NEXT_LOCALE") || null
);
export const $administrationModal = createStore<boolean>(false);
export const $administrationList = createStore<AdminTypes[] | []>([]);
export const $administrationDetail = createStore<AdminTypes | null>(null);

// STORE MODIFYING
$administrationList.on(
  fetchInfinityAdministrationFx.doneData,
  (_, { data }: any) => data
);

$administrationDetail.on(fetchAdministrationFx.doneData, (_, { data }) => data);
// $administrationList
//     .on(fetchInfinityAdministrationFx.doneData, (state, {params, result: {data}}) => {
//         return {...state, ...data, results: params.offset ? [...state.results, ...data.results] : data.results}
//     })

$administrationModal.on(toggleAdministrationModalEv, (state) => !state);

// SAMPLE
sample({
  clock: getInfiniteAdministrationEv,
  source: $lang,
  filter: (src) => !!src,
  fn: (src) => ({ lang: src! }),
  target: fetchInfinityAdministrationFx,
});

sample({
  clock: deleteAdministrationEv,
  filter: (src) => !!src,
  target: deleteAdministrationFx,
});

sample({
  clock: deleteAdministrationFx.done,
  target: getInfiniteAdministrationEv,
});

// sample({
//     clock: [$lang],
//     target: getInfiniteAdministrationEv
// })

sample({
  clock: $administrationForm.formValidated,
  fn: (form) => {
    const formData = new FormData();
    if (form.image) formData.append("file", form.image?.file!);
    if (form.email) formData.append("email", form.email);
    if (form.phoneNumber) formData.append("phoneNumber", form.phoneNumber);
    if (form.administrationType)
      formData.append("administrationType", form.administrationType);
    if (form.fullName) formData.append("fullName", form.fullName);
    if (form.fullNameRu) formData.append("fullNameRu", form.fullNameRu);
    if (form.fullNameEn) formData.append("fullNameEn", form.fullNameEn);
    if (form.role) formData.append("role", form.role);
    if (form.roleRu) formData.append("roleRu", form.roleRu);
    if (form.roleEn) formData.append("roleEn", form.roleEn);
    if (form.receptionDay) formData.append("receptionDay", form.receptionDay);
    if (form.receptionDayRu)
      formData.append("receptionDayRu", form.receptionDayRu);
    if (form.receptionDayEn)
      formData.append("receptionDayEn", form.receptionDayEn);
    if (form.jobDescription)
      formData.append("jobDescription", form.jobDescription);
    if (form.jobDescriptionRu)
      formData.append("jobDescriptionRu", form.jobDescriptionRu);
    if (form.jobDescriptionEn)
      formData.append("jobDescriptionEn", form.jobDescriptionEn);
    if (form.permission) formData.append("permission", form.permission);
    if (form.permissionRu) formData.append("permissionRu", form.permissionRu);
    if (form.permissionEn) formData.append("permissionEn", form.permissionEn);
    return formData;
  },
  target: createAdministrationFx,
});

sample({
  // @ts-ignore
  clock: toggleAdministrationModalEv,
  target: $administrationForm.reset,
});

sample({
  // @ts-ignore
  clock: createAdministrationFx.doneData,
  target: [
    $administrationForm.reset,
    getInfiniteAdministrationEv,
    toggleAdministrationModalEv,
  ],
});

sample({
  clock: getAdministrationEv,
  fn: (id) => id,
  target: fetchAdministrationFx,
});

// export const createAdministrationFx = createEffect({handler: adminApi.createAdministration})
//
// forward({
//     from: $administrationForm.formValidated,
//     to: createAdministrationFx,
// })
//
