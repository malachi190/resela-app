import { Link } from "react-router-dom"
export default function PrivacyPolicy(){
    return (
        <>
        <div className="mt-10 px-[5.5rem] text-start">
            <p>Resela collects and uses data in accordance to our <a href="#" className="capitalize underline">privacy policy</a></p>
            <small className="block text-[10px]">By creating an account you are agreeing to our <a href="#" className="text-primaryColor underline">Terms & Conditions</a></small>

            <div className="mt-4 inline-flex gap-3">
              <input type="checkbox" name="" id="" />
                <p className="text-[18px]">
                    I have have read and agreed to all <span className="text-primaryColor">RESELA Agreements, Policies and Disclaimers.</span> 
                </p>
            </div>
        </div>
        <div className="mt-5 px-[5rem]">
            <button type="submit" className="bg-primaryColor rounded-full sm:w-[400px] py-3 px-10 text-white font-[inherit] text-lg uppercase transition hover:bg-black">Create Account</button>
        </div>

        <div className="mt-5 px-[5rem]">
            <p className="text-[13px]">Already have an account? <Link to={'/login'} className="text-primaryColor">Log in</Link>
            </p>
            <p className="text-[13px]">Not a Reseller? <Link to={'/seller-signup'} className="text-primaryColor">
                Create a SELLER account</Link>
            </p>
        </div>
        </>
    )
}