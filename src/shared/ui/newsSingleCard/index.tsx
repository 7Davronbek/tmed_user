'use client'
import {Pagination, Navigation} from "swiper/modules";
import avatar from "@/assets/images/avatar.png";
import img from "@/assets/images/banner4.png";
import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";
import sx from "./newsSingleCard.module.scss";
import {NewsType, getCommentIdEv} from "@/entities";
import {Icon, TimeFormatter} from "@/shared";
import {FC} from "react";

type NewsProps = {
    item: NewsType;
    locale: string;
}

export const NewsSingleCard: FC<NewsProps> = ({item, locale}) => {
    const formattedDate = TimeFormatter.timeFormatterFn(
        String(item.date),
        locale
    );

    return <div className={sx.card}>
        <div className={sx.top}>
            <div className={sx.topImage}>
                {item.author_avatar ? (
                    <Image
                        width={0}
                        height={0}
                        src={
                            item.author_avatar
                        }
                        alt={"T-MED Client Avatar"}
                    />
                ) : (
                    <Image width={0} height={0} src={avatar} alt={"T-MED Client Avatar"}/>
                )}
            </div>
            <div>
                <h1>{item.author_fullname}</h1>
                <h2>{item.author_org}</h2>
            </div>
        </div>
        <div className={sx.middle}>
            <Swiper
                pagination={{
                    type: "bullets",
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="newsSwiper"
            >
                {item.medias &&
                    item.medias.map((media) => (
                        <SwiperSlide key={media.id}>
                            <Image width={110} height={110} src={media.image} alt={"T-MED Client Lenta"}/>{" "}
                        </SwiperSlide>
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
            <h4>
            <span>{item.author_fullname}</span> {item.text.length > 40 ? item.text.substring(0, 40) + '...' : item.text}
             </h4>
            {item.comment_count !== 0 && (
                <h5 onClick={() => getCommentIdEv(item)}>
                    Barcha {item.comment_count}ta izohni ko`ring
                </h5>
            )}
            <h6>{formattedDate}</h6>
        </div>
    </div>;
};

