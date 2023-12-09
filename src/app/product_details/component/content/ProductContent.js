"use client";
import React, { useState } from "react";
import "./produc-content.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Range from "./Range";
import { AiFillStar } from "react-icons/ai";
import ProductQty from "./ProductQty";
import ShowMoreText from "react-show-more-text";
import RatingModal from "../review/RatingModal";
import QuickCart from "./QuickCart";

const ranges = [
  { id: 1, label: 'ELIXIR', item: 'SP-2534' },
  { id: 2, label: 'ELIXIR', item: 'SP-2534' },
  { id: 3, label: 'ELIXIR', item: 'SP-2534' },
  { id: 4, label: 'ELIXIR', item: 'SP-2534' },
  { id: 5, label: 'ELIXIR', item: 'SP-2534' },
  { id: 6, label: 'ELIXIR', item: 'SP-2534' },
  { id: 7, label: 'ELIXIR', item: 'SP-2534' },
  { id: 8, label: 'ELIXIR', item: 'SP-2534' },
  
];



const ProductContent = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div className="product-content mt-4 md:mt-0">
        <h3>
          Kara Pull-out Single Lever Table Mount Sink Mixer Faucet with Dual
          Flow (Matte Black) 304-Grade SS{" "}
        </h3>
        <p>
          <span className="font-medium text-[#333] ">Categories :</span> Health
          & Wellness
        </p>

        <div className="product-rating">
          <p className="flex items-center">
            <AiFillStar className="text-orange-300 " />
            <AiFillStar className="text-orange-300 " />
            <AiFillStar className="text-orange-300 " /> | 4 reviews
          </p>
        </div>

        {/* <div class="prices">
          <span className="compare-price line-through text-sm md:text-lg text-[#666]">
            Rs. 9,834
          </span>
          <span className="price on-sale ml-2 text-sm sm:text-lg text-[#333]">
            Rs. 6,392
          </span>
          <span className="discount_price text-sm sm:text-lg text-green-700 font-semibold ml-2 ">
            (35% off)
          </span>
        </div> */}

        <div className="mt-2">
          <ProductQty />
        </div>

        <div className="mt-3">
          <Swiper
            slidesPerView={5}
            spaceBetween={10}
            loop={true}
            autoplay={{ delay: 2500 }}
            navigation={false}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 2, margin: 0 },
              400: { slidesPerView: 3 },
              800: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
              1399: { slidesPerView: 5 },
            }}
          >
           {ranges.map((range) => (
              <SwiperSlide key={range.id}>
                <Range label={range.label} item={range.item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="my-3 w-[225px]">
          <QuickCart />
        </div>

        <div className="product-description">
          <h3>Description</h3>
          <ShowMoreText
            lines={4}
            more="Read More"
            less="Read Less"
            onClick={toggleExpansion}
            expanded={expanded}
          >
            <p className="">
              Pull Out Single Lever Mixer Faucet is a 304-Grade Stainless Steel
              Hot & Cold Kitchen Sink Tap that has a pull-down spray head with 2
              spray options - foam flow & ring shower, offers control over
              direction & temperature of flow and comes with 10 years warranty.
            </p>

            <h4> MATERIAL & FINISH</h4>
            <p>
              - Kitchen Sink Tap is manufactured in AISI 304-Grade Stainless
              Steel containing 18% Chromium and 8% Nickel that actively resists
              rusting and corrosion.
            </p>
            <p>
              - Pull out Kitchen Tap has a classic Brushed Black Matte Finish
              that gives a contemporary aesthetic.
            </p>

            <h4> APPLICATION </h4>
            <p>
              - Kitchen Mixer Faucet has a Table-mount installation type and can
              be installed with any kitchen sink.
            </p>

            <h4> FUNCTIONALITY </h4>
            <p>
              - Sink Tap Handle/Lever enabled with the quarter-turn operation. -
              Premium Ceramic Cartridges are tested for more than 5,00,000
              operations. - The high thickness of the ceramic disc provides
              smooth movement and can withstand high pressure of water flow.
            </p>
          </ShowMoreText>
        </div>

        <div>
          <RatingModal />
        </div>
      </div>
    </>
  );
};

export default ProductContent;
