import React from "react";
import resell from "../../assets/reseller.png";
import phoneOne from "../../assets/phone-one.png";
import phoneTwo from "../../assets/phone-two.png";
import { sellers } from "../../constants/links";

const Reseller = () => {
  return (
    <>
      <section className="container mx-auto w-[auto] sm:w-full">
        <div className="relative top-0 p-[2rem] block text-center w-full">
          <h1 className="sm:text-[2.7rem] text-[1.8rem] font-[400] capitalize tracking-wider">
            Automated reseller payments
          </h1>
          <p className="sm:text-[1.3rem] text-[0.9rem] font-[300]">
            you Pay only when you make a sale
          </p>
        </div>

        <div className="relative top-[4rem] px-[2rem] flex flex-col sm:flex-row flex-1 justify-around gap-[1rem] items-center w-full mb-[5rem]">
          <div className="w-[auto] sm:w-[50%]translate-x-[8rem]">
            <img
              src={resell}
              alt="reseller"
              className="object-cover max-w-[400px]"
            />
          </div>
          <div className="p-[3rem] w-[auto] sm:w-[45%]">
            <p className="text-[17px] leading-[2.5rem] w-[60%] translate-y-[-2.8rem]">
              Anytime your products gets sold,the resellers commision will
              instantly be deposited into the resellers platform account, in
              case of refunds{" "}
              <span className="text-primaryColor uppercase cursor-pointer">
                resella
              </span>{" "}
              will automatically refund.
            </p>
            <a
              href="#"
              className="text-[#333] px-[3rem] py-3 rounded-full border-[2px] border-primaryColor text-[18px] transition hover:scale-[1.2]"
            >
              Start For Free
            </a>
          </div>
        </div>

        <section className="relative top-[7rem] mx-auto w-full">
          <div className="px-[2rem] flex flex-col sm:flex-row flex-1 justify-around gap-[1rem] items-center mb-[5rem]">
            <div className="px-[2rem] w-[auto] sm:w-[40%]">
              <h1 className="text-[23px] font-[400] mb-4">Product Sellers</h1>
              <ul className="list-none flex flex-1 flex-col gap-3">
                {sellers.map((seller) => (
                  <li key={seller.id} className="text-[16px] leading-10">
                    <span className="text-primaryColor text-[12px] px-5 cursor-pointer">
                      <i className="fa-regular fa-plus"></i>
                    </span>
                    {seller.text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="px-[2rem]">
              <img
                src={phoneOne}
                alt=""
                className="max-w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="px-[2rem] flex flex-col sm:flex-row flex-1 justify-around gap-[1rem] items-center">
            <div className="px-[2rem]">
              <img
                src={phoneTwo}
                alt=""
                className="max-w-full h-full object-contain"
              />
            </div>
            <div className="px-[2rem] w-[auto] sm:w-[40%]">
              <h1 className="text-[23px] font-[400] mb-4">Product Sellers</h1>
              <ul className="list-none flex flex-1 flex-col gap-3">
                {sellers.map((seller) => (
                  <li key={seller.id} className="text-[16px] leading-10">
                    <span className="text-primaryColor text-[12px] px-5 cursor-pointer">
                      <i className="fa-regular fa-plus"></i>
                    </span>
                    {seller.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Reseller;
