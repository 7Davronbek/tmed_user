'use client'
import {Grid} from '@mui/material'
import {BaseButton, ClinicServiceCardDetail, Icon, MiniLoader} from '@/shared'
import sx from './style.module.scss'
import {useEffect} from "react";
import {$serviceList, fetchServiceInfinityFx, getServiceInfinityListEv} from "@/entities/clinic-services";
import {useUnit} from "effector-react";

export const ServiceList = () => {
    useEffect(() => {
        getServiceInfinityListEv({limit: 12})
    }, []);

    const [{results}, isLoading] = useUnit([$serviceList, fetchServiceInfinityFx.pending])
    return (
        <div>
            {isLoading && <MiniLoader/>}
            <Grid className={sx.serviceList} container spacing={2}>
                {results && results.map(item => (
                    <ClinicServiceCardDetail key={item.id} service={item}/>
                ))}
            </Grid>

            <Grid className={sx.serviceList} container >
                <Grid className={sx.gridWrap} item xs={3.85}>
                    <div className={sx.card}>
                        <div className={sx.top}>
                            <h5>Alergolog</h5>
                            <Icon.Cart/>
                        </div>

                        <div className={sx.bottom}>
                            <h4>275 000 UZS <span>120 000 UZS</span> <span className={sx.badge}>12%</span></h4>
                            <div className={sx.wrap}>
                                <h3>Soni:</h3>
                                <h3>34 xizmat</h3>
                            </div>
                            <div className={sx.wrap}>
                                <h3>Davomiyligi:</h3>
                                <h3>20 daqiqa</h3>
                            </div>
                            <div className={sx.wrap}>
                                <h3>Xizmat turi:</h3>
                                <h3>Xizmat</h3>
                            </div>
                            <div className={sx.wrap}>
                                <h3>Tashkilot:</h3>
                                <h3>Markaziy klinik shifoxonasi</h3>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid className={sx.gridWrap} item xs={3.85}>
                    <div className={sx.card}>
                        <div className={sx.top}>
                            <h5>Alergolog</h5>
                            <Icon.Cart/>
                        </div>

                        <div className={sx.bottom}>
                            <h4>275 000 UZS <span>120 000 UZS</span> <span className={sx.badge}>12%</span></h4>
                            <div className={sx.wrap}>
                                <h3>Soni:</h3>
                                <h3>34 xizmat</h3>
                            </div>
                            <div className={sx.wrap}>
                                <h3>Davomiyligi:</h3>
                                <h3>20 daqiqa</h3>
                            </div>
                            <div className={sx.wrap}>
                                <h3>Xizmat turi:</h3>
                                <h3>Xizmat</h3>
                            </div>
                            <div className={sx.wrap}>
                                <h3>Tashkilot:</h3>
                                <h3>Markaziy klinik shifoxonasi</h3>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid className={sx.gridWrap} item xs={3.85}>
                    <div className={sx.card}>
                        <div className={sx.top}>
                            <h5>Alergolog</h5>
                            <Icon.Cart/>
                        </div>

                        <div className={sx.bottom}>
                            <h4>275 000 UZS <span>120 000 UZS</span> <span className={sx.badge}>12%</span></h4>
                            <div className={sx.wrap}>
                                <h3>Soni:</h3>
                                <h3>34 xizmat</h3>
                            </div>
                            <div className={sx.wrap}>
                                <h3>Davomiyligi:</h3>
                                <h3>20 daqiqa</h3>
                            </div>
                            <div className={sx.wrap}>
                                <h3>Xizmat turi:</h3>
                                <h3>Xizmat</h3>
                            </div>
                            <div className={sx.wrap}>
                                <h3>Tashkilot:</h3>
                                <h3>Markaziy klinik shifoxonasi</h3>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}