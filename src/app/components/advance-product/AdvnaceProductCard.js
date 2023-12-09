'use client'
import React from 'react';
import styles from './advanceproductcard.module.css';
import  Link from 'next/link';
import  ScrollToTop  from '../../shared/ScrollToTop'; 

const handleLinkClick = () => {
  ScrollToTop();
};



const AdvnaceProductCard = ({title , description }) => {
  return (
    <>
      <div className={`bg-[#EDEDED] realative h-[400px] md:h-[650px] ${styles.card}`}>
        <div className={`pt-[50px]  text-center ${styles.heading}`}>
         <h4 className='text-[20px] xl:text-[36] lg:text-[24px] text-gray-950   font-medium font-Butler uppercase'>{title}</h4>
         <div className={styles.product_content}>
          <p className='text-[14] leading-[24px] sm:text-[14px] md:text-lg 2xl:text-2xl    text-white font-Poppins font-light transition-all'>{description}</p>
          <Link href="/products" onClick={handleLinkClick} className="text-white text-sm underline  underline-offset-8 font-semibold transition-all ">View Products</Link>
         </div>
        </div>
        <div className={styles.overlay}></div>
      </div>
    </>
  );
};

export default AdvnaceProductCard;
