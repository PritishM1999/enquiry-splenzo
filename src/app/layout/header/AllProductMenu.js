'use client'
import React, { useState } from "react";
import "./mobilemenu.css";
import { BsFillCaretDownFill } from "react-icons/bs";
import { FiChevronRight } from "react-icons/fi";
import  Link  from "next/link";
import Category from "/public/category/cate-1.jpg";
import Category1 from "/public/category/cate-2.jpg";
import Image from "next/image"

const AllProductMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const openSubMenu = (menuId, imageUrl, parentImageUrl) => {
    setActiveMenu(menuId);
    showCategoryImage(imageUrl || parentImageUrl || Category);
  };

  const closeSubMenu = () => {
    setActiveMenu(null);
    hideCategoryImage();
  };

  const showCategoryImage = (imageUrl) => {
    document.getElementById("category-image").src = imageUrl;
  };

  const hideCategoryImage = () => {
    document.getElementById("category-image").src = Category; 
  };

  const menuData = [
    {
      id: 1,
      label: "FAUCETS",
      "data-image": Category,
      subcategories: [
        {
          id: 11,
          "data-image": Category,
          label: "LUXURY FAUCETS",
          subsubcategories: [
            { id: 111, label: "NATURE" },
            { id: 112, label: "WATREX" },
            { id: 113, label: "LANZO" },
            { id: 114, label: "AMBRELL" },
          ],
        },
        {
          id: 12,
          "data-image": Category,
          label: "FAUCETS",
          subsubcategories: [
            { id: 115, label: "LINEA" },
            { id: 116, label: "BONJIO" },
            { id: 117, label: "TRENDY" },
          ],
        },
      ],
    },
    {
      id: 2,
      label: "VALVES",
      "data-image": Category1,
      subcategories: [
        {
          id: 21,
          
          label: "BALL VALVES",
          subsubcategories: [{ id: 221, label: "AXEL" }],
        },
        {
          id: 22,
         
          label: "FAUCETS",
          subsubcategories: [],
        },
        {
          id: 23,
          label: "VERTICAL CHECK VALVES",
          subsubcategories: [],
        },
      ],
    },

    {
      id: 3,
      label: "SHOWERS",
      "data-image": Category1,
      subcategories: [
        {
          id: 21,
          
          label: "BALL SHOWERS",
          subsubcategories: [{ id: 221, label: "AXEL" }],
        },
        {
          id: 22,
         
          label: "FAUCETS",
          subsubcategories: [],
        },
        {
          id: 23,
          label: "VERTICAL CHECK VALVES",
          subsubcategories: [],
        },
      ],
    },

    {
      id: 4,
      label: "BATHROOM ACCESSORIES",
      "data-image": Category1,
      subcategories: [
        {
          id: 21,
          
          label: "BALL VALVES",
          subsubcategories: [{ id: 221, label: "AXEL" }],
        },
        {
          id: 22,
         
          label: "FAUCETS",
          subsubcategories: [],
        },
        {
          id: 23,
          label: "VERTICAL CHECK VALVES",
          subsubcategories: [],
        },
      ],
    },

    {
      id: 5,
      label: "BATHROOM ESSENTIALS",
      "data-image": Category1,
      subcategories: [
        {
          id: 21,
          
          label: "BALL VALVES",
          subsubcategories: [{ id: 221, label: "AXEL" }],
        },
        {
          id: 22,
         
          label: "FAUCETS",
          subsubcategories: [],
        },
        {
          id: 23,
          label: "VERTICAL CHECK VALVES",
          subsubcategories: [],
        },
      ],
    },
    {
      id: 6,
      label: "WASH ROOM AUTOMATION",
      "data-image": Category1,
      subcategories: [
        {
          id: 21,
          
          label: "BALL VALVES",
          subsubcategories: [{ id: 221, label: "AXEL" }],
        },
        {
          id: 22,
         
          label: "FAUCETS",
          subsubcategories: [],
        },
        {
          id: 23,
          label: "VERTICAL CHECK VALVES",
          subsubcategories: [],
        },
      ],
    },
    {
      id: 7,
      label: "DRAINERS",
      "data-image": Category1,
      subcategories: [
        {
          id: 21,
          
          label: "BALL VALVES",
          subsubcategories: [{ id: 221, label: "AXEL" }],
        },
        {
          id: 22,
         
          label: "FAUCETS",
          subsubcategories: [],
        },
        {
          id: 23,
          label: "VERTICAL CHECK VALVES",
          subsubcategories: [],
        },
      ],
    },

    {
      id: 8,
      label: "ALLIED ACCESSORIES",
      "data-image": Category1,
      subcategories: [
        {
          id: 21,
          
          label: "BALL VALVES",
          subsubcategories: [{ id: 221, label: "AXEL" }],
        },
        {
          id: 22,
         
          label: "FAUCETS",
          subsubcategories: [],
        },
        {
          id: 23,
          label: "VERTICAL CHECK VALVES",
          subsubcategories: [],
        },
      ],
    },

  ];

  // useEffect(() => {
  //   if (menuData.length > 0) {
  //     setActiveImage(menuData[0]["data-image"]);
  //   }
  // }, [menuData]);

  return (
    <div className="all-products-dropdown">
    <ul className="mb-0">
      <li>
        <Link href="#" className="font-semibold text-[#333]">
          <span className="flex items-center">
            All Product <BsFillCaretDownFill className="ml-1" />
          </span>
        </Link>
        <div>
          <div>
            <div className="flex">
              <div className="category-images w-[300px]">
                <div className="category-image-container">
                  <Image
                    id="category-image"
                    src={Category} // Default image
                    alt="Category"
                    className="category-image"
                  />
                </div>
              </div>

              <div className="w-[235px]">
                <ul>
                  {menuData.map((category) => (
                    <li key={category.id}>
                      <Link
                        key={category.id}
                        href="#"
                        title={category.label}
                        className="catlink items-center flex justify-between"
                        onMouseEnter={() =>
                          showCategoryImage(category["data-image"])
                        }
                        onMouseLeave={() => closeSubMenu()}
                      >
                        {category.label}
                        <FiChevronRight className="!text-[18px]" />
                      </Link>
                      <div>
                        <ul>
                          {category.subcategories.map((subcategory) => (
                            <li
                              key={subcategory.id}
                              onMouseEnter={() =>
                                openSubMenu(
                                  subcategory.id,
                                  subcategory["data-image"],
                                  category["data-image"]
                                )
                              }
                              onMouseLeave={() => closeSubMenu()}
                            >
                              <Link
                                href="/product"
                                title={subcategory.label}
                                className="flex items-center justify-between"
                              >
                                {subcategory.label}{" "}
                                {subcategory.subsubcategories.length > 0 && (
                                  <FiChevronRight className="!text-[18px]" />
                                )}
                              </Link>
                              {activeMenu === subcategory.id && (
                                <div className="submenu">
                                  <div className="">
                                    <div className="column-md-6">
                                      <ul>
                                        {subcategory.subsubcategories.map(
                                          (subsubcategory) => (
                                            <li
                                              key={subsubcategory.id}
                                            >
                                              <Link
                                                href="/product"
                                                title={subsubcategory.label}
                                              >
                                                {subsubcategory.label}
                                              </Link>
                                            </li>
                                          )
                                        )}
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
);
};

export default AllProductMenu;
