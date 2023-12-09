'use client'
import BannerImg from "/public/common-banner.jpg";
import certiImg from "/public/certificate.jpeg";
import styles from "./certificate.module.css";
import Image from "next/image";

const certificateData = [
  {
    id: 1,
    imgSrc: certiImg,
    altText: "Certificate 1",
  },
  {
    id: 2,
    imgSrc: certiImg,
    altText: "Certificate 2",
  },
  {
    id: 3,
    imgSrc: certiImg,
    altText: "Certificate 3",
  },
  {
    id: 4,
    imgSrc: certiImg,
    altText: "Certificate 4",
  },
  {
    id: 5,
    imgSrc: certiImg,
    altText: "Certificate 5",
  },
];

const Cerificates = () => {


  const gradientStyle = {
    backgroundImage: `url('./common-banner.jpg')`,
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
              <h3 className="font-normal font-Butler text-[24px]  md:text-[30px] lg:text-[36px] xl:text-[40px]  2xl:text-[48px] text-right text-[#000]">
                Certificates
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="side-space">
          <div>
            <p className="text-sm leading-5 md:leading-6 md:text-[16px] lg:text-lg  text-[#666] text-center font-light font-poppins">
              The information transmitted, including any attachments, is
              intended only for the person or entity to which it is addressed
              and may contain confidential and/or privileged material. Any
              review, retransmission, dissemination or other use of, or taking
              of any action in reliance upon, this information by persons or
              entities other than the intended recipient is prohibited, and all
              liability arising therefrom is disclaimed. If you received this in
              error, please contact the sender and delete the material from any
              computer.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 mt-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {certificateData.map((certificate) => (
                      <div key={certificate.id} className={`realtive overflow-hidden ${styles.ceri_img}`}>
                      <Image
                        src={certificate.imgSrc}
                        alt={certificate.altText}
                        className="ease-in duration-300 scale-100 hover:scale-110"
                      />
                    </div>
                
                ))}
             </div>
         
        </div>
      </section>
    </>
  );
};

export default Cerificates;
