"use client";
import { useState } from "react";
import "./mobilemenu.css";
import { BiChevronRight } from "react-icons/bi";
import Link from "next/link";
import {HiOutlineBars3CenterLeft} from 'react-icons/hi2';


function MobileMenu() {
  const [menuLevels, setMenuLevels] = useState([]);

  const openNav = (level) => {
    const newLevels = [...menuLevels, level];
    setMenuLevels(newLevels);
  };

  const closeNav = () => {
    const newLevels = [...menuLevels];
    newLevels.pop();
    setMenuLevels(newLevels);
  };

  const menuData = [
    {
      id: 1,
      label: "All products",
      link: "/all-products",
      submenus: [
        {
          id: 2,
          label: "ALL PRODUCT",
          link: "/all-products/all-product",
          submenus: [
            {
              id: 3,
              label: "FAUCETS",
              link: "/all-products/all-product/faucets",
              submenus: [
                {
                  id: 4,
                  label: "LUXURY FAUCETS",
                  link: "/all-products/all-product/faucets/luxury-faucets",
                  submenus: [
                    { id: 5, label: "NATURE", link: "/all-products/all-product/faucets/luxury-faucets/nature" },
                    { id: 6, label: "WATREX", link: "/all-products/all-product/faucets/luxury-faucets/watrex" },
                    { id: 7, label: "LANZO", link: "/all-products/all-product/faucets/luxury-faucets/lanzo" },
                    { id: 8, label: "AMBRELL", link: "/all-products/all-product/faucets/luxury-faucets/ambrell" },
                  ],
                },
              ],
            },
            { id: 10, label: "VALVES", link: "/all-products/all-product/valves" },
            { id: 11, label: "SHOWERS", link: "/all-products/all-product/showers" },
          ],
        },
        { id: 12, label: "Whats New", link: "/product" },
        { id: 13, label: "About Us", link: "/about-us" },
        { id: 14, label: "Contact Us", link: "/contact-us" },
        { id: 15, label: "Download Catalog", link: "/download-catalog" },
        {
          id: 17,
          label: "BECOME A DEALER",
          link: "/become-a-dealer",
          submenus: [
            {
              id: 18,
              label: "DEALER",
              link: "/become-a-dealer/dealer",
            },
          ],
        },
        { id: 19, label: "Call Us: 1800 212 1234", link: "/tel:1800 212 1234" },
      ],
    },
  ];

  const renderMenu = (items, level) => {
    return (
      <div
        className={`sidepanel ${menuLevels.includes(level) ? "active" : ""}`}
      >
        <Link href="#" className="closebtn1" onClick={closeNav}>
          ×
        </Link>
        {items.map((item) => (
          <div key={item.id}>
            {item.submenus ? (
              <Link href="#" onClick={() => openNav(item.id)} className="submenu-toggle">
                {item.label} <BiChevronRight className="text-[30px]" />
              </Link>
            ) : (
              <Link href={item.link} onClick={closeNav}>
                {item.label}
              </Link>
            )}
            {item.submenus && renderMenu(item.submenus, item.id)}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="all-product-mobile">
      <button className="openbtn" onClick={() => openNav(1)}>
        <HiOutlineBars3CenterLeft style={{ fontSize: "30px", cursor: "pointer" }}/>
      </button>
      {renderMenu(menuData, 1)}
    </div>
  );
}

export default MobileMenu;
