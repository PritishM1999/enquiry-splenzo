'use client'
import { useState } from 'react'
import './slider.css';
import "swiper/swiper.min.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import  { Navigation, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';


import prodImg from "/public/product/prod-1.jpg";


export default function ProductSlider() 
    {
    const [activeThumb, handleSwiper] = useState()

    return <>
    <div className="flex" style={{ gap: "10px" }}>
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation, Thumbs]}
          grabCursor={true}
          thumbs={{ swiper: activeThumb }}
          className='product-images-slider mySwiper2'
        >
          <SwiperSlide>
            <Image src={prodImg} alt='product images' />
          </SwiperSlide>

          <SwiperSlide>
            <Image src={prodImg} alt='product images' />
          </SwiperSlide>

         
        </Swiper>

        <Swiper
          onClick={handleSwiper}
          direction="vertical"
          loop={false}
          dots={true}
          spaceBetween={10}
          slidesPerView={3}
          className='product-images-slider-thumbs mySwiper'
        >
          <SwiperSlide>
            <div className='product-images-slider-thumbs-wrapper'>
              <Image src={prodImg} alt='product images' />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='product-images-slider-thumbs-wrapper'>
              <Image src={prodImg} alt='product images' />
            </div>
          </SwiperSlide>

         
        </Swiper>
        </div>
    </>
}


