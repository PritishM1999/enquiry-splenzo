
'use client';
import styles from './category.module.css';
import Image from 'next/image';


const CategoryCard = ({ imagesrc, title , description }) => {
  
  return (
    <>
       <div className={`${styles.card}`}>
        <div className={styles.overlay}></div>
        <div className={styles.heading}>
          <h4 className='text-[18px] md:text-[20px] xl:text-[24px] text-white font-medium font-poppins uppercase leading-5'>{title}</h4>
          <p className='text-[14px] xl:text-[16px] text-white font-normal font-poppins leading-6 mb-0'>{description}</p>
        </div>
        <div>
          <Image src={imagesrc} alt={title} />
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
