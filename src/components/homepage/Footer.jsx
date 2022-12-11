import React from "react";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="w-full relative top-[30rem] bottom-0 bg-black p-[1rem] sm:h-[80vh] h-[85vh] sm:mb-0 overflow-hidden">
      <div className="px-6 mt-4">
        <img
          src={logo}
          alt="logo"
          className="w-[124px] h-[32px] scale-[1.25]"
        />
      </div>

      <div className="flex flex-1 flex-wrap sm:justify-around justify-center sm:items-baseline items-center align-baseline p-[1rem] ml-[6rem] sm:flex-row flex-col">
        <div className="px-2 mt-[3rem]">
          <h3 className="text-white mb-3">Product Sellers</h3>
          <ul className="px-[auto] list-none leading-[2rem] text-center">
            <li className="text-slate-300 text-[14px]">Product Seller</li>
            <li className="text-slate-300 text-[14px]">Product Seller</li>
            <li className="text-slate-300 text-[14px]">Product Seller</li>
            <li className="text-slate-300 text-[14px]">Product Seller</li>
          </ul>
        </div>

        <div className="px-2 mt-[3rem]">
          <h3 className="text-white mb-3">Branding Resources</h3>
          <ul className="px-[auto] list-none leading-[2rem] text-center">
            <li className="text-slate-300 text-[14px]">Product Seller</li>
            <li className="text-slate-300 text-[14px]">Product Seller</li>
            <li className="text-slate-300 text-[14px]">Product Seller</li>
          </ul>
        </div>

        <div className="px-2 mt-[3rem]">
          <h3 className="text-white mb-3">
            Tips and Tools to Build your Business
          </h3>
          <ul className="px-[auto] list-none leading-[2rem] text-center">
            <li className="text-slate-300 text-[14px]">Product Seller</li>
            <li className="text-slate-300 text-[14px]">Product Seller</li>
          </ul>

          <div className="relative top-[6rem] px-6 flex flex-1 gap-4 text-white items-center">
            <i class="fa-solid fa-phone text-[24px]"></i>
            <p>
              Call a{" "}
              <span className="text-primaryColor text-[20px]">RESELA</span>{" "}
              agent:
              <br />
              <p>(+234) - 070-695-503-72</p>
            </p>
          </div>

          <div className="relative top-[8rem] px-6 flex flex-1 gap-4 text-white items-center mx-auto">
            <a href="#" className="text-center">
              <i className="fa-brands fa-square-facebook text-[20px]"></i>{" "}
              <br />
              <small className="text-[10px]">Facebook</small>
            </a>
            <a href="#" className="text-center">
              <i className="fa-brands fa-instagram text-[20px]"></i>
              <br />
              <small className="text-[10px]">Instagram</small>
            </a>
            <a href="#" className="text-center">
              <i className="fa-brands fa-twitter text-[20px]"></i>
              <br />
              <small className="text-[10px]">Twitter</small>
            </a>
          </div>
        </div>
      </div>

      <div className="relative top-[9rem] text-center m-[auto]">
      <p className="text-white text-[14px]">Powered by KWE4 Africa. &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
