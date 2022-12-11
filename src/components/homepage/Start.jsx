import React from 'react'
import brands from '../../assets/brands.png'

const Start = ()=> {
  return (
    <section className='box-border mx-auto h-[85vh] w-[auto] sm:w-full overflow-hidden'>
      <div className='relative top-[3rem] px-[2rem] ml-[4rem] flex flex-wrap gap-6 sm:gap-10'>
        <h1 className='text-[2.2rem] font-[400] text-start break-before-all w-[80%]'>Start making more sales through active resellers at very low commission rate</h1>
        <a href="#" className='bg-primaryColor text-white px-[3rem] py-3 rounded-full transition float-right mr-[10rem] hover:scale-[1.1] hover:bg-[#111]'>Start For Free</a>
      </div>

      <div className='mt-[5rem] w-full block sm:mt-[5rem]'>
        <img src={brands} alt="brands" className='object-contain w-full max-w-[100%] h-[30vh]'/>
      </div>
    </section>
  )
}

export default Start
