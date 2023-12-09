'use client'
import React, { useState } from 'react';
import styles from '../review/modal.module.css'; 
import {AiOutlineClose} from 'react-icons/ai';
import Link from "next/link";
import prodImg from "/public/product/prod-1.jpg";
import ProductQty from './ProductQty'
import  ScrollToTop from '../../../shared/ScrollToTop'; 
import Image from "next/image";

const QuickCart = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };
  
const handleLinkClick = () => {
  ScrollToTop();
};


  return (
    <>

    <div className='mt-3'>
      <Link href="#" title="Add to enquiry"  onClick={openPopup}  className="bg-[#29549F] !no-underline transition-colors hover:bg-[#054878] py-[14px]  px-4 text-[16px]  uppercase font-semibold text-center block text-white hover:no-underline rounded" >
              Add to Enquiry
      </Link>
    </div>

      {isPopupOpen && (
        <div className={styles['popup-overlay']}>
          <div className={`w-[100%] m-2 md:w-[75%]  ${styles.popup}`}>
            <div className={styles.modaldialog}>
                 <div className='flex justify-between items-center border-b'>
                   <div className='w-[90%]'>
                     <p className='text-md text-center text-[#333] mb-2 font-poppins font-medium'>The following items has been added to your cart</p>
                   </div>
                   <div>
                     <button className={styles['close-button']} onClick={closePopup}>
                        <AiOutlineClose className='text-lg font-semibold'/>
                      </button>
                   </div>
                 </div>
                
               <div className={styles.cart}>

                <div className='grid  grid-cols-1 lg:grid-cols-3 gap-3 mt-3 lg:gap-6 2xl:gap-10'>
                 
                 <div className='col-span-12 lg:col-span-2'>
                    <div className="table-responsive !w-100">
                        <table class="table border w-100 mb-0">
                          <thead>
                            <tr className='bg-gray-100 '>
                              <th>Products</th>
                              <th>Qty</th>
                              <th>Price</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div className='flex w-[300px]'>
                                  <div>
                                    <Image src={prodImg} alt="product" className='w-[100px] h-[80px] mr-5'/>
                                  </div>
                                  <div>
                                    <p className='text-sm text-[#333] font-normal'>Kara Pull-out Single Lever Table Mount Sink Mixer Faucet with Dual Flow</p>
                                  </div>
                                </div>
                              </td>
                              <td>
                                  <ProductQty/> 
                              </td>
                              <td>
                                <b>Rs. 2534</b>
                              </td>
                              <td><button> <AiOutlineClose className='text-lg font-semibold'/></button></td>
                            </tr>

                            <tr>
                              <td>
                                <div className='flex w-[100%] md:w-[200px] xl:w-[300px]'>
                                  <div>
                                    <Image src={prodImg} alt="product" className='w-[100px] h-[80px] mr-5'/>
                                  </div>
                                  <div>
                                    <p className='!text-sm text-[#333] font-normal'>Kara Pull-out Single Lever Table Mount Sink Mixer Faucet with Dual Flow</p>
                                  </div>
                                </div>
                              </td>
                              <td>
                                  <ProductQty/> 
                              </td>
                              <td>
                                <b>Rs. 2534</b>
                              </td>
                              <td><button> <AiOutlineClose className='text-lg font-semibold'/></button></td>
                            </tr>
                          </tbody>
                        </table>
                    </div>
                 </div>

                 <div className='col-span-12 lg:col-span-1'>
                     <table class="table border w-100 mb-0">
                          <thead>
                            <tr className='bg-gray-100 text-center'>
                              <th>Quick cart</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <p className='text-sm text-[#333] font-normal  text-center'>1 items in your shopping cart</p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <hr/>
                        <div className={`mt-3 {styles.total}`}>
                            <div className='flex justify-between items-start'>
                              <p className='!text-[#333] text-lg !font-medium '>Total:</p>
                              <p className='!text-[#333] text-lg !font-semibold '>Rs. 6,392.00</p>
                            </div>
                        </div>

                        <div className='mt-4 block xl:flex xl:justify-between'>
                          <Link href="/products"  onClick={handleLinkClick} className='text-[12px] md:text-[14px] !border  !border-black  transition-color py-[12px] w-100 !font-semibold  block px-2  text-[#333] text-center uppercase hover:bg-black hover:text-white hover:no-underline mr-[0px] xl:mr-1'>Continue Shopping</Link>
                          <Link href="/cart" onClick={handleLinkClick} className='text-[12px] md:text-[14px] !border  transition-color !font-semibold border-black py-[12px] w-100 block px-2 text-[#333] text-center uppercase hover:bg-black hover:text-white hover:no-underline ml-[0px] mt-[0.5rem] xl:!mt-0 xl:ml-1'>View Cart</Link>
                        </div>
                 </div>
                </div>

               </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default QuickCart;
