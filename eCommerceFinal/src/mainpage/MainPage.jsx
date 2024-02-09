import React, { useState, useEffect, useContext, useReducer } from "react";
import Navigation from "./component/Navigation";
import Product from "./component/Product";
import Context from "../ContextWrapper";

const reducer = (state, action) => {
  switch (action.type) {
    case "main":
      return {type:(state.type="main")}
    case "detail":
      return {type:(state.type="detail")}
    case '':
      return {type:(state.type="")}
  }
}

function MainPage({type}) {
  const { currentCategory, filteredProducts, getProducts, products } = useContext(Context)
  const [state, dispatch] = useReducer(reducer, {type:""})
    useEffect(() => {
        getProducts();
    }, [])
  return (
    <>
      <div className="px-[101px]">
        <Navigation />
        
        {state.type ==="main" && (
        <div>
          <h1 className="text-[42px] my-5">{currentCategory}</h1>
          <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 justify-items-center align-items-center">
          {filteredProducts.length ? filteredProducts.map((product) => (<Product key={product._id} {...product}  />)) 
                        : products.length ? products.map((product) => (<Product key={product._id} {...product}  />)) 
                        : <p className='col-span-3 text-center font-bold'>No Products Found</p>}
        </div>
        </div>
      )}
        
      </div>
    </>
  );
}

export default MainPage;
