import React from "react";
import progress from "../../assets/progress.png";

const Progress = () => {
  return (
    <section className="container mx-auto relative top-10 px-5 max-w-full">
      <div className="flex flex-1 flex-col sm:flex-row flex-wrap justify-center items-center gap-10 w-full">
        <div className="w-auto text-justify px-8">
          <h1 className="text-[3rem] break-before-all break-words leading-[4rem] font-normal">
            Powerful <br className="sm:block hidden" /> Integrations to help <br className="sm:block hidden" /> you make more sales
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

        <div className="w-auto px-8">
          <img
            src={progress}
            alt="progress"
            className="object-contain max-w-full h-[70vh]"
          />
        </div>
      </div>
    </section>
  );
};

export default Progress;
