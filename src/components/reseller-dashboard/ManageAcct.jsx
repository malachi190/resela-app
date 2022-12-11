import shop from "../../assets/shop.png";
import box from "../../assets/box.png";
import cards from "../../assets/cards.png";
import magnify from "../../assets/magnify.png";

export default function ManageAcct() {
  return (
    <>
      <section
        className={`container mx-auto relative top-[6rem] max-w-full overflow-hidden`}
      >
        <h2 className="text-2xl sm:text-start text-center px-[6rem]">Manage your Account</h2>

        <div className="container mx-auto flex flex-auto sm:justify-between items-center sm:flex-row flex-col mt-[4rem] pb-36 sm:gap-0 gap-[4rem] justify-center align-middle">
          <div className="px-10">
            <div
              className="w-[220px] h-[180px] border border-primaryColor border-solid rounded-lg"
              style={{ borderWidth: "3px" }}
            >
              <img
                src={shop}
                alt=""
                className="object-contain max-w-full w-[6rem] h-auto mt-10 ml-16"
              />
              <p className="text-xl rounded-full bg-[#f4f4f4] shadow-2xl w-10 text-center mx-auto mt-4">
                18
              </p>
            </div>
            <button
              className="bg-primaryColor text-white text-lg text-center relative top-10 ml-8 lg:w-fit px-6 py-2 rounded"
            >
              View Shops
            </button>
          </div>

          <div className="px-10">
            <div
              className="w-[220px] h-[180px] border border-primaryColor border-solid rounded-lg"
              style={{ borderWidth: "3px" }}
            >
              <img
                src={box}
                alt=""
                className="object-contain max-w-full w-[6rem] h-auto mt-10 ml-16"
              />
              <p className="text-xl rounded-full bg-[#f4f4f4] shadow-2xl w-10 text-center mx-auto mt-4">
                35
              </p>
            </div>

            <button
              className="bg-primaryColor text-white text-lg text-center relative top-10 ml-3 w-fit px-6 py-2 rounded"
            >
              Manage Products
            </button>
          </div>

          <div className="px-10">
            <div
              className="w-[220px] h-[180px] border border-primaryColor border-solid rounded-lg"
              style={{ borderWidth: "3px" }}
            >
              <img
                src={cards}
                alt=""
                className="object-contain max-w-full w-[6rem] h-auto mt-6 ml-16"
              />
              <p className="text-xl rounded-full bg-[#f4f4f4] shadow-2xl w-10 text-center mx-auto mt-2">
                &#8358;
              </p>
            </div>
            <button
              className="bg-primaryColor text-white text-lg text-center relative top-10 ml-8 w-fit px-6 py-2 rounded"
            >
              View Payments
            </button>
          </div>

          <div className="px-10">
            <img
              src={magnify}
              alt=""
              className="object-contain max-w-full w-[6rem] h-auto mt-10 ml-16"
            />

            <button
              
              className="bg-primaryColor text-white text-lg text-center relative top-10 ml-8 lg:w-fit px-6 py-2 rounded"
            >
              Search More Shops
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
