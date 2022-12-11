import React from 'react'
import heroImage from '../../assets/hero-image.png';

const Hero = () => {
  return (
    <section style={{backgroundImage: `url(${heroImage})`}} className='px-5 py-10 w-[auto] h-[85vh] mt-0 bg-cover bg-no-repeat object-contain section mx-auto sm:w-full overflow-hidden'>
      <div className='relative top-[7rem] max-w-max mx-auto'>
          <h1 className='uppercase text-[4.1rem] sm:text-[inherit] text-center leading-[6rem] text-white z-10 opacity-[1] font-[300] sm:font-[500]' style={{fontFamily: `Helvetica`}}>over <span className='text-green-500'>10,000</span> active resellers are ready to sell our products<span className='text-cyan-500'>.</span></h1>
      </div>
    </section>
  )
}

export default Hero
