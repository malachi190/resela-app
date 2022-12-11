import React from "react";

const CardSection = () => {
  return (
    <section className="container mx-auto relative top-[20rem] px-5 max-w-full bg-[#c5c5c5] sm:h-[90vh] h-auto pb-[3rem]">
      <div className="w-auto px-8 text-center relative top-10">
        <h1 className="text-[2.5rem] break-before-all break-words leading-normal font-normal">
          Powerful Integrations
        </h1>
        <p className="text-[20px] mb-[2.4rem]">
          You will need to verify your phone number before accsessing
        </p>
      </div>

      <div className="flex flex-1 flex-col sm:flex-row flex-wrap justify-center items-center gap-10 w-full relative top-[5rem]">
        <div className="bg-white w-[250px] h-[300px] rounded-lg text-start p-5">
          <div className="mt-[7rem]">
            <h3 className="text-[1.8rem]">Bristol</h3>
            <p className="text-[14px]">
              Comets are a big source of metaroids because of the nature of
              those long tails. A large amount of dust.
            </p>
          </div>
        </div>

        <div className="bg-white w-[250px] h-[300px] rounded-lg text-start p-5">
          <div className="mt-[7rem]">
            <h3 className="text-[1.8rem]">Budapest</h3>
            <p className="text-[14px]">
              Comets are a big source of metaroids because of the nature of
              those long tails. A large amount of dust.
            </p>
          </div>
        </div>

        <div className="bg-white w-[250px] h-[300px] rounded-lg text-start p-5">
          <div className="mt-[7rem]">
            <h3 className="text-[1.8rem]">Minsk</h3>
            <p className="text-[14px]">
              Comets are a big source of metaroids because of the nature of
              those long tails. A large amount of dust.
            </p>
          </div>
        </div>

        <div className="bg-white w-[250px] h-[300px] rounded-lg text-start p-5">
          <div className="mt-[7rem]">
            <h3 className="text-[1.8rem]">Bogota</h3>
            <p className="text-[14px]">
              Comets are a big source of metaroids because of the nature of
              those long tails. A large amount of dust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
