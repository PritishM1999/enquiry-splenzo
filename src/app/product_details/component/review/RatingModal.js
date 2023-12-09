'use client'
import React, { useState } from 'react';
import styles from './modal.module.css'; 
import {AiOutlineClose} from 'react-icons/ai'

const RatingModal = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>

    <div className='mt-3'>
       <button onClick={openPopup} className="py-[10px] px-4  text-lg w-[230px] text-white rounded  font-semibold transition-colors bg-[#054878] hover:bg-[#29549F] ">Write a review</button>
    </div>

      {isPopupOpen && (
        <div className={styles['popup-overlay']}>
          <div className={`w-[100%] m-2 sm:w-[500px] ${styles.popup}`}>
            <div className={styles.modaldialog}>
               
                 <div className='flex justify-between items-center    border-b'>
                   <div>
                     <h3 className='text-lg text-[#333] font-poppins font-medium'>Post Your Product Review</h3>
                   </div>
                   <div>
                     <button className={styles['close-button']} onClick={closePopup}>
                        <AiOutlineClose className='text-lg font-semibold'/>
                      </button>
                   </div>
                 </div>
                
                <form action="#">
                <div className='mt-3'>
                    <div className="p-0 ">
                        <div className={styles.ratebox}>
                            <h4>Overall rating</h4>
                            <div className={`mt-3 mb-3 ${styles.starrating}`}>
                                <input type="radio" id="5-stars" name="rating" value="5"/>
                                <label for="5-stars" className={styles.star}>★</label>
                                <input type="radio" id="4-stars" name="rating" value="4"/>
                                <label for="4-stars" className={styles.star}>★</label>
                                <input type="radio" id="3-stars" name="rating" value="3"/>
                                <label for="3-stars" className={styles.star}>★</label>
                                <input type="radio" id="2-stars" name="rating" value="2"/>
                                <label for="2-stars" className={styles.star}>★</label>
                                <input type="radio" id="1-star" name="rating" value="1"/>
                                <label for="1-star" className={styles.star}>★</label>
                            </div>
                        </div>
                    </div>
                    
                    <div className="p-0">
                        <div className="form-group">
                            <input type="text" name="name" className="p-[10px] border rounded w-100 focus:outline-none" placeholder="Name" required=""/>
                        </div>
                    </div>
                    
                    <div className="p-0">
                        <div className="form-group">
                            <input type="text" name="email" className="p-[10px] border rounded w-100 focus:outline-none" placeholder="Email" required=""/>
                        </div>
                    </div>
                    
                    <div className="p-0">
                        <div className="form-group">
                            <input type="text" name="headline" className="p-[10px] border rounded w-100 focus:outline-none" placeholder="Add a headline" required=""/>
                        </div>
                    </div>
                    
                    <div className="p-0">
                        <div className="form-group">
                            <textarea className="p-[10px] border rounded w-100 focus:outline-none" name="review" placeholder="Write your review"></textarea>
                        </div>
                    </div>
                   
                    <div className="p-0  mt-3 text-center">
                    <input type="submit" name="submit" value="Submit" className="py-[12px] px-4 text-white rounded transition-colors bg-[#29549F] hover:bg-[#054878]"/>
                    </div>

                    </div>
                </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RatingModal;
