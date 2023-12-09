"use client";
import Link from "next/link";
import prodImg from "/public/product/prod-1.jpg";
import ScrollToTop from "../ScrollToTop";
import Image from "next/image";

const handleLinkClick = () => {
  ScrollToTop();
};

function Product() {
  return (
    <>
      <div>
        <div className="product  bg-[#054878] p-3 transition-[background]  hover:bg-[#29549f]">
          <Link href="/product_details" onClick={handleLinkClick}>
            <div className="prod_img">
              <Image src={prodImg} alt="product" className="w-100" />
            </div>
          </Link>
          <div className="mt-2">
            <p className="text-white text-normal text-sm mb-1 text-[12px] md:text-[14px]">
              <b>Item</b> - 5678 <span className="mx-2">|</span> <b>Color</b>-
              Gray
            </p>
            <p className="text-sm text-white font-normal font-poppins text-[12px] md:text-[14px] mb-0">
              Single Lever Sink Mixer Deck Mounted with Hi Neck Sq. Swivel
              Spout.
            </p>
            <div className="text-center mt-3">
              <Link
                href="/product_details"
                onClick={handleLinkClick}
                className="text-black text-sm no-underline block text-[12px] md:text-[14px] w-100 p-2 uppercase font-bold transition-all bg-[#F4F4F4] hover:no-underline"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
