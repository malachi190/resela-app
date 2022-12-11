import box from '../../assets/box.png'
import Form from './Form'

export default function SignUpForm(){
    return (
        <>
        <section className='container mx-auto max-w-full relative top-10'>
            <div className='px-[5rem] mt-10'>
                <h1 className='text-[30px] sm:text-[3rem] font-[400] break-words capitalize'>start selling high performing products!</h1>
                <p className="text-[17px] sm:text-[22px]">Create a RESELA account in a few minutes</p>

                <div className='mt-[4rem]'>
                <img src={box} alt="" className='object-coontain max-w-full h-[15vh]'/>
                </div> 
            </div>
            <Form />
        </section>
        </>
    )
}