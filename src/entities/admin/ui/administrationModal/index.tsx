'use client'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import React, {ChangeEventHandler, FormEvent, useCallback} from "react";
import {a11yProps, BaseButton, CustomTabPanel, fileToBase64, Icon, Input} from "@/shared";
import {AdminEnum, createAdministrationFx} from "@/entities";
import {$administrationForm} from '@/entities/admin/model'
import {useForm} from "effector-forms";
import Image from "next/image";
import {useUnit} from "effector-react";
import sx from './administrationModal.module.scss'

export const AdministrationModal = () => {
    const [value, setValue] = React.useState(0);
    const {fields, eachValid, submit} = useForm($administrationForm)
    const [loading] = useUnit([createAdministrationFx.pending])
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
    }, [])

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (eachValid) {
            submit()
        }
    }

    return (
        <div className={sx.card}>
            <form className={sx.form} onSubmit={handleSubmit}>
                <Box sx={{width: '100%'}}>
                    <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label="O'zbek" {...a11yProps(0)} />
                            <Tab label="Russian" {...a11yProps(1)} />
                            <Tab label="English" {...a11yProps(2)} />
                        </Tabs>
                    </Box>
                    {/*<Input value={fields.phoneNumber?.value} onChange={e => fields.phoneNumber?.onChange(e.target.value)} placeholder={'Phone number'}  />*/}

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

                        <input className='input' value={fields.email.value}
                               onChange={e => fields.email?.onChange(e.target.value)}
                               placeholder={'Email'} type="email"/>
                        <h5 className="errorMessage">{fields.email.errorText() &&
                            <span><Icon.ErrorIcon/> {fields.email.errorText()}</span>}</h5>

                        <input className='input' accept='image/*, image/png' onChange={onChange} type='file'/>
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
                            <input className='input' value={fields.fullName.value}
                                   onChange={e => fields.fullName?.onChange(e.target.value)}
                                   placeholder={'Full name uz'} type="text"/>
                            <h5 className="errorMessage">{fields.fullName.errorText() &&
                                <span><Icon.ErrorIcon/> {fields.fullName.errorText()}</span>}</h5>

                            <h5 className='errorMessage'>{fields.fullName.errorText()}</h5>
                            <input className='input' value={fields.role.value}
                                   onChange={e => fields.role?.onChange(e.target.value)}
                                   placeholder={'Role uz'} type="text"/>
                            <h5 className="errorMessage">{fields.role.errorText() &&
                                <span><Icon.ErrorIcon/> {fields.role.errorText()}</span>}</h5>

                            <input className='input' value={fields.receptionDay.value}
                                   onChange={e => fields.receptionDay?.onChange(e.target.value)}
                                   placeholder={'Reception day uz'} type="text"/>
                            <h5 className="errorMessage">{fields.receptionDay.errorText() &&
                                <span><Icon.ErrorIcon/> {fields.role.errorText()}</span>}</h5>

                            <input className='input' value={fields.jobDescription.value}
                                   onChange={e => fields.jobDescription?.onChange(e.target.value)}
                                   placeholder={'Job description uz'} type="text"/>
                            <input className='input' value={fields.permission.value}
                                   onChange={e => fields.permission?.onChange(e.target.value)}
                                   placeholder={'Permission uz'} type="text"/>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                            <input value={fields.fullNameRu.value}
                                   onChange={e => fields.fullNameRu?.onChange(e.target.value)}
                                   className='input' placeholder={'Full name ru'} type="text"/>
                            <h5 className='errorMessage'>{fields.fullNameRu.errorText()}</h5>
                            <input value={fields.roleRu.value}
                                   onChange={e => fields.roleRu?.onChange(e.target.value)}
                                   className='input' placeholder={'Role ru'} type="text"/>
                            <h5 className='errorMessage'>{fields.roleRu.errorText()}</h5>
                            <input value={fields.receptionDayRu.value}
                                   onChange={e => fields.receptionDayRu?.onChange(e.target.value)}
                                   className='input' placeholder={'Reception day ru'} type="text"/>
                            <h5 className='errorMessage'>{fields.receptionDayRu.errorText()}</h5>
                            <input value={fields.jobDescriptionRu.value}
                                   onChange={e => fields.jobDescriptionRu?.onChange(e.target.value)}
                                   className='input' placeholder={'Job description ru'} type="text"/>
                            <input value={fields.permissionRu.value}
                                   onChange={e => fields.permissionRu?.onChange(e.target.value)}
                                   className='input' placeholder={'Permission ru'} type="text"/>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={2}>
                            <input value={fields.fullNameEn.value}
                                   onChange={e => fields.fullNameEn?.onChange(e.target.value)}
                                   className='input' placeholder={'Full name en'} type="text"/>
                            <h5 className='errorMessage'>{fields.fullNameEn.errorText()}</h5>
                            <input value={fields.roleEn.value}
                                   onChange={e => fields.roleEn?.onChange(e.target.value)}
                                   className='input' placeholder={'Role en'} type="text"/>
                            <h5 className='errorMessage'>{fields.roleEn.errorText()}</h5>
                            <input value={fields.receptionDayEn.value}
                                   onChange={e => fields.receptionDayEn?.onChange(e.target.value)}
                                   className='input' placeholder={'Reception day en'} type="text"/>
                            <h5 className='errorMessage'>{fields.receptionDayEn.errorText()}</h5>
                            <input value={fields.jobDescriptionEn.value}
                                   onChange={e => fields.jobDescriptionEn?.onChange(e.target.value)}
                                   className='input' placeholder={'Job description en'} type="text"/>
                            <input value={fields.permissionEn.value}
                                   onChange={e => fields.permissionEn?.onChange(e.target.value)}
                                   className='input' placeholder={'Permission en'} type="text"/>
                        </CustomTabPanel>
                        <button className={'button'} disabled={!eachValid && !loading} type={'submit'}><BaseButton
                            active={true} text={'Save'}/>
                        </button>

                    </div>
                </Box>
            </form>
            <div className={sx.close}></div>
        </div>
    )
}