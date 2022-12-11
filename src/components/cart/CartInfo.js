import React, { useState } from "react";
import { cart } from "../../constants/cart_product_info";
import { MdShoppingCart } from "react-icons/md";
import { BsHeart } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";

const CartInfo = () => {
  const [quantity, setQuantity] = useState(0);
  const [fav, setFav] = useState(cart.map((item) => item.favourite));

  return (
    <div className="container mx-auto max-w-full overflow-x-hidden relative top-[3rem] mb-[8rem]">
      <div className="flex flex-auto justify-center items-center align-baseline gap-x-10">
        <div className="bg-slate-200 rounded-2xl shadow-xl w-4/5 block p-10 pb-20">
          {cart.length > 0 ? (
            cart.map((items) => (
              <div className="flex flex-1 lg:flex-nowrap flex-wrap justify-between items-center gap-10 px-5 py-3 mb-10">
                <div className="mx-4">
                  <img
                    src={items.productImage}
                    alt=""
                    className="max-w-max content-center float-left"
                  />
                </div>
                <div className="mx-4">
                  <ul
                    className="flex flex-col justify-center text-start list-none gap-5"
                    key={items.productId}
                  >
                    <li className="list-item">
                     Product name: {items.productName} 
                      {fav ? (
                        <BsHeart
                          className="mx-10 cursor-pointer
                             text-primaryColor inline"
                          onClick={() => setFav((fav) => !fav)}
                        />
                      ) : (
                        <BsHeartFill
                          className="mx-10 cursor-pointer
                             text-primaryColor inline"
                          onClick={() => setFav((fav) => !fav)}
                        />
                      )}
                    </li>
                    <li className="list-item">
                    Colors:{" "}
                      {items.productSpecs.color.map((color) => color + " ")}
                      <small className="block mt-3">
                        Brand: {items.productBrand}
                      </small>
                    </li>
                    <li className="list-item">
                      Price: &#8358; {items.productPrice.toLocaleString()}
                      <small className="block line-through text-slate-500 text-sm">
                        &#8358; {items.productOldPrice.toLocaleString()}
                      </small>
                    </li>
                    <li className="list-item">
                      {items.inStock ? "In Stock" : "Out of Stock"}
                    </li>
                    <li className="list-item">
                      <p className="mb-5 text-center">Quantity</p>
                      <div className="flex flex-1 justify-between gap-5 sm:flex-wrap">
                        <button
                          className="bg-primaryColor px-5 text-white text-xl rounded-xl"
                          onClick={() => setQuantity((quantity) => Math.max(--quantity, 0))}
                        >
                          -
                        </button>
                        <p className="text-lg">
                          {quantity}
                        </p>
                        <button
                          className="bg-primaryColor px-5 text-white text-xl rounded-xl"
                          onClick={() => setQuantity((quantity) => ++quantity)}
                        >
                          +
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            ))
          ) : (
            <div className="block relative top-[5rem] text-center place-content-center z-10">
              <MdShoppingCart className="text-primaryColor text-center m-auto text-[2.8rem]" />
              <p className="text-lg mt-3 animate-pulse">Your cart is empty!</p>
              <small className="block mt-2">
                Browse our categories and shop your preffered products
              </small>
              <button className="bg-primaryColor px-10 py-3 rounded text-base text-white uppercase mt-10">
                Browse Products
              </button>
            </div>
          )}
          <div className="relative top-10 w-1/5 m-auto">
            <button className="bg-primaryColor text-white text-lg text-center lg:px-20 py-3 px-10 rounded-md uppercase transition-shadow hover:shadow-lg m-auto">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartInfo;
