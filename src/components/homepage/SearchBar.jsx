import React from "react";
import { useState } from "react";
import market from "../../assets/marketplace.png";

const SearchBar = () => {
  return (
    <>
      <div className="px-5 sm:block hidden">
        <img
          src={market}
          alt="marketplace"
          className="object-contain w-[280px] h-[80px]"
        />
      </div>
      <form
        className="px-3 mr-20 flex-1 sm:flex hidden justify-between items-center"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <select className="min-w-[55rem] h-[45px] bg-white shadow-md focus:outline-none">
          <option
            selected
            disabled
            className="text-slate-700 font-light text-lg tracking-wider font-poppins"
          >
            Search Products,Businesses, Categories...
          </option>
        </select>
        <button
          type="submit"
          className="bg-black w-[60px] h-[45px] rounded-r-3xl px-3 mx-0"
        >
          <i className="fa-solid fa-magnifying-glass text-white font-semibold text-lg"></i>
        </button>
      </form>
    </>
  );
};

export default SearchBar;
