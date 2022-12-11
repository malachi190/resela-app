import shoes from '../../assets/shoes.png';
import lotion from '../../assets/lotion.png';
import box from '../../assets/emptybox.png';
import user from '../../assets/user.png'
export default function Images(){
    return (
        <>
        <div className='sm:flex hidden flex-col flex-auto gap-11 justify-between max-w-xl'>
            <img src={box} alt=""  className='h-[20vh] max-w-full object-contain relative left-10'/>
            <img src={lotion} alt="" className='h-[20vh] max-w-full object-contain relative -left-10 -top-6'/>
            <img src={shoes} alt="" className='h-[20vh] max-w-full object-contain relative left-10 -top-6'/>
            <img src={user} alt="" className='h-[20vh] max-w-full object-contain'/>
        </div>
        </>
    )
}