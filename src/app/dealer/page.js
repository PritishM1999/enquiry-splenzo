'use client'

import Form from './Form';

const Dealer = () => {
  const gradientStyle = {
    backgroundImage: `url(./common-banner.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <>
      <section>
        <div className="breadcrum">
        <div className='flex flex-column justify-center items-end bg-no-repeat h-[250px] sm:min-h-[300px] md:min-h-[400px] lg:min-h-[600px]' style={gradientStyle}>
           <div className='px-3 sm:px-5 md:px-20'>
           <h3 className='font-normal font-Butler text-[20px]  md:text-[30px] lg:text-[36px] xl:text-[40px]  2xl:text-[48px] text-right text-[#000]'>
              Become An  Dealer
              </h3>
            </div>
          </div>
        </div>
      </section>

     <section className="py-5">
        <div className="side-space">
           <Form/>
        </div>
     </section>

    </>
  );
};

export default Dealer;
