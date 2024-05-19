import { createForm } from "effector-forms";
import { DocType, LawType } from "../types";
import { createEffect, createEvent, createStore, sample } from "effector";
import { docApi } from "../api";
import { $lang } from "./admin.model";
import { toast } from "react-toastify";

export const $docsForm = createForm<DocType>({
  fields: {
    name: {
      init: "",
      rules: [
        {
          name: "name",
          validator: (value: string) => !!value,
          errorText: "Name is required",
        },
      ],
    },
    nameRu: {
      init: "",
      rules: [
        {
          name: "nameRu",
          validator: (value: string) => !!value,
          errorText: "Name is required",
        },
      ],
    },
    nameEn: {
      init: "",
      rules: [
        {
          name: "nameEn",
          validator: (value: string) => !!value,
          errorText: "Name is required",
        },
      ],
    },
    link: {
      init: "",
    },
    lawType: {
      init: LawType.LAW,
    },
    file: {
      init: { url: null },
      rules: [
        {
          name: "file",
          errorText: "File is required",
          validator: (value) => Boolean(value.url),
        },
      ],
    },
  },
  validateOn: ["submit"],
});

// EFFECT
export const createDocFx = createEffect({
  handler: docApi.createDoc,
});
export const fetchDocListFx = createEffect({
  handler: docApi.fetchDocs,
});
export const deleteDocFx = createEffect({
  handler: docApi.deleteDoc,
});

// EVENT
export const getDocsListEv = createEvent();
export const toggleDocModalEv = createEvent();
export const deleteDocEv = createEvent<string>("");

// STORE
export const $docModal = createStore<boolean>(false);
export const $docList = createStore<DocType[] | []>([]);

// STORE MODIFYING
// @ts-ignore
$docList.on(fetchDocListFx.doneData, (_, { data }) => data);
$docModal.on(toggleDocModalEv, (state) => !state);

// SAMPLE
sample({
  clock: getDocsListEv,
  source: $lang,
  filter: (src) => !!src,
  fn: (src) => ({ lang: src! }),
  target: fetchDocListFx,
});

// sample({
//   clock: deleteDocEv,
//   filter: (src) => !!src,
//   target: [deleteDocFx, getDocsListEv],
// });

sample({
  // @ts-ignore
  clock: toggleDocModalEv,
  target: $docsForm.reset
})

sample({
  clock: $docsForm.formValidated,
  fn: (form) => {
    const formData = new FormData();
    if (form.file) formData.append("file", form.file?.file!);
    if (form.lawType) formData.append("lawType", form.lawType);
    if (form.name) formData.append("name", form.name);
    if (form.nameRu) formData.append("nameRu", form.nameRu);
    if (form.nameEn) formData.append("nameEn", form.nameEn);
    if (form.link) formData.append("link", form.link);
    return formData;
  },
  target: createDocFx,
});

// WATCH
createDocFx.doneData.watch(() => {
  toggleDocModalEv();
  $docsForm.reset;
  getDocsListEv();
  toast.success("Created successfully!");
});

deleteDocEv.watch((id: string) => {
  deleteDocFx(id).then(() => {
    getDocsListEv();
    toast.error("Deleted");
  });
});

toggleDocModalEv.watch(() => {
  $docsForm.reset;
});
