"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import Product from "../../shared/product/Product";

const Uniform = () => {
  return (
    <>
      <section className="pt-3">
        <div className="side-space">
          <div className="">
            <div className="common-heading text-center mb-3">
              <h3>UNIFORMS</h3>
              <div className="orange-line"></div>
            </div>

            <div className="grid gap-[0.75rem] grid-cols-12 w-full">
              <div className="category-list col-span-12">
                <Swiper
                  slidesPerView={5}
                  spaceBetween={10}
                  loop={true}
                  autoplay={{ delay: 2500 }}
                  navigation={false}
                  pagination={{ clickable: true }}
                  breakpoints={{
                    320: { slidesPerView: 1.3 },
                    480: { slidesPerView: 2.2 },
                    770: { slidesPerView: 3 },
                    1030: { slidesPerView: 4 },
                    1340: { slidesPerView: 5 },
                  }}
                >
                  {[1, 2, 3, 4, 5, 6, 7].map((index) => (
                    <SwiperSlide key={index}>
                      <Product />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Uniform;
