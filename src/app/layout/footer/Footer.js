
'use client'
import  Link  from "next/link";
import styles from "./footer.module.css";
import ScrollToTop from "../../shared/ScrollToTop"

const handleLinkClick = () => {
  ScrollToTop();
};


function Footer() {
  return (
    <footer className={`pt-[35px] md:pt-[60px] ${styles.footer_bg}`}>
      <div className="side-space">
       
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-[0.5rem] md:gap-[2rem]">
        
         <div className="col-span-12 sm:col-span-6 md:col-span-1">
            <h6 className="border-b-4 border-[#A7A0F2]  pb-1"> KITCHEN</h6>
            
            <ul className={styles.footer_links}>
              <li>
                <Link href="#" >
                  Sink Faucets
                </Link>
              </li>
              <li>
                <Link href="#" >
                 Specialty Faucets
                </Link>
              </li>
              <li>
                <Link href="#" >
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-12 sm:col-span-6 md:col-span-1">
          <h6 className="border-b-4 border-[#A7A0F2]  pb-1"> BATHROOM</h6>
            <ul className={styles.footer_links}>
              <li>
                <Link href="#"  onClick={handleLinkClick}>
                  Bathroom Faucet
                </Link>
              </li>
              <li>
                <Link href="#"  onClick={handleLinkClick}>
                 Showering
                </Link>
              </li>
              <li>
                <Link href="#"  onClick={handleLinkClick}>
                Accessories
                </Link>
              </li>
              <li>
                <Link href="#"  onClick={handleLinkClick}>
                Bathroom Fittings
                </Link>
              </li>
              <li>
                <Link href="#"  onClick={handleLinkClick}>
                  Bathroom Taps
                </Link>
              </li>
              <li>
                <Link href="#"  onClick={handleLinkClick}>
                  Water Taps
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-12 sm:col-span-6 md:col-span-1">
          <h6 className="border-b-4 border-[#A7A0F2]  pb-1"> COMPANY</h6>
            <ul className={styles.footer_links}>
              <li>
                <Link href="/about_us"  onClick={handleLinkClick}>
                About Us
                </Link>
              </li>
              <li>
                <Link href="/certificate" onClick={handleLinkClick}>
                Certificate
                </Link>
              </li>
              <li>
                <Link href="/contact_us" onClick={handleLinkClick}>
                Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-12 sm:col-span-6 md:col-span-1">
          <h6 className="border-b-4 border-[#A7A0F2]  pb-1">Usefull Information</h6>
            <ul className={styles.footer_links}>
              <li>
                <Link href="/privacy_policy" onClick={handleLinkClick}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/term_and_condition" onClick={handleLinkClick}>
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/cookies" onClick={handleLinkClick}>
                  Cookies Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-12 sm:col-span-6 md:col-span-1">
          <h6 className="border-b-4 border-[#A7A0F2]  pb-1"> Connect with us</h6>
            <ul className={styles.footer_links}>
              <li>
                <Link href="#" >
                   Facebook
                </Link>
              </li>
              <li>
                <Link href="#" >
                   Twitter
                </Link>
              </li>
              <li>
                <Link href="#" >
                  YouTube
                </Link>
              </li>
              <li>
                <Link href="#" >
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t-8 border-[#D9D9D9] mt-10 mb-4"></div>

        <div className="grid grid-cols-1  sm:grid-cols-2 gap-2 pb-3">
          <div>
            <ul className="block sm:flex mb-0">
              <li className="text-[13px] text-white leading-5">
                 Copyright © 2023 Splenza. All Rights Reserved.
              </li>
            </ul>
          </div>
          <div className={`md:float-right md:text-right ${styles.designed_by}`}>
            <p>
              <span>
                designed by
                <Link
                  href="https://www.designdot.co.in/"
                  target="_blank"
                  className={styles.designdot_link}
                ></Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
