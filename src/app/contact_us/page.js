'use client'

import ContactInfo from "./ContactInfo";
import Form from "./Form";

const Contact = () => {
  const gradientStyle = {
    backgroundImage: `url(./common-banner.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <>
      <section>
        <div className="breadcrum">
          <div
            className="flex flex-column justify-center items-end bg-no-repeat h-[250px] sm:min-h-[300px] md:min-h-[400px] lg:min-h-[600px]"
            style={gradientStyle}
          >
            <div className="px-3 sm:px-5 md:px-20">
              <h3 className="font-normal font-Butler text-[20px]  md:text-[30px] lg:text-[36px] xl:text-[40px]  2xl:text-[48px] text-right text-[#000]">
                Want Us To Contact You?
              </h3>
              <p className="text-[14px] md:text-[16px] xl:text-[18px] mt-3 text-[#333] font-normal font-poppins  text-right sm:ml-auto leading-7 w-[100%] md:w-[50%]">
                We understand that sometimes you are busy therefore why not
                complete our simple form below and we’ll call you back as soon
                as possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="side-space">
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-10">
            <div className="col-span-1">
              <ContactInfo />
            </div>

            <div className="col-span-1 lg:col-span-2">
              <div>
                <p className="text-xl text-[#333] font-medium text-left font-poppins mb-3">
                  Send Us A Message And We&#39;ll Respond As Soon As Possible.
                </p>
              </div>
              <Form />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
