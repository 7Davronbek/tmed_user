'use client'
import sx from '../style/main.module.scss'
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {Pagination, Navigation} from 'swiper/modules';
import image from '@/assets/images/banner1.png'
import avatar from '@/assets/images/avatar.png'
import Image from "next/image";
import {Icon} from "@/shared";

export const NewsCard = () => {
    return (
        <>
            <div className={sx.card}>
                <div className={sx.top}>
                    <div className={sx.topImage}>
                        <Image src={avatar} alt={'Avatar'}/>
                    </div>
                    <div>
                        <h1>Shox Med Center</h1>
                        <h2>Toshkent</h2>
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

                        <SwiperSlide><Image src={image} alt={'TMED'}/> </SwiperSlide>
                        <SwiperSlide><Image src={image} alt={'TMED'}/> </SwiperSlide>
                        <SwiperSlide><Image src={image} alt={'TMED'}/> </SwiperSlide>
                    </Swiper>
                </div>
                <div className={sx.bottom}>
                    <div className={sx.wrap}>
                        <Icon.Like/>
                        <Icon.Comment/>
                    </div>
                    <h3>100 Likes</h3>
                    <h4><span>Axatov Saidaxror</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt</h4>
                    <h5>Barcha 16 ta izohni ko'ring</h5>
                    <h6>30 daqiqa oldin</h6>
                </div>
            </div>

            <div className={sx.card}>
                <div className={sx.top}>
                    <div className={sx.topImage}>
                        <Image src={avatar} alt={'Avatar'}/>
                    </div>
                    <div>
                        <h1>Shox Med Center</h1>
                        <h2>Toshkent</h2>
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

                        <SwiperSlide><Image src={image} alt={'TMED'}/> </SwiperSlide>
                        <SwiperSlide><Image src={image} alt={'TMED'}/> </SwiperSlide>
                        <SwiperSlide><Image src={image} alt={'TMED'}/> </SwiperSlide>
                    </Swiper>
                </div>
                <div className={sx.bottom}>
                    <div className={sx.wrap}>
                        <Icon.Like/>
                        <Icon.Comment/>
                    </div>
                    <h3>100 Likes</h3>
                    <h4><span>Axatov Saidaxror</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt</h4>
                    <h5>Barcha 16 ta izohni ko'ring</h5>
                    <h6>30 daqiqa oldin</h6>
                </div>
            </div>
        </>
    )
}