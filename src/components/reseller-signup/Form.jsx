import PrivacyPolicy from "./PrivacyPolicy";
export default function Form() {
  return (
    <>
      <form
        action=""
        className="relative top-[3rem] left-0 overflow-hidden max-w-min"
      >
        <div className="px-[5rem] mb-3 max-w-min">
          <label className="font-[400] block mb-3 px-3 text-[1.2rem]">
            Full Legal Name
          </label>
          <input
            type="text"
            className="border border-black rounded-full sm:w-[800px] py-3 px-10"
            placeholder="Enter name"
          />
        </div>

        <div className="px-[5rem] max-w-min mb-3 flex flex-wrap sm:flex-nowrap gap-6 items-center">
          <div>
            <label className="font-[400] block mb-3 px-3 text-[1.2rem]">
              Phone Number
            </label>
            <input
              type="text"
              className="border border-black rounded-full sm:w-[400px] py-3 px-10"
              placeholder="+234 | "
            />
          </div>

          <div>
            <label className="font-[400] block mb-3 px-3 text-[1.2rem]">
              Email Address
            </label>
            <input
              type="text"
              className="border border-black rounded-full sm:w-[400px] py-3 px-10"
              placeholder="example@yahoo.com"
            />
          </div>
        </div>

        <div className="px-[5rem] max-w-min mb-3 block">
          <div className="mb-3">
            <label className="font-[400] block mb-3 px-3 text-[1.2rem]">
              Password
            </label>
            <input
              type="text"
              className="border border-black rounded-full sm:w-[800px] py-3 px-10"
              placeholder="Type in your password"
            />
          </div>

          <div>
            <input
              type="text"
              className="border border-black rounded-full sm:w-[800px] py-3 px-10"
              placeholder="Confirm Password"
            />
          </div>
        </div>
        <PrivacyPolicy />
      </form>
    </>
  );
}
