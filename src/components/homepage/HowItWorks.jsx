import React from "react";
import slideOne from "../../assets/slide-one.png";
import slideTwo from "../../assets/slide-two.png";
import { resellers } from "../../constants/links";

const HowItWorks = () => {
  return (
    <section className="container mx-auto w-full">
      <div className="relative sm:top-[15rem] top-[8rem] leading-[3rem] text-center block">
        <h1 className="sm:text-[2.5rem] text-[1.9rem] font-[400] capitalize">How It Works</h1>
        <p className="sm:text-[1.3rem] text-[0.9rem] font-[300]">
          exactly what this means and why its the future
        </p>
      </div>

      <div className="relative sm:top-[20rem] top-[10rem] max-w-full mx-auto flex flex-1 justify-around gap-[1rem] items-center flex-wrap">
        <div className="mt-5 mb-[3rem]">
          <div className="w-[fit-content] p-[1rem] mb-7">
            <img
              src={slideOne}
              alt=""
              className="sm:w-[100%] sm:h-[50vh] w-auto h-[30vh] object-contain"
            />
          </div>
          <div className="mt-[3rem]">
            <h3 className="text-[24px]">Product Sellers</h3>
            <ul className="px-[1rem] mt-5 leading-[2.4rem]">
                {resellers.map((seller) => (<li key={seller.id}><i className="fa-regular fa-plus mx-4 text-primaryColor text-[12px]"></i>{seller.text}</li>))}
            </ul>
          </div>
        </div>

        <div className="mt-5 mb-[3rem]">
          <div className="w-[fit-content] p-[1rem] mb-7">
            <img
              src={slideTwo}
              alt=""
              className="sm:w-[100%] sm:h-[50vh] w-auto h-[30vh] object-contain"
            />
          </div>
          <div className="mt-[3rem]">
          <h3 className="text-[24px]">Resellers</h3>
          <ul className="px-[1rem] mt-5 leading-[2.4rem]">
                {resellers.map((seller) => (<li key={seller.id}><i className="fa-regular fa-plus mx-4 text-primaryColor text-[12px]"></i>{seller.text}</li>))}
            </ul>  
        </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
