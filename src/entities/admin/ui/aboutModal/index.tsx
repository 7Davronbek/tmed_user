import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import React, { FormEvent } from "react";
import { a11yProps, BaseButton, CustomTabPanel, Icon } from "@/shared";
import {
  $aboutForm,
  $lang,
  fetchAboutListFx,
  toggleAboutModalEv,
} from "@/entities";
import { $aboutModal } from "@/entities";
import { useForm } from "effector-forms";
import { useUnit } from "effector-react";
import sx from "./about.module.scss";
import ReactQuill from "react-quill";

export const AboutModal = () => {
  const [value, setValue] = React.useState(0);
  const { fields, eachValid, submit } = useForm($aboutForm);
  const [isOpen, isLoading] = useUnit([$aboutModal, fetchAboutListFx.pending]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (eachValid) {
      submit();
    }
  };
  return (
    <div className={`${sx.card} ${isOpen ? sx.active : ""}`}>
      <form className={sx.form} onSubmit={handleSubmit}>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="O'zbek" {...a11yProps(0)} />
              <Tab label="Russian" {...a11yProps(1)} />
              <Tab label="English" {...a11yProps(2)} />
            </Tabs>
          </Box>

          <div className={sx.cardWrap}>
            <CustomTabPanel value={value} index={0}>
              <ReactQuill
                placeholder={"Job description uz"}
                theme="snow"
                value={fields.description.value}
                onChange={(e) => fields.description.onChange(e)}
              />
              <h5 className="errorMessage">
                {fields.description.errorText() && (
                  <span>
                    <Icon.ErrorIcon /> {fields.description.errorText()}
                  </span>
                )}
              </h5>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <ReactQuill
                placeholder={"Job description uz"}
                theme="snow"
                value={fields.descriptionRu.value}
                onChange={(e) => fields.descriptionRu.onChange(e)}
              />
              <h5 className="errorMessage">
                {fields.descriptionRu.errorText() && (
                  <span>
                    <Icon.ErrorIcon /> {fields.descriptionRu.errorText()}
                  </span>
                )}
              </h5>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <ReactQuill
                placeholder={"Job description uz"}
                theme="snow"
                value={fields.descriptionEn.value}
                onChange={(e) => fields.descriptionEn.onChange(e)}
              />
              <h5 className="errorMessage">
                {fields.descriptionEn.errorText() && (
                  <span>
                    <Icon.ErrorIcon /> {fields.descriptionEn.errorText()}
                  </span>
                )}
              </h5>
            </CustomTabPanel>
            <button
              className={"button"}
              disabled={!eachValid && !isLoading}
              type={"submit"}
            >
              <BaseButton active={true} text={"Save"} />
            </button>
          </div>
        </Box>
      </form>
      <div onClick={() => toggleAboutModalEv()} className={sx.close}></div>
    </div>
  );
};
