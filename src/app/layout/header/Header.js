'use client'
import React, { useState, useEffect } from "react";
import "./header.css";
import Logo from "/public/splenzo-logo.svg";
import CartIcon from "/public/cart.svg";
import Link  from "next/link";
import {BiSolidChevronDown} from 'react-icons/bi'
import SearchComponent from "./SearchComponent";
import ProductMenu from './AllProductMenu';
import {HiOutlineBars3CenterLeft} from 'react-icons/hi2';
import {BiChevronDown} from 'react-icons/bi';
import {BiChevronUp} from 'react-icons/bi';
import ProductMenuMobile from "./MobileHeaderMenu";
import Image from "next/image"
import MobileMenu from "./MobileHeaderMenu";

function Header() {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isNavOpen, setNavOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const DistributorEnter = () => {
    setLoginOpen(true);
  };

  const DistributorLeave = () => {
    setLoginOpen(false);
  };

  // for scroll

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsSticky(scrollTop > 350);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

   // for mobile

   const openNav = () => {
    setNavOpen(true);
  };

  const closeNav = () => {
    setNavOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdownIndex) => {
    setActiveDropdown(activeDropdown === dropdownIndex ? null : dropdownIndex);
  };

  return (
    <>
      <header className={`for-desktop-device ${isSticky ? "sticky" : ""}`}>
        <div className="navigation-wrap">
          <div className="side-space">
            <div className="flex justify-between items-center">
              <div className="w-[13%]">
                <Link className="navbar-Classes" href="/">
                  <Image src={Logo} alt="shopnmacsplenzo  Logo"  className="w-[110px] xl:w-[150px] lg:[130px]"/>
                </Link>
              </div>

              <div className="w-[87%]">
                <div className="flex items-center pl-0 pr-0">
                  <div className="w-[74%]">  
                    <div className="w-full flex justify-between items-center">
                        <div className="w-[20%]">
                          <ProductMenu/>
                        </div>

                        {/* search */}
                        <div className="search w-[40%] ms-3 ">
                          <SearchComponent/>
                        </div>
                        {/* end search */}

                      
                        <div className="w-[56%]">
                            <ul className="list-menu ms-3">
                            <li className="nav-item show">
                                <Link className="nav-link !uppercase !font-semibold" href="/product">
                                WHAT’S NEW
                                </Link>
                            </li>

                            <li className="nav-item show">
                                <Link className="nav-link !uppercase !font-semibold" href="/about_us">
                                ABOUT US
                                </Link>
                            </li>

                            <li className="nav-item show">
                                <Link className="nav-link !uppercase !font-semibold" href="/contact_us">
                                 CONTACT US
                                </Link>
                            </li>
                            
                            </ul>
                        </div>
                    </div>
                  </div>
                  <div className="w-[30%]">
                    {/* cart / login */}

                    <div className="">
                      <div className="top-menu text-right py-2">
                        <ul className="flex justify-between items-center mb-0">
                          <li className="nav-item m-0 ">
                            <Link
                              className="nav-link  topmenu-padding  font-normal p-0"
                              href="#"
                            >
                             Call Us: 1800 212 1234
                            </Link>
                          </li>

                          <li className="nav-item m-0 ">
                            <Link
                              className="nav-link  topmenu-padding font-normal pr-0"
                              href="#"
                            >
                            <span className="flex items-center">DOWNLOAD CATELOG</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="header-line"></div>
                    <div className="py-2">
                      <div className="cart text-right">
                        <ul className=" flex items-center mb-0 w-100">

                          <li
                            className="nav-item show m-0 pr-[30px] max-w-screen-lg:pr-[5px]  flex-1"
                            onMouseEnter={DistributorEnter}
                            onMouseLeave={DistributorLeave}
                          >
                            <Link className="text-capitalize" href="#">
                              <span className="flex align-items-center">
                                BECOME A 
                              <BiSolidChevronDown className="text-gray-800 text-lg ms-1"/>
                              </span>
                            </Link>

                            {isLoginOpen && (
                              <div
                                className="dropdown-menu"
                                onMouseEnter={DistributorEnter}
                                onMouseLeave={DistributorLeave}
                              >
                                <div className="mega-box-signin">

                                  <div className="mega-box-1">
                                    <div className="mega-menu-1">
                                      <ul className="inner-menu">
                                        <li>
                                          <Link className="dropdown-item" href="/dealer">
                                            DEALER
                                          </Link>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </li>

                          <li>
                            <Link href="/cart" className="flex items-center pr-0">
                            ENQUIRY
                              <Image
                                src={CartIcon}
                                className="cartimg ms-3"
                                alt="Cart Icon"
                              />
                              <span className="badge bg-gray-300 text-[#29549F]  cart-badge flex items-center justify-center">
                                1
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

    {/* for desktop header */}


       {/* for mobile */}

       <header className={`for-mobile-device ${isSticky ? "sticky" : ""}`}>
        <div className="start-header start-style">
          <div className="side-space">
            <div className="flex content-between w-100 items-center pl-0 pr-0 py-1">
              <div className="w-[50%]">
                <Link className="navbar-brand" href="/">
                  <Image src={Logo} alt="splenzo" />
                </Link>
              </div>

              <div className="w-[50%]">
                {/* cart / login */}
                <div className="flex justify-end">
                  <div className="cart">
                    <ul className="flex  items-center justify-end m-0">
                      <span className="vertical-divider"></span>
                      <li>
                        <Link href="/cart" className="flex items-center pr-0">
                          ENQUIRY
                          <Image
                            src={CartIcon}
                            className="cartimg ms-3"
                            alt="Cart Icon"
                          />
                          <span className="badge bg-gray-300 text-[#29549F]  cart-badge flex items-center justify-center">
                            1
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

           <hr className="my-0"/>

            <div className="bottom-header w-100 display-flex align-items-center py-2">
              <div className="w-[20%]">
                <span
                  style={{ fontSize: "30px", cursor: "pointer" }}
                  onClick={openNav}
                >
                  <MobileMenu/>
                </span>
              </div>
              <div className="w-[80%]">
                <div className="search w-100 text-right">
                  <SearchComponent />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
