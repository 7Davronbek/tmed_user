import { createForm } from "effector-forms";
import { StructureType } from "../types";
import { createEffect, createEvent, createStore, sample } from "effector";
import { structureApi } from "../api";
import { $lang } from "./admin.model";
import { toast } from "react-toastify";

export const $structureForm = createForm<StructureType>({
  fields: {
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
export const createStructureFx = createEffect({
  handler: structureApi.createStructure,
});
export const fetchStructureListFx = createEffect({
  handler: structureApi.fetchStructures,
});
export const deleteStructureFx = createEffect({
  handler: structureApi.deleteStructure,
});

// EVENT
export const getStructureListEv = createEvent();
export const toggleStructureModalEv = createEvent();
export const deleteStructureEv = createEvent<string>("");

// STORE
export const $structureModal = createStore<boolean>(false);
export const $structureList = createStore<StructureType[] | []>([]);

// STORE MODIFYING
$structureList.on(fetchStructureListFx.doneData, (_, { data }) => data);
$structureModal.on(toggleStructureModalEv, (state) => !state);

// SAMPLE
sample({
  clock: getStructureListEv,
  source: $lang,
  filter: (src) => !!src,
  fn: (src) => ({ lang: src! }),
  target: fetchStructureListFx,
});

sample({
  // @ts-ignore
  clock: toggleStructureModalEv,
  target: $structureForm.reset,
});

sample({
  clock: $structureForm.formValidated,
  fn: (form) => {
    const formData = new FormData();
    if (form.file) formData.append("file", form.file?.file!);
    return formData;
  },
  target: createStructureFx,
});

// WATCH
createStructureFx.doneData.watch(() => {
  toggleStructureModalEv();
  $structureForm.reset;
  getStructureListEv();
  toast.success("Created successfully!");
});

deleteStructureEv.watch((id: string) => {
  deleteStructureFx(id).then(() => {
    getStructureListEv();
    toast.error("Deleted");
  });
});

toggleStructureModalEv.watch(() => {
  $structureForm.reset;
});
