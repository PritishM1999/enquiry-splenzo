
'use client'
//import "bootstrap/dist/js/bootstrap.min.js";
import Product from '../shared/product/Product';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/swiper-bundle.min.css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import Slider from './component/slider/Slider'
import ProductContent from './component/content/ProductContent';
import Review from './component/review/Review';
import ReviewList from './component/review/ReviewList';

//SwiperCore.use([Autoplay, Pagination]);

const products = [
  {
    id: 1,
    title: 'Product 1',
    description: 'Description for Product 1',
    image: '/public/product1.jpg',
  },
  {
    id: 2,
    title: 'Product 2',
    description: 'Description for Product 2',
    image: '/public/product2.jpg',
  },
  {
    id: 3,
    title: 'Product 3',
    description: 'Description for Product 3',
    image: '/public/product3.jpg',
  },
  {
    id: 4,
    title: 'Product 2',
    description: 'Description for Product 1',
    image: '/public/product1.jpg',
  },
  {
    id: 5,
    title: 'Product 2',
    description: 'Description for Product 2',
    image: '/public/product2.jpg',
  },
  {
    id: 6,
    title: 'Product 3',
    description: 'Description for Product 3',
    image: '/public/product3.jpg',
  },

  {
    id: 7,
    title: 'Product 2',
    description: 'Description for Product 1',
    image: '/public/product1.jpg',
  },
  {
    id: 8,
    title: 'Product 2',
    description: 'Description for Product 2',
    image: '/public/product2.jpg',
  },
  {
    id: 9,
    title: 'Product 3',
    description: 'Description for Product 3',
    image: '/public/product3.jpg',
  },
];

const ProductDetails = () => {
  return (
    <>

    {/* main contaent */}
   <section className="py-5">
        <div className="side-space">
            <div className='grid grid-cols-1   md:grid-cols-2 md:gap-8 xl:gap-14'>
               <div className='w-100'>
                 <Slider/>
               </div>
              <div>
               <ProductContent/>
              </div>
            </div>
        </div>
    </section>
      
   <hr/>   

  {/* rating */}

    <section className="pb-5">
        <div className="side-space">
          <div className="common-heading text-left mb-3">
           <h3 className='font-Butler-Normal'>RATINGS & CUSTOMER REVIEWS</h3>
          </div>

          <div className="grid grid-cols-1  md:grid-cols-2 gap-5 md:gap-10">
            <div>
              <Review/>
            </div>

            <div>
             <ReviewList/>
            </div>
          </div>
         
        </div>
    </section>



      {/* similar product */}


       <section className="pb-5">
        <div className="side-space">
        <div className="orange-line"></div>
          <div className="common-heading text-left mb-3">
            <h3 className='font-Butler-Normal'>Similar Products</h3>
          </div>

          <div className="category-list col-span-12">
              <Swiper
                slidesPerView={6}
                spaceBetween={10}
                loop={true}
                autoplay={{ delay: 2500 }}
                navigation={false}
                pagination={{ clickable: true }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    margin:0,
                  },
                 450: {
                    slidesPerView: 2,
                  },

                  650: {
                    slidesPerView: 3,
                  },
                  1000: {
                    slidesPerView: 4,
                  },

                  1399: {
                    slidesPerView: 5,
                  },
                  1500: {
                    slidesPerView: 6,
                  },
                }}

                style={{marginRight:'0'}}
              >
                  {products.map((product) => (
                  <SwiperSlide  key={product.id}>
                    <Product  data={product}/>
                  </SwiperSlide>
                ))}
              
              </Swiper>
            </div>
        
        </div>
      </section> 
    </>
  )
}

export default ProductDetails
