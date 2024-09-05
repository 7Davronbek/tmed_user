'use client'
import {useTranslations} from "next-intl";
import {NoData, StrucutreCard} from "@/shared";
import {useEffect} from "react";
import {
    $structureList,
    fetchStructureListFx,
    getStructureListEv,
} from "@/entities";
import {useUnit} from "effector-react";
import AboutLayout from "@/widgets/layout/ui/about";

const StructurePage = () => {
    const t = useTranslations("AboutUs");

    const [{results}, isLoading] = useUnit([
        $structureList,
        fetchStructureListFx.pending,
    ]);

    useEffect(() => {
        getStructureListEv();
    }, []);
    return (
        <AboutLayout title={t("structure")}>
            {!!results &&
                !isLoading &&
                results.map((item) => (
                    <StrucutreCard key={item.id} id={item.id} image={item.image}/>
                ))}

            <NoData show={results?.length === 0 || isLoading} loading={isLoading}/>
        </AboutLayout>
    );
};
export default StructurePage;
