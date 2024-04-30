'use client'
import sx from '../style/main.module.scss'
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {Pagination, Navigation} from 'swiper/modules';
import avatar from '@/assets/images/avatar.png'
import img from '@/assets/images/banner4.png'
import Image from "next/image";
import {Icon, MiniLoader, TimeFormatter} from "@/shared";
import {$newsList, fetchInfiniteNewsFx, getCommentIdEv, getInfiniteNewsEv} from "@/entities";
import {useLocale} from "next-intl";
import {useUnit} from "effector-react";
import InfiniteScroll from "react-infinite-scroll-component";

export const NewsCard = () => {
    const [{results, next, next_offset}, isLoading] = useUnit([$newsList, fetchInfiniteNewsFx.pending])
    const locale = useLocale()
    return (
        <div>
            {isLoading && <MiniLoader/>}
            <InfiniteScroll
                dataLength={next_offset}
                style={{overflow: 'visible'}}
                next={() => getInfiniteNewsEv({limit: 20, offset: next_offset})}
                hasMore={!isLoading && !!next}
                loader={<MiniLoader/>}
                scrollableTarget="processStatusAll">

                {results && results.map((item) => {
                    const formattedDate = TimeFormatter.timeFormatterFn(String(item.date), locale)
                    return (
                        <div key={item.id} className={sx.card}>
                            <div className={sx.top}>
                                <div className={sx.topImage}>
                                    {item.author_avatar ?
                                        <Image width={0} height={0}
                                               src={'https://dwed.fra1.digitaloceanspaces.com/UMS/media/Avatar/image/73fe801a-435f-44cb-b619-2f5b15ab1b5f'}
                                               alt={'Avatar'}/>
                                        :
                                        <Image width={0} height={0} src={avatar} alt={'Avatar'}/>}

                                </div>
                                <div>
                                    <h1>{item.author_fullname}</h1>
                                    <h2>{item.author_org}</h2>
                                </div>
                            </div>
                            <div className={sx.middle}>
                                <Swiper
                                    pagination={{
                                        type: 'bullets',
                                        clickable: true,
                                    }}
                                    navigation={true}
                                    modules={[Pagination, Navigation]}
                                    className="newsSwiper"
                                >

                                    {item.medias && item.medias.map((media) => (
                                        <SwiperSlide key={media.id}><Image width={110} height={110}
                                                                           src={img}
                                                                           alt={'Media'}/> </SwiperSlide>
                                    ))}

                                </Swiper>
                            </div>
                            <div className={sx.bottom}>
                                <div className={sx.wrap}>
                                    <Icon.Like/>
                                    <div onClick={() => getCommentIdEv(item)}>
                                        <Icon.Comment/>
                                    </div>
                                </div>
                                <h3>{item.likes_count} Likes</h3>
                                {/*<h4><span>{item.author_fullname}</span> {item.text.length > 40 ? item.text.substring(0, 40) + '...' : item.text}</h4>*/}
                                <h4><span>{item.author_fullname}</span> {item.text}</h4>
                                {item.comment_count !== 0 &&
                                    <h5 onClick={() => getCommentIdEv(item)}>Barcha {item.comment_count}ta
                                        izohni
                                        ko`ring</h5>
                                }

                                <h6>{formattedDate}</h6>

                            </div>
                        </div>
                    )
                })}
            </InfiniteScroll>
        </div>
    )
}