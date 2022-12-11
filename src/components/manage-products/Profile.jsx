import dude from '../../assets/man.png'

export default function Profile(){
    return (
        <>
         <div className='block p-6 min-w-max relative sm:-top-[35rem]'>
            <div className='mt-10 px-6'>
                <img src={dude} alt="" className='rounded-full object-contain w-auto'/>
            </div>
            <div className='px-4 mt-4 leading-normal flex gap-3 items-baseline text-center'>
                <p className='sm:text-[23px] text-18px font-[400] mb-6'>Hammed Joshua</p>
                <i className="fa-sharp fa-solid fa-circle-check text-green-500"></i>
            </div>
            <div className='px-4 -mt-4 leading-10'>
                <p className='text-[15px]'>Front Technologies</p>
                <i className="fa-solid fa-star px-1 text-yellow-300"></i>
                <i className="fa-solid fa-star px-1 text-slate-300"></i>
                <i className="fa-solid fa-star px-1 text-slate-300"></i>
                <i className="fa-solid fa-star px-1 text-slate-300"></i>
                <i className="fa-solid fa-star px-1 text-slate-300"></i>
            </div>
         </div>
        </>
    )
}