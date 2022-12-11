import dude from "../../assets/man.png"
import Message from "../reseller-dashboard/Message";

export default function SProfile() {
  return (
    <>
      <section className={`container mx-auto relative top-[4rem] max-w-full overflow-hidden flex flex-auto justify-between items-center sm:flex-row flex-col`}>
        <div className="px-10">
          <h1 className="sm:text-[3rem] text-3xl font-[500] sm:ml-10 tracking-wide ml-[2rem] sm:text-start text-center">Seller Account</h1>

          <div className="p-6 min-w-max relative flex flex-1 sm:flex-row flex-col items-center">
            <div className="mt-5 px-6">
              <img
                src={dude}
                alt=""
                className="rounded-full object-contain w-auto"
              />
            </div>
            <div className="px-4">
              <div className="px-4 mt-4 leading-normal flex gap-3 items-baseline text-center">
                <p className="sm:text-[23px] text-18px font-[400] mb-6">
                  Hammed Joshua
                </p>
                <i className="fa-sharp fa-solid fa-circle-check text-green-500"></i>
              </div>
              <div className="px-4 -mt-4 leading-8">
                <p className="text-[15px]">Front Technologies</p>
                <i className="fa-solid fa-star px-1 text-yellow-300"></i>
                <i className="fa-solid fa-star px-1 text-slate-300"></i>
                <i className="fa-solid fa-star px-1 text-slate-300"></i>
                <i className="fa-solid fa-star px-1 text-slate-300"></i>
                <i className="fa-solid fa-star px-1 text-slate-300"></i>
              </div>
            </div>
          </div>
        </div>
        <Message />
      </section>
    </>
  );
}
