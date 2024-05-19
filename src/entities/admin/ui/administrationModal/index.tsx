    'use client'
    import Tabs from '@mui/material/Tabs';
    import Tab from '@mui/material/Tab';
    import Box from '@mui/material/Box';
    import React, {ChangeEventHandler, FormEvent, useCallback} from "react";
    import {a11yProps, BaseButton, CustomTabPanel, fileToBase64, Icon} from "@/shared";
    import {$administrationModal, AdminEnum, createAdministrationFx, toggleAdministrationModalEv} from "@/entities";
    import {$administrationForm} from '@/entities/admin/model'
    import {useForm} from "effector-forms";
    import Image from "next/image";
    import {useUnit} from "effector-react";
    import sx from './administrationModal.module.scss'
    import ReactQuill from "react-quill";

export const AdministrationModal = () => {
    const [value, setValue] = React.useState(0);
    const {fields, eachValid, submit} = useForm($administrationForm)
    const [loading, isOpen] = useUnit([createAdministrationFx.pending, $administrationModal])

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(async (e) => {
        if (e.target.files && e.target.files?.length > 0) {
            const url = await fileToBase64(e.target.files[0])
            fields.image.onChange({url: String(url), file: e.target.files[0]})
        } else {
            fields.image.onChange({url: null})
        }
    }, [fields.image])

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (eachValid) {
            submit()
        }
    }

    return (
        <div className={`${sx.card} ${isOpen ? sx.active : ''}`}>
            <form className={sx.form} onSubmit={handleSubmit}>
                <Box sx={{width: '100%'}}>
                    <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="O'zbek" {...a11yProps(0)} />
                            <Tab label="Russian" {...a11yProps(1)} />
                            <Tab label="English" {...a11yProps(2)} />
                        </Tabs>
                    </Box>

                    <div className={sx.cardWrap}>
                        <input
                            value={fields.phoneNumber.value}
                            onChange={e => fields.phoneNumber?.onChange(e.target.value)}
                            autoFocus={fields.phoneNumber.errorText().length > 0}
                            className={`input ${fields.phoneNumber.errorText() ? 'error' : ''}`}
                            placeholder={'Phone number'}
                            type={'text'}
                        />
                        <h5 className="errorMessage">{fields.phoneNumber.errorText() &&
                            <span><Icon.ErrorIcon/> {fields.phoneNumber.errorText()}</span>}</h5>

                        <input className={`input ${fields.email.errorText() ? 'error' : ''}`} value={fields.email.value}
                               onChange={e => fields.email?.onChange(e.target.value)}
                               placeholder={'Email'} type="email"/>
                        <h5 className="errorMessage">{fields.email.errorText() &&
                            <span><Icon.ErrorIcon/> {fields.email.errorText()}</span>}</h5>

                        <input className='' accept='image/*, image/png' onChange={onChange} type='file'/>
                        {fields.image.value.url ? (
                            <Image alt={'lorem'} width={160} height={160} src={fields.image.value.url}/>
                        ) : (
                            <div>No Image</div>
                        )}
                        <h5 className="errorMessage">{fields.image.errorText() &&
                            <span><Icon.ErrorIcon/> {fields.image.errorText()}</span>}</h5>
                        <select className={'input'} value={fields.administrationType?.value}
                                onChange={e => fields.administrationType?.onChange(e.target.value as AdminEnum)}>
                            <option value={AdminEnum.ADMINISTRATION}>Administration</option>
                            <option value={AdminEnum.LEADERSHIP}>Leader</option>
                        </select>

                        <CustomTabPanel value={value} index={0}>
                            <input className={`input ${fields.fullName.errorText() ? 'error' : ''}`}
                                   value={fields.fullName.value}
                                   onChange={e => fields.fullName?.onChange(e.target.value)}
                                   placeholder={'Full name uz'} type="text"/>
                            <h5 className="errorMessage">{fields.fullName.errorText() &&
                                <span><Icon.ErrorIcon/> {fields.fullName.errorText()}</span>}</h5>

                            <input className={`input ${fields.role.errorText() ? 'error' : ''}`}
                                   value={fields.role.value}
                                   onChange={e => fields.role?.onChange(e.target.value)}
                                   placeholder={'Role uz'} type="text"/>
                            <h5 className="errorMessage">{fields.role.errorText() &&
                                <span><Icon.ErrorIcon/> {fields.role.errorText()}</span>}</h5>

                            <input className={`input ${fields.receptionDay.errorText() ? 'error' : ''}`}
                                   value={fields.receptionDay.value}
                                   onChange={e => fields.receptionDay?.onChange(e.target.value)}
                                   placeholder={'Reception day uz'} type="text"/>
                            <h5 className="errorMessage">{fields.receptionDay.errorText() &&
                                <span><Icon.ErrorIcon/> {fields.receptionDay.errorText()}</span>}</h5>

                            <ReactQuill placeholder={'Job description uz'} theme="snow"
                                        value={fields.jobDescription.value}
                                        onChange={e => fields.jobDescription.onChange(e)}/>
                            <ReactQuill placeholder={'Permission uz'} theme="snow" value={fields.permission.value}
                                        onChange={e => fields.permission.onChange(e)}/>

                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                            <input value={fields.fullNameRu.value}
                                   onChange={e => fields.fullNameRu?.onChange(e.target.value)}
                                   className={`input ${fields.fullNameRu.errorText() ? 'error' : ''}`}
                                   placeholder={'Full name ru'} type="text"/>
                            <h5 className="errorMessage">{fields.fullNameRu.errorText() &&
                                <span><Icon.ErrorIcon/> {fields.fullNameRu.errorText()}</span>}</h5>

                            <input value={fields.roleRu.value}
                                   onChange={e => fields.roleRu?.onChange(e.target.value)}
                                   className={`input ${fields.roleRu.errorText() ? 'error' : ''}`}
                                   placeholder={'Role ru'} type="text"/>
                            <h5 className="errorMessage">{fields.roleRu.errorText() &&
                                <span><Icon.ErrorIcon/> {fields.roleRu.errorText()}</span>}</h5>

                            <input value={fields.receptionDayRu.value}
                                   onChange={e => fields.receptionDayRu?.onChange(e.target.value)}
                                   className={`input ${fields.receptionDayRu.errorText() ? 'error' : ''}`}
                                   placeholder={'Reception day ru'} type="text"/>
                            <h5 className="errorMessage">{fields.receptionDayRu.errorText() &&
                                <span><Icon.ErrorIcon/> {fields.receptionDayRu.errorText()}</span>}</h5>

                            <ReactQuill placeholder={'Job description ru'} theme="snow"
                                        value={fields.jobDescriptionRu.value}
                                        onChange={e => fields.jobDescriptionRu.onChange(e)}/>
                            <ReactQuill placeholder={'Permission ru'} theme="snow" value={fields.permissionRu.value}
                                        onChange={e => fields.permissionRu.onChange(e)}/>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={2}>
                            <input value={fields.fullNameEn.value}
                                   onChange={e => fields.fullNameEn?.onChange(e.target.value)}
                                   className={`input ${fields.fullNameEn.errorText() ? 'error' : ''}`}
                                   placeholder={'Full name en'} type="text"/>
                            <h5 className="errorMessage">{fields.fullNameEn.errorText() &&
                                <span><Icon.ErrorIcon/> {fields.fullNameEn.errorText()}</span>}</h5>

                            <input value={fields.roleEn.value}
                                   onChange={e => fields.roleEn?.onChange(e.target.value)}
                                   className={`input ${fields.roleEn.errorText() ? 'error' : ''}`}
                                   placeholder={'Role en'} type="text"/>
                            <h5 className="errorMessage">{fields.roleEn.errorText() &&
                                <span><Icon.ErrorIcon/> {fields.roleEn.errorText()}</span>}</h5>

                            <input value={fields.receptionDayEn.value}
                                   onChange={e => fields.receptionDayEn?.onChange(e.target.value)}
                                   className={`input ${fields.receptionDayEn.errorText() ? 'error' : ''}`}
                                   placeholder={'Reception day en'} type="text"/>
                            <h5 className="errorMessage">{fields.receptionDayEn.errorText() &&
                                <span><Icon.ErrorIcon/> {fields.receptionDayEn.errorText()}</span>}</h5>

                            <ReactQuill placeholder={'Job description en'} theme="snow"
                                        value={fields.jobDescriptionEn.value}
                                        onChange={e => fields.jobDescriptionEn.onChange(e)}/>
                            <ReactQuill placeholder={'Permission en'} theme="snow" value={fields.permissionEn.value}
                                        onChange={e => fields.permissionEn.onChange(e)}/>
                        </CustomTabPanel>
                        <button className={'button'} disabled={!eachValid && !loading} type={'submit'}><BaseButton
                            active={true} text={'Save'}/>
                        </button>

                    </div>
                </Box>
            </form>
            <div onClick={() => toggleAdministrationModalEv()} className={sx.close}></div>
        </div>
    )
}