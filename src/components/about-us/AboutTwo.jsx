import React from 'react'
import aboutTwo from '../../assets/about-two.png'

const AboutTwo = () => {
  return (
    <section className='container mx-auto relative top-10 px-5 max-w-full sm:h-[80vh] h-auto pb-[5rem] bg-[#c7c7c7]'>
      <div className='flex flex-1 flex-col sm:flex-row flex-wrap justify-center items-center gap-[8rem] p-[1rem] relative top-[5rem]'>
      <div className="w-auto px-10">
          <img
            src={aboutTwo}
            alt=""
            className="object-contain max-w-full h-[50vh]"
          />
        </div>

        <div className='px-4 w-auto'>
            <h1 className='text-[2.8rem]'>The RESELA Story</h1>
            <p className='text-[1rem] w-[50%] leading-[2rem] mb-[3rem]'>Anytime your product gets sold, the resellers commision will instantly be deposited.</p>
            <a
            href="#"
            className="bg-primaryColor text-white text-[18px] text-center px-12 py-3 rounded-3xl"
          >
            Start Selling
          </a>
        </div>
      </div>
    </section>
  )
}

export default AboutTwo
