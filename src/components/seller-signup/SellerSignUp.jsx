import market from '../../assets/market.png'
import Form from './SellerForm'

export default function SignUpForm(){
    return (
        <>
        <section className='container mx-auto max-w-full relative top-10'>
            <div className='px-[5rem] mt-10'>
                <h1 className='text-[30px] sm:text-[3rem] font-[400] break-words capitalize'>Its time to join the market forces!</h1>
                <p className="text-[17px] sm:text-[22px]">Make more sales by reconnecting with thousands of RESELLERS in few minutes</p>

                <div className='mt-[4rem]'>
                <img src={market} alt="" className='object-coontain max-w-full h-[15vh]'/>
                </div> 
            </div>
            <Form />
        </section>
        </>
    )
}