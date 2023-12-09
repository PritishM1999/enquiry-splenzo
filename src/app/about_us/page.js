
'use client'

import Counter from './component/Counter';
import Category from "../components/category/CategoryCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import FaucetImg from "/public/category/cate-1.jpg";
import ShowerImg from "/public/category/cate-2.jpg";
import AccessoriesImg from "/public/category/cate-3.jpg";



const About = () => {
    
    const gradientStyle = {
        backgroundImage: `url('./about-banner.jpg')`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
      };
      
  return (
    <>
      <section>
        <div className='breadcrum'>
          <div className='flex flex-column justify-center items-end bg-no-repeat h-[250px] sm:min-h-[300px] md:min-h-[400px] lg:min-h-[600px]' style={gradientStyle}>
           <div className='px-3 sm:px-5 md:px-20'>
           <h3 className='font-normal font-Butler text-[20px]  md:text-[30px] lg:text-[36px] xl:text-[40px]  2xl:text-[48px] text-right text-[#000]'>
                MAKE IT <br/>
                <b>BOLD AND LUXURY</b>
                <br/>
                BATHROOM
            </h3>
            <p className='text-[14px] md:text-[16px] xl:text-[18px] mt-3 text-[#333] font-normal font-poppins text-right'>Suppliers of luxury product for over 10 year</p>
           </div>
          </div>
        </div>
      </section>

      <section className='py-5'>
        <div className='side-space'>
            <div>
                <h3 className='text-[24px]  md:text-[30px] lg:text-[36px] xl:text-[40px]  2xl:text-[48px] text-[#333] font-medium text-center font-Butler mb-3'>Welcome to Splenzo</h3>
                <p className='text-[#666] text-[12px] md:text-[14px] xl:text-[16px] leading-7  font-light'> With a humble beginning 34 years ago, SPLENZO has come a long way & won the confidence of
                     millions of customers. SPLENZO presents the most lavish & contemporary bath fittings, Accessories 
                     and essentials to beautify your own world, your home. The perfect fusion of timeless beauty with
                      comfortable working to suit the changing lifestyles and distinctive architecture of modern decor.</p>

                <p className='text-[#666] text-[12px] md:text-[14px]  xl:text-[16px] leading-7 font-light'> With futuristic designs and innovative products, SPLENZO bath fittings & accessories,
                     REGENT BATHZ PVT. LTD. is constantly providing & satisfying its valued customers with its quality products.
                      We ensure that right from costing to packaging only the best raw materials are used for manufacturing 
                      of SPLENZO products.</p>

                <p className='text-[#666] text-[12px] md:text-[14px] xl:text-[16px] leading-7 font-light'> Through continuous R & D, backed by experience of over 34 years, SPLENZO has evolved as a 
                    front-runner in the manufacturing and supplying of quality bath products and accessories.
                     We have got an excellent production and R & D team. We believe that technology and innovation should not be confined only to premium brands, and we ensure that each product should be Long-Lasting. Equipped with the latest facilities, know-how and technology SPLENZO has developed the latest designs of bath products & Accessories.</p>
            </div>
        </div>
      </section>

     {/* start counter */}
      <section>
        <div className='side-space'>
           <Counter/>
        </div>
      </section>
  {/* start counter */}


    {/* actegory swiper  */}
      <section className="py-[3rem]">
        <div className="side-space">
         <div className="orange-line"></div>
          <div className="common-heading text-center">
            <h3 className="text-left  font-Butler-Normal">Complete solutions for Living Concept</h3>

          </div>
          <div className="grid gap-[0.75rem] grid-cols-12 w-full mt-3 md:mt-4 lg:mt-5">
            <div className="category-list col-span-12">
              <Swiper
                slidesPerView={3}
                spaceBetween={10}
                loop={true}
                autoplay={{ delay: 2500 }}
                navigation={false}
                pagination={{ clickable: true }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  600: {
                    slidesPerView: 2,
                  },
                  1000: {
                    slidesPerView: 3,
                  },
                }}
              >
                <SwiperSlide>
                  <Category imagesrc={FaucetImg} title="FAUCET" description="Splenzo, a faucet manufacturer in India, offers an exclusive range of single lever, quarter-turn, and half-turn faucets with its unwavering quality. These faucets are gorgeously contemporary and function flawlessly."/>
                </SwiperSlide>
               
                <SwiperSlide>
                  <Category imagesrc={ShowerImg} title="Shower" description="A relaxing showering experience is guaranteed with Splenzo extensive selection of overhead and hand showers, which offer a natural interaction of water and air. Choose from a variety of designs that come in different sizes and shapes."/>
                </SwiperSlide>
                <SwiperSlide>
                  <Category imagesrc={AccessoriesImg} title="ACCESSORIES" description="What truly completes a bathroom are the bathroom accessories. You can discover all of these items at Splenzo, whether you're seeking for a chrome towel bar, tower ring, tumbler holder, liquid soap dispenser, or flush valves." />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
       {/* actegory swiper  */}
    </>
  );
}

export default About;
