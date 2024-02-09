import React, { useState } from 'react';

function Product({ brand, price, gallery }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flex flex-col w-[386px] h-[444px] m-3 hover:shadow shadow-slate-400 transition duration-100 ease-in-out ${
        isHovered ? 'relative' : ''
      } my-5`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <img
          src="\src\assets\CircleIcon.svg"
          alt="Add to Cart"
          className={`absolute bottom-32 right-0 p-2 hover:scale-110 transition-transform duration-300 cursor-pointer`}
        />
      )}

      <img src={gallery} alt="" className="w-[354px] h-[330px]" />

      <div>
        <h3>{brand}</h3>
        <p>${price}</p>
      </div>
    </div>
  );
}

export default Product;
