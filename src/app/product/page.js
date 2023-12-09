'use client'
import Product from "../shared/product/Product";
import Link from "next/link";


const products = [
  {
    id: 1,
    title: 'Product 1',
    description: 'Description for Product 1',
    image: '/path/to/product1.jpg',
  },
  {
    id: 2,
    title: 'Product 2',
    description: 'Description for Product 2',
    image: '/path/to/product2.jpg',
  },
  {
    id: 3,
    title: 'Product 3',
    description: 'Description for Product 3',
    image: '/path/to/product3.jpg',
  },
  {
    id: 4,
    title: 'Product 2',
    description: 'Description for Product 1',
    image: '/path/to/product1.jpg',
  },
  {
    id: 5,
    title: 'Product 2',
    description: 'Description for Product 2',
    image: '/path/to/product2.jpg',
  },
  {
    id: 6,
    title: 'Product 3',
    description: 'Description for Product 3',
    image: '/path/to/product3.jpg',
  },

  {
    id: 7,
    title: 'Product 2',
    description: 'Description for Product 1',
    image: '/path/to/product1.jpg',
  },
  {
    id: 8,
    title: 'Product 2',
    description: 'Description for Product 2',
    image: '/path/to/product2.jpg',
  },
  {
    id: 9,
    title: 'Product 3',
    description: 'Description for Product 3',
    image: '/path/to/product3.jpg',
  },
];


const AllProduct = () => {
  return (
    <>
      <section className="py-5">
        <div className="side-space">
          <div className="grid grid-cols-1 md:grid-cols-2 mb-4 items-center">
            <div className="">
              <p className="mb-0">
                Showing <b> Faucets </b> 1-18 of 129 results
              </p>
            </div>

            <div className="block md:flex md:flex-row flex-1 gap-2 justify-end mt-3 md:mt-0">
              <div>
                <select className="p-2 border rounded-sm focus:outline-0 w-100 sm:w-auto mb-2 md:mb-0">
                  <option> Select Category </option>
                  <option> Faucets </option>
                  <option> Valves </option>
                  <option> Showers </option>
                  <option> Bathroom Accessories </option>
                  <option> Bathroom Essentials </option>
                </select>
              </div>

              <div>
                <select className="p-2 border rounded-sm focus:outline-0 w-100 sm:w-auto mb-2 md:mb-0">
                  <option> Select Sub Category </option>
                  <option> Luxury Faucets </option>
                  <option> Faucets </option>
                  <option> Divertors </option>
                  <option> Sensor Faucets </option>
                </select>
              </div>

              <div>
                <select className="p-2 border rounded-sm focus:outline-0 w-100 sm:w-auto mb-2 md:mb-0">
                  <option> Select Sub Sub Category </option>
                  <option> Watrex </option>
                  <option> Nature </option>
                  <option> Lanzo </option>
                  <option>Mazzo </option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 md:gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
            {products.map((product) => (
              <Product key={product.id} data={product} />
            ))}
          </div>

          <div className="pt-4">
            <ul className="pagination m-auto items-center justify-center">
              <li className="page-item">
                <Link className="page-link" href="#">
                  Previous
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" href="#">
                  1
                </Link>
              </li>
              <li className="page-item active">
                <Link className="page-link" href="#">
                  2
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" href="#">
                  3
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" href="#">
                  Next
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllProduct;
