import React from "react";
import phone from "../../assets/iphone.png";

const CustomerSupport = () => {
  return (
    <section className="container mx-auto w-[auto] sm:w-full">
      <div className="relative text-center top-[14rem] block leading-[3rem] mb-[13rem]">
        <h1 className="sm:text-[2.5rem] text-[1.8rem] font-[400] capitalize">
          24/7 Customer Support
        </h1>
        <p className="sm:text-[1.3rem] text-[0.9rem] font-[300]">
          resela agents are always available to answer your questions
        </p>
      </div>
      <div className="relative sm:top-[8rem] top-[3rem] flex flex-row flex-1 justify-around items-center gap-[1rem] w-full sm:flex-nowrap flex-wrap">
        <div className="p-[3rem] max-w-[70%]">
          <p className="text-[17px] leading-[2.5rem] sm:w-[50%] w-[auto] translate-y-[-2.8rem]">
            Anytime your products gets sold,the resellers commision will
            instantly be deposited into the resellers platform account, in case
            of refunds{" "}
            <span className="text-primaryColor uppercase cursor-pointer">
              resella
            </span>{" "}
            will automatically refund.
          </p>
          <a
            href="#"
            className="text-[#333] px-[3rem] py-3 rounded-full border-[2px] font-[inherit] text-[18px] border-primaryColor transition hover:translate-y-[1rem]"
          >
            Start For Free
          </a>
        </div>
        <div className="w-[50%] ml-[5rem]">
          <img
            src={phone}
            alt="advertisement"
            className="object-contain w-full sm:h-[60vh] h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default CustomerSupport;
