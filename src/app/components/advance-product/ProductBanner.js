import React from 'react';
import ProductImg from '/public/productbanner.jpg';

const ProductBanner = () => {
  return (
    <div className="w-100 h-[400px] md:h-[650px]" style={{ backgroundImage: `url('./productbanner.jpg')` }}>
    </div>
  );
};

export default ProductBanner;
