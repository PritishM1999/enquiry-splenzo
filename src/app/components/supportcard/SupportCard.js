'use client'
import Link from 'next/link';
import {BiSolidPhone} from 'react-icons/bi';
import download from '/public/download.png';
import form from '/public/form.png';
import {IoIosMail} from 'react-icons/io';
import Image from 'next/image';
//  support banner
//import contactImg from "../../assets/contact-banner.jpg";


const SupportCard = () => {
  return (
    <section className="py-[30px]">
    <div className="side-space">
    <div className="bg-no-repeat bg-cover h-[600px] md:h-[708px]" style={{ backgroundImage: `url('./contact-banner.jpg')` }}>
     <div className='flex flex-column md:flex flex-md-row justify-center md:justify-between h-100 w-100  items-center  p-4 md:p-[40px]  lg:p-24'>
      <div className='w-[100%] md:w-[503px] mr-0 md:mr-3'>
        <h3 className='text-black text-[20px]  md:text-[24px] lg:text-[36px] font-poppins font-semibold mb-0 underline decoration-[#D9D9D9] underline-offset-[12px]'> 24/7 EXPERT SUPPORT </h3>
        
        <p className='text-black text-sm font-poppins font-light my-4 leading-5'> Unable to get enough? Do you desire more of the excellent stuff?
Give us your email address, and we&#39;ll bring you a weekly selection of our newest offerings. </p>
       <p className='text-black text-xl flex items-center mb-2'><BiSolidPhone className='text-[24px] rotate-45'/> <Link href="tel:1800 212 1234" className='text-black text-sm sm:text-xl ml-2 hover:no-underline'>1800 212 1234</Link></p>
       <p className='text-black text-xl flex items-center mb-2'><IoIosMail className='text-[24px]'/> <Link href="mail:info@splenzo.com" className='text-black text-sm sm:text-xl ml-2 hover:no-underline'>info@<b>splenzo.com</b></Link></p>
      </div>
      <div className='text-left w-[100%] md:w-[fit-content] mt-4 sm:mt-0'>
        <div className='flex gap-4 items-center'>
          <div className='text-white'><Image src={download} alt='download' className='w-[30px] sm:w-[40px] lg:w-auto' /></div>
          <div><p className='text-black text-[16px] md:text-[20]  md-[770px]:text-black font-poppins mb-1 font-semibold '> Download Catalogue </p>
            <p className='text-xs text-black font-Poppins mb-0 md-[770px]:text-black'>Click here for the more information</p></div>
        </div>

        <div className='flex gap-4 mt-2 items-center'>
          <div className='text-white'><Image src={form} alt='form' className='w-[30px] sm:w-[40px] lg:w-auto' /></div>
          <div><p className='text-black text-[16px] md:text-[20]  md-[770px]:text-black font-poppins mb-1 font-semibold'> Fill the Form </p>
            <p className='text-xs text-block font-Poppins mb-0 md-[770px]:text-black'>Fill up your details here</p></div>
        </div>
      </div>
     </div>
    </div>
  </div>
</section>
  );
};

export default SupportCard;
