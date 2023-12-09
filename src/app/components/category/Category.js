'use client'
import React from "react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import CategoryCard from "./CategoryCard"

// category images
import FaucetImg from "/public/category/cate-1.jpg";
import ShowerImg from "/public/category/cate-2.jpg";
import AccessoriesImg from "/public/category/cate-3.jpg";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const categoryData = [
  {
    title: 'FAUCET',
    description: 'Splenzo, a faucet manufacturer in India, offers an exclusive range of single lever, quarter-turn, and half-turn faucets with its unwavering quality. These faucets are gorgeously contemporary and function flawlessly.',
    image: FaucetImg,
  },
  {
    title: 'Shower',
    description: "A relaxing showering experience is guaranteed with Splenzo's extensive selection of overhead and hand showers, which offer a natural interaction of water and air. Choose from a variety of designs that come in different sizes and shapes.",
    image: ShowerImg,
  },
  {
    title: 'ACCESSORIES',
    description: "What truly completes a bathroom are the bathroom accessories. You can discover all of these items at Splenzo, whether you're seeking a chrome towel bar, tower ring, tumbler holder, liquid soap dispenser, or flush valves.",
    image: AccessoriesImg,
  },
];

const Category = () => {
  return (
    <section className="pt-[30px]">
      <div className="side-space">
        <Swiper
          slidesPerView={3}
          loop={false}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            600: {
              slidesPerView: 1.5,
              spaceBetween: 10,
            },
            750: {
              slidesPerView: 2.2,
              spaceBetween: 20,
            },
            1250: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1500: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {categoryData.map((category, index) => (
            <SwiperSlide key={index}>
              <div className="swiper-slide">
                <CategoryCard
                  imagesrc={category.image}
                  title={category.title}
                  description={category.description}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Category;
