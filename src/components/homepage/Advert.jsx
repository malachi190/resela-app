import React from 'react'
import advert from '../../assets/advert.png'

const Advert = () => {
  return (
    <section className="container mx-auto w-[auto]">
      <div className='relative text-center top-[10rem] block leading-[3rem] mb-[10rem]'>
        <h1 className='text-[2rem] font-[400] capitalize break-words sm:break-before-auto sm:text-[2.5rem]'>Zero Cost on Advertisement</h1>
        <p className='sm:text-[1.3rem] text-[0.9rem] font-[300]'>Spend less on digital marketing and social media advertisements</p>
      </div>
      <div className='relative top-[8rem] flex flex-row flex-1 sm:justify-around justify-center items-center gap-[1rem] sm:flex-nowrap flex-wrap w-full'>
        <div className='sm:w-[50%] w-auto ml-[5rem]'>
            <img src={advert} alt="advertisement" className='object-contain sm:w-[65%] w-[100%] h-[auto] sm:ml-[5rem] -ml-[2rem]'/>
        </div>
        <div className='p-[3rem] w-auto sm:w-[50%]'>
        <p className="text-[17px] leading-[2.5rem] w-[60%] translate-y-[-2.8rem]">
            Anytime your products gets sold,the resellers commision will
            instantly be deposited into the resellers platform account, in case
            of refunds{" "}
            <span className="text-primaryColor uppercase cursor-pointer">
              resella
            </span>{" "}
            will automatically refund.
          </p>
          <a
            href="#"
            className="text-[#333] px-[3rem] py-3 rounded-full border-[2px] font-[inherit] text-[18px] border-primaryColor transition hover:translate-y-[1rem]"
          >
            Start For Free
          </a>
        </div>
      </div>
    </section>
  )
}

export default Advert
