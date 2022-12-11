import user from "../../assets/user.png";
export default function PasswordForm() {
  return (
    <>
      <section className="container mx-auto">
        <div className="block px-[5rem] sm:p-10 relative ml-8 top-10 sm:top-[4rem]">
          <img
            src={user}
            alt=""
            className="sm:h-[30vh] h-40 max-w-full object-contain"
          />
          <h1 className="sm:text-[3rem] text-[28px] tracking-wide">
            Password Reset
          </h1>
        </div>

        <form action="" className="mt-[4rem]">
          <div className="mb-3 px-[4rem]">
            <label className="font-[400] mb-3 px-3 text-[1.4rem]">Email</label>
            <input
              type="text"
              className="border border-black rounded-full sm:w-[600px] py-3 px-10"
              placeholder="Type in your email addres"
            />
          </div>

          <div className="mt-6 px-[5rem]">
            <p className="mb-4 text-slate-400">Check your mail for a verification link.</p>
            <button
              type="submit"
              className="bg-primaryColor rounded-full sm:w-auto py-3 px-10 text-white font-[inherit] text-lg transition uppercase hover:bg-black"
            >
              Reset Password
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
