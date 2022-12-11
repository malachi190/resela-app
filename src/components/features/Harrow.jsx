import React from "react";
import creditCardOne from "../../assets/Credit-Card1.png";
import creditCardTwo from "../../assets/Credit-Card.png";
import guard from '../../assets/guard.png'
import setting from '../../assets/setting.png'
import purse from '../../assets/purse.png'
import market from '../../assets/market.png'

const Harrow = () => {
  return (
    <section className="container mx-auto relative top-[20rem] px-5 max-w-full h-auto pb-[4rem]">
      <div className="flex flex-1 flex-col sm:flex-row flex-wrap justify-center items-center gap-10 w-full">
        <div className="w-auto text-justify px-8 mt-[4rem]">
          <h1 className="text-[2.5rem] break-before-all break-words leading-normal font-normal">
            Powerful Integrations
          </h1>
          <p className="text-[20px] mb-[2.4rem]">
            You will need to verify your <br className="sm:block hidden" />{" "}
            phone number before accsessing
          </p>
          <a
            href="#"
            className="bg-primaryColor text-white text-[18px] text-center px-12 py-3 rounded-3xl"
          >
            Start Selling
          </a>
        </div>
        <div className="w-auto px-8 relative top-[4rem] left-0 sm:mr-0 mr-20">
          <img
            src={creditCardOne}
            alt=""
            className="object-contain max-w-full h-auto  sm:h-[30vh]"
          />
          <img
            src={creditCardTwo}
            alt=""
            className="object-contain max-w-full h-auto sm:h-[30vh] absolute top-[8rem] left-[10rem]"
          />
        </div>
      </div>

      <div className="relative top-[14rem] mb-0 w-full flex flex-wrap sm:flex-row flex-col justify-around gap-[3rem] p-10">
        <div className="px-6 mt-8 max-w-[400px]">
            <img src={purse} alt="" className="w-[100px] h-[100px] object-contain"/>
            <h2 className="uppercase text-[25px] mt-3">Manage Wallet</h2>
            <p className="text-[12px]">resellers commisions will immediately be deposited into resellers platform account in case of refunds.</p>
        </div>

        <div className="px-6 mt-8 max-w-[400px]">
            <img src={setting} alt="" className="w-[100px] h-[100px] object-contain"/>
            <h2 className="uppercase text-[25px] mt-3">Timely Updates</h2>
            <p className="text-[12px]">resellers commisions will immediately be deposited into resellers platform account in case of refunds.</p>
        </div>

        <div className="px-6 mt-8 max-w-[400px]">
            <img src={guard} alt="" className="w-[100px] h-[100px] object-contain"/>
            <h2 className="uppercase text-[25px] mt-3">Verified Resellers</h2>
            <p className="text-[12px]">resellers commisions will immediately be deposited into resellers platform account in case of refunds.</p>
        </div>

        <div className="px-6 mt-8 max-w-[400px]">
            <img src={market} alt="" className="w-[100px] h-[100px] object-contain"/>
            <h2 className="uppercase text-[25px] mt-3">Marketplace</h2>
            <p className="text-[12px]">resellers commisions will immediately be deposited into resellers platform account in case of refunds.</p>
        </div>
      </div>
    </section>
  );
};

export default Harrow;
