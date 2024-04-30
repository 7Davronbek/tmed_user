'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import banner1 from '@/assets/images/banner1.png'

import 'swiper/css'
import 'swiper/css/pagination'


import { Autoplay, Pagination } from 'swiper/modules'
import Image from 'next/image'

export const HeaderMobile = () => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        className="headerSwiper"
      >
        <SwiperSlide>
          <Image
            src={banner1}
            alt="T MED"
            width={0}
            height={0}
            style={{width: '100%', height: 'auto'}}
            priority
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={banner1}
            alt="T MED"
            width={0}
            height={0}
            style={{width: '100%', height: 'auto'}}
            priority
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={banner1}
            alt="T MED"
            width={0}
            height={0}
            style={{width: '100%', height: 'auto'}}
            priority
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={banner1}
            alt="T MED"
            width={0}
            height={0}
            style={{width: '100%', height: 'auto'}}
            priority
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}