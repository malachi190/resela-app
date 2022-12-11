import chart from "../../assets/chart.png";
import shop from "../../assets/shop.png";
import user from "../../assets/user.png";


export default function Performance() {
  return (
    <>
      <section className={`container mx-auto relative top-[6rem] max-w-full`}>
        <div className="flex flex-auto justify-between items-center gap-4 px-[4rem] pb-10">
          <h2 className="text-xl">View your performance this month</h2>
          <select
            name=""
            id=""
            className="bg-white w-[15rem] rounded-lg focus:outline-none border border-black p-3"
          >
            <option className="text-[#333] bg-white">August 04</option>
          </select>
        </div>

        <div className="px-[3rem]">
          <img src={chart} alt="" className="max-w-full w-[80%]" />
        </div>

        <div className="float-right px-10 relative top-[8rem]">
          <h2 className="text-lg mb-5 tracking-wide sm:text-start text-center">Switch Accounts</h2>
          <div className="flex flex-auto sm:flex-row flex-col gap-6 items-center sm:justify-between justify-center">
            <button className="bg-gray-200 gap-6 inline-flex rounded-lg h-[5rem] mb-4 shadow-lg">
              <div className="bg-slate-300 p-5">
                <img
                  src={shop}
                  alt=""
                  className="object-contain w-[3rem] max-w-full"
                />
              </div>
              <span className="text-lg text-[#333] p-5">
                Seller
                Account
              </span>
            </button>

            <div className="px-2">
              <p className="text-lg"><i class="fa-solid fa-arrow-right"></i></p>
              <p className="text-lg"><i class="fa-solid fa-arrow-left"></i></p>
            </div>

            <button className="bg-primaryColor gap-6 inline-flex rounded-lg h-[5rem] mb-4 shadow-lg">
              <div className="bg-white p-4">
                <img
                  src={user}
                  alt=""
                  className="object-contain w-[3rem] max-w-full"
                />
              </div>
              <span className="text-lg text-[#fff] p-5">
                Reseller
                Account
              </span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
