'use client'
import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/swiper.min.css";
import SliderImg from "/public/slider/Slider.jpg";
import  Link  from "next/link";
import Image from "next/image";

const Slider = () => {
  useEffect(() => {
    new Swiper(".swiper-container", {
      loop: true,
      slidesPerView: 1,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }, []);

  return (
    <div className="side-space">
      <div className="swiper-container">
        <div className="swiper-wrapper ">
          <div className="swiper-slide">
            <Image src={SliderImg} alt="Slide 1" />
            
              <div className="slide-content absolute top-[8%] right-5 sm:top-[16%] md:top-[28%]">
                <h2 className="font-Butler-Normal text-white text-[18px] leading-[28px] sm:text-3xl lg:text-5xl uppercase lg:leading-[55px] font-normal decoration-[#D9D9D9] underline text-shadow underline-offset-8">
                  For an <br className="for-sm-none"/>
                  extraordinary <br /> bathing <br className="for-sm-none"/> experience
                </h2>
                <div className="mt-2 md:mt-5">
                <Link href="/"  className="rounded-full transition-all bg-[#D9D9D9] py-2 px-3 md:px-5 md:py-3  text-md text-black font-bold  leading-[55px] hover:no-underline hover:text-white hover:bg-[#29549F]" >
                  EXPLORE HERE
                </Link>
                </div>
                
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
