import React from "react";
import Logo from "../../assets/img/logo.png";
import { FaArrowDown } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <section className=" header-bg w-full bg-gradient-to-r from-primaryColor to-cyan-500">
      <nav className="container  mx-auto px-6 flex justify-between items-center  pt-6 ">
        <img src={Logo} alt="logo" className="w-32" />
        <ul className="list-none sm:flex hidden justify-end mr-10 gap-8 items-center flex-1">
          <li className={`text-[18px] cursor-pointer text-white`}>
            <NavLink
              to={"/features"}
              className={({ isActive }) =>
                isActive ? "text-black" : "text-white"
              }
            >
              Features
            </NavLink>
          </li>

          <li className={`text-[18px] cursor-pointer text-white`}>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                isActive ? "text-black" : "text-white"
              }
            >
              About Us
            </NavLink>
          </li>

          <li className={`text-[18px] cursor-pointer text-white`}>
            <NavLink
              to={"/sign-up"}
              className={({ isActive }) =>
                isActive ? "text-black" : "text-white"
              }
            >
              Start For Free
            </NavLink>
          </li>

          <li className={`text-[18px] cursor-pointer text-white mr-10`}>
            <NavLink
              to={"/login"}
              className={({ isActive }) =>
                isActive ? "text-black" : "text-white"
              }
            >
              Log In
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="flex container mx-auto px-6 py-6 ">
        <div className="text-white border-none flex items-center gap-4 bg-catBg px-4 py-2 rounded-l-full w-2/5 bg-purple-500">
          <h3>Browse Categories</h3>
          <FaArrowDown />
        </div>
        <input
          type="text"
          className="w-4/5 py-2 px-4  border-none outline-none"
          placeholder="Search Products, Businesses, Categories..."
        />
        <div className="bg-black w-[10%]  flex items-center border-none  rounded-r-full ">
          <FaSearch className="text-white mx-auto " />
        </div>
      </div>
    </section>
  );
};
