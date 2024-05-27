"use client";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import React, {ChangeEventHandler, FormEvent, useCallback} from "react";
import {
    a11yProps,
    BaseButton,
    CustomTabPanel,
    fileToBase64,
    Icon,
} from "@/shared";
import {$docModal, LawType, toggleDocModalEv} from "@/entities";
import {$docsForm, createDocFx} from "@/entities";
import {useForm} from "effector-forms";
import Image from "next/image";
import {useUnit} from "effector-react";
import sx from "./docModal.module.scss";

export const DocModal = () => {
    const [value, setValue] = React.useState(0);
    const {fields, eachValid, submit} = useForm($docsForm);
    const [loading, isOpen] = useUnit([createDocFx.pending, $docModal]);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(
        async (e) => {
            if (e.target.files && e.target.files?.length > 0) {
                const url = await fileToBase64(e.target.files[0]);
                // @ts-ignore
                fields.file.onChange({url: String(url), file: e.target.files[0]});
            } else {
                // @ts-ignore
                fields.file.onChange({url: null});
            }
        },
        [fields.file]
    );

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (eachValid) {
            submit();
        }
    };

    return (
        <div className={`${sx.card} ${isOpen ? sx.active : ""}`}>
            <form className={sx.form} onSubmit={handleSubmit}>
                <Box sx={{width: "100%"}}>
                    <Box sx={{borderBottom: 1, borderColor: "divider"}}>
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
                        <input
                            value={fields.link.value}
                            onChange={(e) => fields.link?.onChange(e.target.value)}
                            autoFocus={!!fields.link.errorText()}
                            className={`input ${fields.link.errorText() ? "error" : ""}`}
                            placeholder={"Link"}
                            type={"text"}
                        />
                        <h5 className="errorMessage">
                            {fields.link.errorText() && (
                                <span>
                  <Icon.ErrorIcon/> {fields.link.errorText()}
                </span>
                            )}
                        </h5>
                        <input
                            className=""
                            accept=".pdf, .word"
                            onChange={onChange}
                            type="file"
                        />
                        <h5 className="errorMessage">
                            {/*@ts-ignore*/}
                            {fields.file.errorText() && (
                                <span>
                                     {/*@ts-ignore*/}
                                    <Icon.ErrorIcon/> {fields.file.errorText()}
                </span>
                            )}
                        </h5>
                        <select
                            className={"input"}
                            value={fields.lawType?.value}
                            onChange={(e) =>
                                fields.lawType?.onChange(e.target.value as LawType)
                            }
                        >
                            <option value={LawType.LAW}>Law</option>
                            <option value={LawType.CABINET}>Cabinet</option>
                            <option value={LawType.PRESIDENTIAL}>Presidential</option>
                            <option value={LawType.RAILWAY}>Railway</option>
                            <option value={LawType.SSV}>SSV</option>
                        </select>

                        <CustomTabPanel value={value} index={0}>
                            <input
                                value={fields.name.value}
                                onChange={(e) => fields.name?.onChange(e.target.value)}
                                autoFocus={!!fields.name.errorText()}
                                className={`input ${fields.name.errorText() ? "error" : ""}`}
                                placeholder={"Name Uz"}
                                type={"text"}
                            />
                            <h5 className="errorMessage">
                                {fields.name.errorText() && (
                                    <span>
                    <Icon.ErrorIcon/> {fields.name.errorText()}
                  </span>
                                )}
                            </h5>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                            <input
                                value={fields.nameRu.value}
                                onChange={(e) => fields.nameRu?.onChange(e.target.value)}
                                autoFocus={!!fields.nameRu.errorText()}
                                className={`input ${fields.nameRu.errorText() ? "error" : ""}`}
                                placeholder={"Name Ru"}
                                type={"text"}
                            />
                            <h5 className="errorMessage">
                                {fields.nameRu.errorText() && (
                                    <span>
                    <Icon.ErrorIcon/> {fields.nameRu.errorText()}
                  </span>
                                )}
                            </h5>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={2}>
                            <input
                                value={fields.nameEn.value}
                                onChange={(e) => fields.nameEn?.onChange(e.target.value)}
                                autoFocus={!!fields.nameEn.errorText()}
                                className={`input ${fields.nameEn.errorText() ? "error" : ""}`}
                                placeholder={"Name En"}
                                type={"text"}
                            />
                            <h5 className="errorMessage">
                                {fields.nameEn.errorText() && (
                                    <span>
                    <Icon.ErrorIcon/> {fields.nameEn.errorText()}
                  </span>
                                )}
                            </h5>
                        </CustomTabPanel>
                        <button
                            className={"button"}
                            disabled={!eachValid && !loading}
                            type={"submit"}
                        >
                            <BaseButton active={true} text={"Save"}/>
                        </button>
                    </div>
                </Box>
            </form>
            <div
                onClick={() => toggleDocModalEv()}
                className={sx.close}
            ></div>
        </div>
    );
};
