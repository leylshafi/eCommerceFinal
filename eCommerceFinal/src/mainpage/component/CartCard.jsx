import React from "react";
import { useState } from "react";
function CartCard({item}) {
  console.log(item);
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
          <h1 className="font-[Raleway] text-[30px] font-semibold">{item.brand}</h1>
          <h2 className="font-[Raleway] text-[30px] font-normal">
          {item.title}
          </h2>
          <h3 className="font-[Raleway] text-[24px] font-bold">${item.price}</h3>
          {item.size.length>0 && (
                   <div className="mt-10">
                    <label className="text-[18px] font-bold">SIZE:</label>
                    <div className="flex">
                     {item.size.map((size, index) => (
                       <div
                         key={index}
                         className="flex w-[63px] h-[45px] border border-black justify-center cursor-pointer items-center m-1 hover:bg-black hover:text-white"
                       >
                         <p>{size}</p>
                       </div>
                     ))}
                   </div>
                 </div>
                  )}
          <label className="text-[18px] font-bold">COLOR:</label>
          <div className="flex">
          {item.colors.map((color, index) => (
                    <div
                      key={index}
                      className="flex w-[32px] h-[32px]  m-1 border border-zinc-500"
                      style={{
                        backgroundColor: color,
                        
                          
                      }}
                    ></div>
                  ))}
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
          <img src={item.gallery[0]} className="right my-3 w-[250px]"/>
        </div>
      </div>
    </>
  );
}

export default CartCard;
