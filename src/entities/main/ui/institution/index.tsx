'use client'
import {Grid} from '@mui/material'
import {InstitutionDetailCard, MiniLoader} from '@/shared'
import sx from './style.module.scss'
import {$institutionList, fetchInstitutionInfinityListFx, getInstitutionInfinityListEv} from "@/entities";
import {useUnit} from "effector-react";
import {useEffect} from "react";

export const Institution = () => {
    useEffect(() => {
        getInstitutionInfinityListEv({limit: 6, offset: 0})
    }, []);
    const [{results}, isLoading] = useUnit([$institutionList, fetchInstitutionInfinityListFx.pending])
    return (
        <div>
            <Grid className={sx.wrap} container spacing={3}>
                <Grid item xs={5}>
                </Grid>
            </Grid>
            {
                isLoading ? <MiniLoader/>
                    :
                    <Grid className={sx.institution} container>
                        {results && results.map(item => (
                            <InstitutionDetailCard key={item.id} institution={item}/>
                        ))}
                    </Grid>
            }
        </div>
    )
}

