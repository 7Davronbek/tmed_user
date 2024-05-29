import sx from '../style/main.module.scss'
import {$commentModal, $commentsList, $news, fetchInfiniteCommentsFx, modalToggleEv} from "@/entities";
import {useUnit} from "effector-react/effector-react.mjs";
import {Icon, MiniLoader, TimeFormatter} from "@/shared";
import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
import {useLocale} from "next-intl";

export default async function CommentModal() {
    const [{results}, isOpen, isLoading, data] = useUnit([$commentsList, $commentModal, fetchInfiniteCommentsFx.pending, $news])
    const locale = useLocale()
    return (
        <div className={sx.modalWrap + ` ${isOpen ? sx.active : ''}`}>
            <div className={sx.modalCard}>
                <div className={sx.left}>
                    <Swiper
                        pagination={{
                            type: 'bullets',
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className={sx.newsSwiper + ' newsSwiper'}
                    >
                        {data?.medias && data.medias.map((media) => (
                            <SwiperSlide key={media.id}>
                                <Image
                                    src={media.image}
                                    width={0}
                                    height={0}
                                    alt={'Media'}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className={sx.right}>
                    <div className={sx.rightTop}>
                        {data?.author_avatar ?
                            <Image width={36} height={36} className={sx.avatar} src={data?.author_avatar}
                                   alt={'Avatar'}/>
                            : <div
                                className={sx.avatar}>{data?.author_fullname ? data?.author_fullname?.substring(0, 1).toUpperCase() : 'C'}</div>
                        }
                        <p>{data?.author_fullname ? data?.author_fullname : 'Comments'}</p>
                    </div>
                    <div className={sx.rightBottom}>
                        {!!results && results.map((item) => (
                            <div className={sx.rightBottomWrap} key={item.id}>
                                <div>
                                    <h6>{item.user}</h6>
                                    <h5>{item.reply_to ? '@' + item.reply_to : ''}{item.text}</h5>
                                </div>
                                <span>{TimeFormatter.timeFormatterFn(String(item.date), locale)?.substring(11)}</span>
                            </div>
                        ))}
                        {results.length === 0 && 'No comment yet'}
                        {isLoading && <MiniLoader/>}
                    </div>
                    <div className={sx.bottom}>
                        <div className={sx.wrap}>
                            <Icon.Like isWhite={false}/>
                        </div>
                        <h4>{data?.likes_count} Likes</h4>
                        <h6>{TimeFormatter.timeFormatterFn(String(data?.date), locale)}</h6>
                    </div>
                </div>
            </div>
            <div onClick={() => modalToggleEv()} className={sx.close}></div>
        </div>
    )
}