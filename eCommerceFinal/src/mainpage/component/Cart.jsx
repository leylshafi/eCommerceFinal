import React, { useState } from "react";
import CartCard from "./CartCard";
import { useEffect } from "react";

function Cart({ cartItems }) {
  const[total, setTotal]=useState(0)

  useEffect(() => {
    const totalPrice = cartItems.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price;
    }, 0);
    setTotal(totalPrice);
  }, [cartItems]);

  return (
    <>
      <h1 className="text-[42px] mt-5">CART</h1>
      {cartItems.length>0 ? (
        <>
        {cartItems.map((item, index) => (
        <CartCard item={item} />
      ))
      }
      <h5 className="font-[Raleway] text-[24px]">
        Quantity: <span className="font-bold">{cartItems.length}</span>
      </h5>
      <h5 className="font-[Raleway] text-[24px]">
        Total: <span className="font-bold">${total}</span>
      </h5>
      <button className="w-[279px] h-[43px] bg-[#5ECE7B] text-white border-0">
        ORDER
      </button>
        </>
      ):(
        <p className="col-span-3 text-center font-bold">
                  No Products Found
                </p>
      )}
      
    </>
  );
}

export default Cart;
