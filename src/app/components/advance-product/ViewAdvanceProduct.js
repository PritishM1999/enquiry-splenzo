

import ProductBanner from "./ProductBanner";
import AdvnaceProductCard from "./AdvnaceProductCard";



const ViewAdvanceProduct = () => {
  return (
    <>
      <section className="pt-[30px]">
        <div className="side-space">
          <div className="grid  grid-cols-12 w-full">
            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                <AdvnaceProductCard title="ADVANCED PRODUCTS"  description="At Splenzo, we are constantly reinventing our products and offering innovative products. Transform your space into a smart one with the latest smart bathroom products designed for efficiency, comfort and convenience."/>
            </div>

            <div className="product-img  col-span-12 sm:col-span-6 lg:col-span-8">
              <ProductBanner/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ViewAdvanceProduct
