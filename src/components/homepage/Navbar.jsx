import { useState } from "react";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";
import close from "../../assets/close.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="mx-auto w-full flex justify-between items-center px-5 gap-5 py-3 -mt-6">
      <div className="mb-5 ml-4">
        <NavLink to={"/"}>
        <img
          src={logo}
          alt="logo"
          className="w-[124px] h-[32px] scale-[1.25]"
        />
        </NavLink>
      </div>

      <ul className="list-none sm:flex hidden justify-end mr-10 gap-8 items-center flex-1">
        <li className={`text-[18px] cursor-pointer text-white`}>
          <NavLink
            to={"/features"}
            className={({isActive}) => (isActive ? "text-black" : "text-white")}
          >
            Features
          </NavLink>
        </li>

        <li className={`text-[18px] cursor-pointer text-white`}>
          <NavLink
            to={"/about"}
            className={({isActive}) => (isActive ? "text-black" : "text-white")}
          >
            About Us
          </NavLink>
        </li>

        <li className={`text-[18px] cursor-pointer text-white`}>
          <NavLink
            to={"/sign-up"}
            className={({isActive}) => (isActive ? "text-black" : "text-white")}
          >
            Start For Free
          </NavLink>
        </li>

        <li className={`text-[18px] cursor-pointer text-white mr-10`}>
          <NavLink
            to={"/login"}
            className={({isActive}) => (isActive ? "text-black" : "text-white")}
          >
            Log In
          </NavLink>
        </li>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center -mt-5">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>

      <div
        className={`${
          toggle ? "flex" : "hidden"
        } p-6 bg-gradient-to-r from-primaryColor to-cyan-500 absolute top-16 -right-2 mx-4 my-2 w-full max-w-[100%] rounded-xl z-10 transition`}
      >
        <ul className="list-none flex flex-col justify-end mr-3 items-center flex-1">
          <li className={`text-[18px] cursor-pointer text-white`}>
            <NavLink
              to={"features"}
              className={(isActive) => (isActive ? "text-white" : "text-black")}
            >
              Features
            </NavLink>
          </li>

          <li className={`text-[18px] cursor-pointer text-white`}>
            <NavLink
              to={"about"}
              className={(isActive) => (isActive ? "text-white" : "text-black")}
            >
              About Us
            </NavLink>
          </li>

          <li className={`text-[18px] cursor-pointer text-white`}>
            <NavLink
              to={"start"}
              className={(isActive) => (isActive ? "text-white" : "text-black")}
            >
              Start For Free
            </NavLink>
          </li>

          <li className={`text-[18px] cursor-pointer text-white`}>
            <NavLink
              to={"login"}
              className={(isActive) => (isActive ? "text-white" : "text-black")}
            >
              Log In
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
