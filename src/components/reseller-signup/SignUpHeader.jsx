import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

export default function SignUpHeader() {
  return (
    <>
      <header
        className={`mx-auto bg-gradient-to-r from-primaryColor to-cyan-500 w-full overflow-hidden py-12 sm:px-5 m-0 h-auto header-responsive sm:max-w-full`}
      >
        <div className="flex flex-1 flex-row flex-wrap sm:flex-nowrap justify-between px-4 sm:gap-[50rem] gap-[5rem]">
          <div className="mb-5 ml-4">
            <NavLink to={"/"}>
              <img
                src={logo}
                alt="logo"
                className="w-[124px] h-[32px] scale-[1.25]"
              />
            </NavLink>
          </div>

          <div className="px-6 hidden sm:flex flex-1 gap-4 text-black items-center">
            <i class="fa-solid fa-phone sm:text-[24px] text-[20px] text-white"></i>
            <p>
              Call a{" "}
              <span className="text-white text-[20px]">RESELA</span>{" "}
              agent:
              <br />
              <p className='text-white'>(+234) - 070-695-503-72</p>
            </p>
          </div>
        </div>
      </header>
    </>
  );
}
