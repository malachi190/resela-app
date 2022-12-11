import React from "react";
import googlePlay from '../../assets/google.png'
import appleIcon from '../../assets/apll.png'

const Complimentry = () => {
  return (
    <div className="relative top-[5rem] bg-gradient-to-r from-primaryColor to-cyan-500 w-full p-[2rem] flex flex-1 flex-wrap justify-between items-center shadow-2xl">
      <div className="px-8 leading-8">
        <h3 className="text-[20px] tracking-wide">Download the mobile app</h3>
        <div className="flex flex-wrap justify-center items-center gap-6">
            <a href="#" className="flex flex-wrap justify-center items-center gap-4 bg-black px-6 py-2 rounded-md mt-6 shadow-lg">
                <img src={googlePlay} alt="" className="min-w-[30px] h-[30px] object-contain"/>
                <div className="leading-3 text-white">
                    <p className="text-[14px]">GET IT ON</p>
                    <br />
                    <h2 className="text-[22px]">Google Play</h2>
                </div>
            </a>
            <a href="#" className="flex flex-wrap justify-center items-center gap-4 bg-black px-6 py-2 rounded-md mt-6 shadow-lg">
            <img src={appleIcon} alt="" className="min-w-[30px] h-[30px] object-cover scale-[1.5]"/>
                <div className="leading-3 text-white">
                    <p className="text-[14px]">Download on the</p>
                    <br />
                    <h2 className="text-[22px]">App Store</h2>
                </div>
            </a>
        </div>
      </div>
      <div className="px-4 sm:text-start text-center">
        <h1 className="text-2xl font-[inherit] font-[400] break-words">
            Welcome to the Future of Commerce in Africa
        </h1>
        <a href="#" className="bg-black px-10 py-4 rounded-[50px] text-white text-[18px] block mt-4 max-w-[200px] text-center sm:float-right shadow-lg sm:ml-0 ml-40">
            Get Started
        </a>
      </div>
    </div>
  );
};

export default Complimentry;
