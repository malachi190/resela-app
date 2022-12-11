import React from 'react'
import graph from '../../assets/graph.png'

const DetailedAnalysis = () => {
  return (
    <section className="container mx-auto relative top-[15rem] px-5 max-w-full">
       <div className="flex flex-1 flex-col sm:flex-row flex-wrap justify-center items-center gap-10 w-full">
        <div className="w-auto text-justify px-8">
          <h1 className="text-[2.5rem] break-before-all break-words leading-[4rem] font-normal">
            Detailed <br />
            Analysis
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
            src={graph}
            alt="graph"
            className="object-contain max-w-full h-[70vh]"
          />
        </div>
      </div>
    </section>
  )
}

export default DetailedAnalysis
