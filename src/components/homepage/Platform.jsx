import React from "react";
import { one, two, three, four, five } from "../../constants/links";
import Carousel from "./Carousel";

const Platform = () => {
  return (
    <section className="container mx-auto w-[auto]">
      <div className="relative text-center sm:top-[25rem] top-[15rem] block leading-[3rem] mb-[10rem]">
        <h1 className="sm:text-[2.5rem] text-[1.8rem] font-[400] capitalize">
          One big platform for everyone
        </h1>
        <p className="sm:text-[1.2rem] text-[0.9rem] font-[300]">
          All industry and market niches are represented here
        </p>
      </div>

      <div className="container mx-auto relative sm:top-[20rem] top-[10rem]">
        <div className="flex flex-1 mb-[4rem] flex-wrap justify-center items-center gap-[2rem]">
          <img src={one} alt="" className="object-contain w-[full] h-[40vh]" />
          <img
            src={three}
            alt=""
            className="object-contain w-[full] h-[40vh]"
          />
          <img src={four} alt="" className="object-contain w-[full] h-[40vh]" />
        </div>

        <div className="flex flex-1 flex-wrap justify-center items-center gap-[2rem]">
          <img src={two} alt="" className="object-contain w-[full] h-[40vh]" />
          <img src={five} alt="" className="object-contain w-[full] h-[40vh]" />
        </div>
      </div>
      
      <Carousel />
    </section>
  );
};

export default Platform;
