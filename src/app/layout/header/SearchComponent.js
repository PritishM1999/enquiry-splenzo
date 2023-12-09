'use client'
import { BsSearch } from "react-icons/bs";

export default function SearchComponent() {
  return (
    <>
      <form>
        <div className="flex items-center border rounded-full pl-3">
          <input
            className="w-full outline-none bg-transparent"
            type="text"
            placeholder="SEARCH PRODUCT"
          />
          <button className="w-[40px] h-[35px] rounded-full bg-[#29549F] text-center flex justify-center items-center ">
            <BsSearch className="text-white font-bold text-lg" />
          </button>
        </div>
      </form>
    </>
  );
}
