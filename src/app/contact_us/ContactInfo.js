'use client'
import styles from './contact.module.css';
import {HiOutlineLocationMarker} from 'react-icons/hi';
import {IoMdCall ,IoIosMailUnread} from 'react-icons/io'
 

const ContactInfo = () => {
  return (
    <div className={styles.contact_box}>
      <div className={styles.contact_text}>
        <h3>
          We’d love to hear <span className={styles.text_highlight}>from you !</span>
        </h3>
      </div>
      <br />

      <div className={styles.reg_box}>
        <h3 className='font-Butler'>Registered Address</h3>
        <div className="flex justify-end text-right">
          <HiOutlineLocationMarker className='text-[24px] bg-[#29549F] w-[30px] h-[30px] rounded p-1 text-white'/>
          <p className="ml-2 font-Poppins text-[#666] text-sm">
          D2, 4th floor,  Hilton Enclave   <br />
          Opposite NPTI Kahilipara , Assam
          </p>
        </div>
      </div>

      <div className={styles.reg_box}>
        <h3 className='font-Butler'>Phone</h3>
        <div className="flex justify-end text-right">
          <IoMdCall className='text-[24px] bg-[#29549F] w-[30px] h-[30px] rounded p-1 text-white'/>
          <p className="ml-2 font-Poppins text-[#666] text-sm">+91 76697 32456</p>
        </div>
      </div>

      <div className={styles.reg_box}>
        <h3 className='font-Butler'>Mail</h3>
        <div className="flex justify-end text-right">
          <IoIosMailUnread className='text-[24px] bg-[#29549F] w-[30px] h-[30px] rounded p-1 text-white'/>
          <p className="ml-2 font-Poppins text-[#666] text-sm">info@<b>splenzo.com</b></p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
