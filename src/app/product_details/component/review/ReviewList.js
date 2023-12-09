
'use client'
import styles from './review.module.css';

const ReviewList = () => {
  return (
    <div className={styles['review-content']}>
      <div className={`${styles['scrollbar']} ${styles['customscroll']}`}>
        <div className={styles['force-overflow']}>
          <div className={styles['rating-inner']}>
            <p className={styles['rating-title']}>Megha Mondal | 7 Oct 2020</p>
            <p className={styles['rating-para']}>
              <span className={styles['customer-rating']}>
                3.1 | <span className='text-yellow-500 '>★</span>
              </span> &nbsp; &nbsp; Nice product
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewList;
