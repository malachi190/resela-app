import React from "react";
import table from '../../assets/table.png'

const Table = () => {
  return (
    <section className="container mx-auto relative top-[10rem] px-5 max-w-full bg-[#f7f7f7] sm:h-[70vh] h-auto pb-[2rem]">
      <div className="flex flex-1 flex-col sm:flex-row flex-wrap justify-center items-center gap-10 w-full m-auto">
        <div className="w-auto px-8">
          <img
            src={table}
            alt="table"
            className="object-contain max-w-full w-full sm:w-[30vw] h-[60vh]"
          />
        </div>

        <div className="text-justify px-8 w-auto sm:mt-0 -mt-[4rem]">
          <h1 className="text-[1.8rem] break-before-all break-words leading-[4rem] font-normal">
          Access to detailed Database for account purposes
          </h1>
          <p className="text-[20px] mt-8 mb-[2.4rem]">
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
      </div>
    </section>
  );
};

export default Table;
