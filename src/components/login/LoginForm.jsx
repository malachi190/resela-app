import Images from "./Images";
import { Link } from "react-router-dom";
export default function LoginForm() {
  return (
    <>
      <section className="container mx-auto max-w-full overflow-hidden flex flex-1 justify-center items-center gap-3">
        <div>
          <div className="container mx-auto block p-8 lg:p-10 relative top-10 lg:top-[4rem] sm:ml-10 ml-20">
            <h1 className="sm:text-[3rem] text-[28px] tracking-wider ">
              Welcome Back!
            </h1>
            <p className="sm:text-[1.2rem] text-[15px]">
              Log in to your RESELA account
            </p>
          </div>

          <form action="" className="mt-[4rem]">
            <div className="px-[5rem] mb-10 max-w-min">
              <input
                type="text"
                className="border border-black rounded-full sm:w-[400px] py-3 px-10"
                placeholder="+234 Phone Number | Email Address"
              />
            </div>

            <div className="px-[5rem] mb-10 max-w-min">
              <input
                type="text"
                className="border border-black rounded-full sm:w-[400px] py-3 px-10"
                placeholder="Password"
              />
            </div>

            <div className="px-[5rem] mb-3">
              <p className="text-[15px] break-before-auto break-words">
                A 6 digit OTP would be sent to your email and phone number{" "}
                <br /> for verification purposes
              </p>
            </div>

            <div className="px-[5rem] mb-3">
              <button
                type="submit"
                className="bg-primaryColor rounded-full sm:w-[400px] py-3 px-10 text-white font-[inherit] text-lg transition uppercase hover:bg-black"
              >
                Login
              </button>
            </div>

            <div className="px-[5rem] mb-3">
              <Link to={'/password-reset'} className="text-[13px] text-primaryColor block">
                Forgot your password?
              </Link>
              <small className="text-[13px] block">
                Dont have an account?{" "}
                <Link  className="text-primaryColor" to={'/sign-up'}>Start here</Link>
              </small>
            </div>
          </form>
        </div>
        <Images />
      </section>
    </>
  );
}
