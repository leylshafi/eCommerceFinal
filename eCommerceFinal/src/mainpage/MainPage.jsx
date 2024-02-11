import React, { useState, useEffect, useContext, useReducer } from "react";
import Navigation from "./component/Navigation";
import Product from "./component/Product";
import Context from "../ContextWrapper";
import Detail from "./component/Detail";
import Cart from "./component/Cart";
import { useParams, useNavigate } from "react-router-dom";

function MainPage({ type }) {
  const [cartItems, setCartItems] = useState([]);
  const { currentCategory, filteredProducts, products } =
    useContext(Context);
  const { id } = useParams();
  const navigateTo = useNavigate();

  const goToMainType = () => {
    navigateTo("/mainpage")
  };
  return (
    <>
      <div className="px-[101px]">
        <Navigation goToMainType={goToMainType} cartItems={cartItems} />

        {type === "main" && (
          <div>
            <h1 className="text-[42px] my-5">{currentCategory}</h1>
            <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 justify-items-center align-items-center">
              {filteredProducts.length ? (
                filteredProducts.map((product) => (
                  <Product key={product._id} {...product} setCartItems={setCartItems} cartItems={cartItems}  />
                ))
              ) : products.length ? (
                products.map((product) => (
                  <Product key={product._id} {...product} setCartItems={setCartItems} cartItems={cartItems} />
                ))
              ) : (
                <p className="col-span-3 text-center font-bold">
                  No Products Found
                </p>
              )}
            </div>
          </div>
        )}
        {type === "detail" && <Detail setCartItems={setCartItems} cartItems={cartItems} />}
        {type === "cart" && <Cart cartItems={cartItems}  />}
      </div>
    </>
  );
}

export default MainPage;
