import {useUnit} from "effector-react";
import {$serviceList, fetchServiceInfinityFx, getServiceInfinityListEv} from "@/entities/clinic-services";
import {ClinicServiceCardDetail, MiniLoader} from "@/shared";
import InfiniteScroll from "react-infinite-scroll-component";
import sx from './clinic-service-card.module.scss'

export const ClinicServiceCard = () => {
    const [{results, next, next_offset}, isLoading] = useUnit([$serviceList, fetchServiceInfinityFx.pending])
    return (
        <div>
            {
                isLoading
                    ?
                    <MiniLoader/>
                    :
                        <InfiniteScroll
                            dataLength={next_offset}
                            style={{overflow: 'visible'}}
                            next={() => getServiceInfinityListEv({limit: 12, offset: next_offset})}
                            hasMore={!isLoading && !!next}
                            loader={<MiniLoader/>}
                            scrollableTarget="processStatusAll">

                            <div className={sx.wrap}>
                                {results && results.map((item) => {
                                    return (
                                        <ClinicServiceCardDetail key={item.id} service={item}/>
                                    )
                                })}
                            </div>
                        </InfiniteScroll>
            }
        </div>
    )
}