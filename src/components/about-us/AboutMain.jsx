import React from 'react'
import aboutImg from '../../assets/about.png'

const AboutMain = () => {
  return (
    <section className='container mx-auto relative top-10 px-5 max-w-full sm:h-[80vh] h-auto'>
      <div className='flex flex-1 flex-col sm:flex-row flex-wrap justify-center items-center gap-[2rem] p-[1rem]'>
        <div className='px-4 w-auto'>
            <h1 className='text-[2.8rem]'>The RESELA Story</h1>
            <p className='text-[1rem] w-[50%] leading-[2rem] mb-[3rem]'>Anytime your product gets sold, the resellers commision will instantly be deposited.</p>
            <a
            href="#"
            className="bg-primaryColor text-white text-[18px] text-center px-12 py-3 rounded-3xl transition hover:translate-y-6"
          >
            Start Selling
          </a>
        </div>
        <div className="w-auto px-8">
          <img
            src={aboutImg}
            alt=""
            className="object-contain max-w-full h-[50vh]"
          />
        </div>
      </div>
    </section>
  )
}

export default AboutMain
