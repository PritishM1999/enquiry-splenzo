'use client'
import React, { useState } from 'react';
import styles from './qantity.module.css';


const ProductQty = () => {

  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className={`w-fit ${styles.qty}`}>
      <button className={`border-y-[1px] border-l-[1px] border-[#b3b3b3] border-r-0 ${styles.qtyminus} ${styles.qty_border_left}`} aria-hidden="true" onClick={handleDecrement}>
        &minus;
      </button>
      <input className={`focus:outline-none ${styles.qtyminus} ${styles.border_right_0}`} type="text" name="qty" value={quantity} readOnly />
      <button className={`border-y-[1px] border-r-[1px] border-[#b3b3b3] border-l-0 ${styles.qtyplus} ${styles.qty_border_right}`} aria-hidden="true" onClick={handleIncrement}>
        &#43;
      </button>
    </div>
  );
};

export default ProductQty;