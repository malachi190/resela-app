import React from "react";
import { Rating } from "../productplace/Rating";
import { FaHome } from "react-icons/fa";
import Iphone from "../../assets/popular/iphone.png";
import product from "../../constants/singleproduct";
import { BsHeartFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export const ProductPage = () => {
  const RatingData = [{ id: 1, rating: 3.5, numReviews: 8 }];

  return (
    <div className="container mx-auto relative top-8 mb-[10rem] ">
      <div className="w-full flex justify-between items-center md:flex-row flex-col">
        <div className="md:w-[25%] md:mb-0 mb-4">
          <div className="rounded-full w-32 bg-red-200 border-4 border-purple-300">
            <img
              src="images/hammed.png"
              alt="boy-image"
              className="rounded-full w-32"
            />
          </div>
          <h2 className="font-semibold">Hammed joshua</h2>
          <p>Frontend Development</p>
          {RatingData.map((product) => {
            return (
              <Rating value={product.rating} text={`${product.numReviews}`} />
            );
          })}
        </div>
        <div className="md:w-[80%]">
          <div className="w-full mb-6 lg:flex hidden   bg-white p-6  rounded-lg drop-shadow-lg justify-between items-center gap-2 ">
            <button className="px-12 py-3 rounded-lg bg-purple-600 text-white">
              Product of the Day{" "}
            </button>
            <p className="font-semibold">
              Find and recruit 20 Resellers, Each Paying N200,000 Monthly.
            </p>
            <button className="px-8 py-3 rounded-full text-white  bg-gray-600">
              Grab the deal
            </button>
          </div>
          <div className="sm:flex hidden gap-1 text-textGray items-center">
            <FaHome />
            <h6>
              <a href="#">All Products</a>
            </h6>
            <MdOutlineKeyboardArrowRight />
            <h6>
              <a href="#">Single Products</a>
            </h6>
            <MdOutlineKeyboardArrowRight />
            <h6>
              <a href="#">Iphone 13pro</a>
            </h6>
          </div>
        </div>
      </div>

      {/* Single Product */}
      <div className="w-4/5 bg-white shadow-xl rounded-lg relative top-[5rem] p-4 flex flex-1 sm:flex-nowrap flex-wrap justify-center items-center align-baseline gap-4">
        <div className="px-8 py-3">
          <div className="bg-slate-300 rounded-lg shadow-lg p-5">
            <img src={Iphone} alt="" className="w-3/5 h-1/2" />
          </div>
          <div className="flex flex-auto justify-start gap-3 items-center mt-4">
            <img
              src={Iphone}
              alt=""
              className={
                "w-[10%] h-1/2 max-w-full border border-bgColorOne border-solid"
              }
            />
            <img src={Iphone} alt="" className={"w-[10%] h-1/2 max-w-full"} />
            <img src={Iphone} alt="" className={"w-[10%] h-1/2 max-w-full"} />
            <img src={Iphone} alt="" className={"w-[10%] h-1/2 max-w-full"} />
          </div>
        </div>
        <div className="px-4 w-[70%]">
          {product.map((product) => (
            <>
              <div className="flex flex-1 justify-between align-baseline items-center">
                <h4 className="text-xl">{product.name}</h4>
                <BsHeartFill className="text-darkPurple cursor-pointer" />
              </div>
              <div className="mt-4">
                <p className="text-dark text-sm">
                  Brand: <a href="#">{product.brand}</a>
                </p>
                <p className="text-dark text-xs mt-4">
                  Description: {product.desc}
                </p>
              </div>
              <div className="py-2 mt-3">
                {RatingData.map((product) => {
                  return (
                    <Rating
                      value={product.rating}
                      text={`${product.numReviews}`}
                    />
                  );
                })} <a href="#" className="text-xs">1100 verified ratings</a>
              </div>
              <div className="py-2 mt-3">
                 <h2 className="text-xl">&#8358; {product.price.toLocaleString()}</h2>
                 <h4 className="text-sm line-through text-slate-400">&#8358; {product.oldPrice.toLocaleString()}</h4>
              </div>
              <div className="mt-3">
                {product.inStock ? <p className="text-sm">In-Stock</p> : <p className="text-sm">Out of Stock</p>}
              </div>
              <div className="mt-3">
                <button className="w-4/5 bg-primaryColor text-white rounded text-center flex justify-center items-center uppercase py-3 px-5 gap-3">
                    <FaShoppingCart/>
                    Add to cart
                </button>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};
