import {useUnit} from "effector-react";
import {
    $institutionList,
    fetchInstitutionInfinityListFx,
    getInstitutionInfinityListEv
} from "@/entities";
import {InstitutionDetailCard, MiniLoader,} from "@/shared";
import InfiniteScroll from "react-infinite-scroll-component";
import {useCallback} from "react";
import Image from "next/image";
import sx from "@/entities/main/ui/institution/style.module.scss";
import {Grid} from "@mui/material";

export const InstitutionCard = async () => {
    const [{
        results,
        next,
        next_offset
    }, isLoading] = useUnit([$institutionList, fetchInstitutionInfinityListFx.pending])

    const handleNext = useCallback(() => {
        getInstitutionInfinityListEv({limit: 10, offset: next_offset})
    }, [next_offset])
    return (
        <div>
            {isLoading && <MiniLoader/>}
            <InfiniteScroll
                dataLength={next_offset}
                style={{overflow: 'visible'}}
                next={handleNext}
                hasMore={!isLoading && !!next}
                loader={<MiniLoader/>}
                scrollableTarget="#institutionCard">
                <Grid className={sx.institution} container>
                    {results && results.map((item) => {
                        return (
                            <InstitutionDetailCard hasImage={true} institution={item}/>
                        )
                    })}
                </Grid>
            </InfiniteScroll>
        </div>
    )
}