import React, { useState, useContext, useEffect } from "react";
import Context from "../../ContextWrapper";
import { useNavigate } from "react-router-dom";
function Navigation({ goToMainType, cartItems }) {
  const navigate = useNavigate()
  const { categories, getCategories, setCurrentCategory, filterProducts } =
    useContext(Context);

  useEffect(() => {
    getCategories();
  }, []);


  return (
    <nav className="flex justify-between items-center ">
      <div>
        <ul className="flex space-x-4">
          {categories.map((c) => (
            <li className="flex flex-col  text-center w-[70px] h-[56px]">
              <button
                onClick={() => {
                  setCurrentCategory(c);
                  filterProducts(c);
                  goToMainType();
                }}
                className="py-6 border-b-2 mt-3 border-transparent hover:text-green-400 hover:border-green-400"
              >
                {c}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <img
        className=""
        src="\src\assets\a-logo.svg"
        onClick={() => {
          setCurrentCategory("All");
          filterProducts("All");
          goToMainType();
        }}
      />
      <div className="flex">
        <select>
          <option>₼</option>
          <option>$</option>
        </select>
        <div className="relative" onClick={()=>{navigate("/cart")}}>
          <img className="" src="\src\assets\Empty Cart.svg" alt="Cart" />
          <span className="absolute bottom-3 left-4 bg-black text-white rounded-full w-4 h-4 flex justify-center items-center text-xs">
          {cartItems.length}
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
