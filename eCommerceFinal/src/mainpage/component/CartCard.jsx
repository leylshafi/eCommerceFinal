import React from "react";
import { useState } from "react";
function CartCard() {
    const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  return (
    <>
      <div className="border border-x-0 border-y-slate-300 py-4 flex justify-between flex-col sm:flex-row">
        <div>
          <h1 className="font-[Raleway] text-[30px] font-semibold">Apollo</h1>
          <h2 className="font-[Raleway] text-[30px] font-normal">
            Running Short
          </h2>
          <h3 className="font-[Raleway] text-[24px] font-bold">$50.00</h3>
          <label className="text-[18px] font-bold">SIZE:</label>
          <div className="flex">
            <div className="flex w-[63px] h-[45px] border border-black justify-center cursor-pointer items-center m-1 hover:bg-black hover:text-white">
              XS
            </div>
            <div className="flex w-[63px] h-[45px] border border-black justify-center items-center m-1 cursor-pointer  hover:bg-black hover:text-white">
              S
            </div>
            <div className="flex w-[63px] h-[45px] border border-black justify-center items-center m-1 cursor-pointer  hover:bg-black hover:text-white">
              M
            </div>
            <div className="flex w-[63px] h-[45px] border border-black justify-center items-center m-1 cursor-pointer  hover:bg-black hover:text-white">
              L
            </div>
          </div>

          <label className="text-[18px] font-bold">COLOR:</label>
          <div className="flex">
            <div className="flex w-[32px] h-[32px] bg-[#D3D2D5] m-1"></div>
            <div className="flex w-[32px] h-[32px] bg-[#2B2B2B] m-1"></div>
            <div className="flex w-[32px] h-[32px] bg-[#0F6450] m-1"></div>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col right">
          <div className="flex sm:flex-col flex-row justify-between h-full  sm:mx-5 left">
            <div  onClick={incrementQuantity} className="flex w-16 h-16 border border-black items-center justify-center text-3xl hover:bg-black hover:text-white cursor-pointer">
              +
            </div>
            <div className=" flex text-center justify-center items-center">{quantity}</div>
            <div onClick={decrementQuantity} className="flex w-16 h-16 border border-black items-center justify-center text-3xl hover:bg-black hover:text-white cursor-pointer">
              -
            </div>
          </div>
          <img src="\src\assets\Image.svg" className="right my-3"/>
        </div>
      </div>
    </>
  );
}

export default CartCard;
