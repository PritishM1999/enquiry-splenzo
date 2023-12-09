'use client'
import { AiOutlineClose } from "react-icons/ai";
import  Link from "next/link";
import prodImg from "/public/product/prod-1.jpg";
//import ProductQty from "../product_details/component/content/ProductQty";
import Image from "next/image";
import Enquiry from "./Enquiry";

const Cart = () => {
  return (
    <>
      <section className="py-5">
        <div className="side-space">
          <div className="view-cart">
          <div className='grid  grid-cols-12'>
            <div className='col-span-12'>
                <div className="common-heading text-left mb-3">
                  <h3 className="font-Butler-Normal">SHOPPING CART</h3>
                </div>
                <hr />
                <div className="table-responsive">
                  <table className="table border w-100 mb-0">
                    <thead>
                      <tr className="bg-gray-100">
                        <th>Products</th>
                        <th>Item Code</th>
                        <th>Qty</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                        <div className='flex w-[100%]'>
                            <div>
                              <Image
                                src={prodImg}
                                alt="product"
                                className="w-[100px]  h-[60px] md:h-[80px] mr-5"
                              />
                            </div>
                            <div>
                              <p className="mb-0 text-sm text-[#333] font-normal">
                                Kara Pull-out Single Lever Table Mount Sink
                                Mixer Faucet with Dual Flow
                              </p>
                              <p className="mb-0 flex text-sm text-[#333] font-normal"><span className="me-2"><b>Category:</b> faucets</span> | <span className="ms-2"><b>Sub Category:</b> luxury-faucets</span></p>
                            </div>
                          </div>
                        </td>
                        <td>
                          SP-2534
                        </td>
                        <td>
                          {/* <ProductQty /> */}
                        </td>
                       
                        <td>
                          <button>
                            <AiOutlineClose className="text-lg font-semibold" />
                          </button>
                        </td>
                      </tr>

                      <tr>
                        <td>
                        <div className='flex w-[100%]'>
                            <div>
                              <Image
                                src={prodImg}
                                alt="product"
                                className="w-[100px]  h-[60px] md:h-[80px] mr-5"
                              />
                            </div>
                            <div>
                              <p className="text-sm text-[#333] font-normal">
                                Kara Pull-out Single Lever Table Mount Sink
                                Mixer Faucet with Dual Flow
                              </p>
                              <p className="flex text-sm text-[#333] font-normal"><span className="me-2"><b>Category:</b> faucets</span> | <span className="ms-2"><b>Sub Category:</b> luxury-faucets</span></p>
                            </div>
                          </div>
                        </td>
                        <td>
                          SP-2534
                        </td>
                        <td>
                          {/* <ProductQty /> */}
                        </td>
                       
                        <td>
                          <button>
                            <AiOutlineClose className="text-lg font-semibold" />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          </div>

          <div className="enquiry_form mt-5">
            <div className="common-heading text-center mb-3">
              <h3 className="text-left">ENQUIRY NOW </h3>
              <div className="line"></div>
            </div>
            
            <div className="mt-5">
             <Enquiry/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
