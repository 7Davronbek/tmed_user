'use client'
import {ManagersCard, NoData} from '@/shared'
import raxbar from '@/assets/images/raxbar.jpg'
import raxbar2 from '@/assets/images/raxbar2.jpg'
import {Grid} from '@mui/material'
import {useTranslations} from 'next-intl'
import {useUnit} from 'effector-react'
import {
    $administrationDetail,
    $administrationList,
    AdminEnum,
    AdminTypes,
    fetchInfinityAdministrationFx,
    getInfiniteAdministrationEv
} from '@/entities'
import {useEffect, useState} from 'react'
import AboutLayout from "@/widgets/layout/ui/about";

const ManagementPage = () => {
    const t = useTranslations('Main')

    const [results, isLoading] = useUnit([
        $administrationList,
        fetchInfinityAdministrationFx.pending,
        $administrationDetail,
    ]);
    const [data, setData] = useState<AdminTypes[]>([]);

    const [activeBtn, setActiveBtn] = useState<AdminEnum>(
        AdminEnum.LEADERSHIP
    );

    useEffect(() => {
        getInfiniteAdministrationEv();
    }, []);

    useEffect(() => {
        const newData = results.filter(
            (item) => item.administrationType === activeBtn
        );
        setData(newData);
    }, [results, activeBtn]);
    return (
        <AboutLayout title={t('management')}>
            <Grid style={{flexDirection: 'column'}} gap={3} container>
                {data.length > 0 &&
                    !isLoading &&
                    data.map((item) => (
                        <ManagersCard
                            key={item.id}
                            image={String(item.image)}
                            name={item.fullName}
                            phoneNumber={item.phoneNumber}
                            email={item.email}
                            admissionDay={item.receptionDay}
                            staj={item.jobDescription}
                            permission={item.permission}
                            jobTitle={item.role}
                        />
                    ))}
            </Grid>

            <NoData show={data.length === 0 || isLoading} loading={isLoading}/>
        </AboutLayout>
    )
}
export default ManagementPage