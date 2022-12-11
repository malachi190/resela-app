import award from "../../assets/Vector.png";
import rating from "../../assets/ratings.png";
import box from "../../assets/boxes.png";
import table from "../../assets/products-table.png";

export default function Actions() {
  return (
    <>
      <div className="block relative top-[4rem]">
        <div className="bg-white flex flex-col gap-6 sm:flex-row sm:inline-flex rounded-lg shadow-xl w-[auto] p-5">
          <div className="bg-primaryColor p-3 rounded-xl flex gap-3 w-[fit-content]">
            <img src={award} alt="" className="object-contain px-2 w-10" />
            <p className="text-white">Product Of The Day</p>
          </div>
          <div className="px-4 flex gap-4 sm:flex-row flex-col">
            <span className="text-[18px]">
              Find and recruit 20 resellers, Each paying N200,000 monthly
            </span>
            <a
              href="#"
              className="bg-slate-600 text-white rounded-full sm:w-auto w-[13rem] text-center p-3"
            >
              Grab the deal
            </a>
          </div>
        </div>
        <div className="relative top-5 sm:flex hidden gap-1 items-baseline ml-10 ">
          <i className="fa-solid fa-house text-slate-400"></i>
          <span className="px-3 text-slate-400">Manage your account</span>
          <i className="fa-solid fa-angle-right"></i>
          <a href="" className="text-primaryColor">
            Manage Products
          </a>
        </div>

        <h2 className="text-[2rem] ml-[1rem] relative top-[3rem] px-[2rem]">
          Manage Products
        </h2>

        <div className="relative top-5 flex flex-auto justify-between gap-[1rem] items-center min-w-max sm:flex-row flex-col px-[2rem] pb-20">
          <div className="block p-3">
            <img src={rating} alt="" className="object-contain max-w-full" />
          </div>
          <div className="block p-3">
            <img src={box} alt="" className="object-contain max-w-full" />
          </div>
        </div>

        <div className="relative top-[5rem] max-w-full px-5 mx-auto pb-[10rem]">
          <div className="px-5 float-right relative top-[1.3rem] sm:right-[10rem] flex gap-6 flex-auto flex-nowrap items-baseline">
              <a href="#" className="sm:text-[1.8rem] bg-primaryColor sm:px-8 px-4 py-2 text-white rounded-[90%]">+</a>
              <h3 className="text-[1rem] font-[500]">Add New Product</h3>
          </div>
          <div className="px-5">
            <img
              src={table}
              alt=""
              className="object-cover max-w-full w-[80%] h-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}
