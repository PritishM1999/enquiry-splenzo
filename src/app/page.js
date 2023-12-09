'use client'
import ViewAdvanceProduct from "./components/advance-product/ViewAdvanceProduct";
import Slider from "./components/slider/Slider";
import TrendingProduct from "./components/trendingproduct/TrendingProduct"
import 'swiper/swiper-bundle.min.css';

import Category from "./components/category/Category";
import SupportCard from "./components/supportcard/SupportCard";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";

export default function Home() {
  return (
    <main>
      {/* start slider */}
     
        <Slider/>

      {/* end slider */}

      {/* start ViewAdvanceProduct   */}

      <ViewAdvanceProduct/>
     
      {/* end ViewAdvanceProduct */}

     {/*category*/}
        <Category/>
      {/*catgory */}

      <TrendingProduct/>

       <SupportCard/>
    </main>
  )
}
