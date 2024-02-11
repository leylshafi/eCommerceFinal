import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Product({id, brand, price, gallery,size, colors, setCartItems,cartItems }) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleDoubleClick = () => {
    console.log("double clicked");
    navigate(`/product/${id}`); 
  };

  const handleAddToCart = () => {
    setCartItems(prevItems => [...prevItems, { id, brand, price, gallery, size ,colors}]); 
    console.log(cartItems);
  };

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
        onClick={()=>{
          handleAddToCart()
          navigate("/mainpage")
        }}
          src="\src\assets\CircleIcon.svg"
          alt="Add to Cart"
          className={`absolute bottom-32 right-0 p-2 hover:scale-110 transition-transform duration-300 cursor-pointer`}
        />
      )}

      <img  onDoubleClick={handleDoubleClick} src={gallery} alt="" className="w-[354px] h-[330px]" />

      <div>
        <button>{brand}</button>
        <p>${price}</p>
      </div>
    </div>
  );
}

export default Product;
