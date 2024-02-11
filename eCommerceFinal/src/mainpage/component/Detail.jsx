import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Context from "../../ContextWrapper";

export default function Detail({setCartItems,cartItems}) {
  const { getProductById } = useContext(Context);
  const params = useParams();
  const [product, setProduct] = useState(null);
  const handleAddToCart = () => {
    setCartItems(prevItems => [...prevItems, { ...product}]); 
    console.log(cartItems);
  };


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const product = await getProductById(params.id);
        setProduct(product);
        console.log(product);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [getProductById, params]);

  return (
    <div>
      {product ? (
        <div className="flex flex-col md:flex-row mt-16">
          <div className="flex flex-row md:flex-col items-center md:items-start">
          {product.gallery.map((gallery, index) => (
                       <img
                       src={gallery}
                       className="w-20 h-20 mb-10 sm:mr-10 hover: cursor-pointer hover:border border-[#5ECE7B]"
                     />
                     ))}
           
          </div>
          <div className="w-full md:w-[1002px] h-[595px] flex flex-col md:flex-row">
            <div>
              <img
                src={product.gallery[0]}
                className='w-full md:w-[610px] h-[511px] alt="" '
              />
            </div>
            <div className="ml-0 md:ml-[100px] flex flex-col">
              <h2 className="text-3xl font-semibold">{product.brand}</h2>
              <h3 className="text-3xl font-light">{product.title}</h3>
              {product.size.length>0 && (
                   <div className="mt-10">
                   <p className="text-[18px] font-bold">SIZE:</p>
                   <div className="flex gap-3">
                     {product.size.map((size, index) => (
                       <div
                         key={index}
                         className="flex border-[1.9px] border-zinc-900 w-[63px] h-[45px] justify-center items-center  hover: cursor-pointer"
                       >
                         <p>{size}</p>
                       </div>
                     ))}
                   </div>
                 </div>
                  )}
             
              <div className="mt-5">
                <p className="text-[18px] font-bold">COLOR:</p>
                <div className="flex gap-3">
                  {product.colors.map((color, index) => (
                    <div
                      key={index}
                      className="w-[32px] h-[32px] border-2 hover:cursor-pointer"
                      style={{
                        backgroundColor: color,
                        borderColor:
                          color === "#5ECE7B" ? "#5ECE7B" : "#000000",
                      }}
                    ></div>
                  ))}
                </div>
              </div>
              <div className="mt-10">
                <p className="text-[18px] font-bold">PRICE:</p>
                <p className="text-[18px] font-bold mt-3">
                  <span>$</span>
                  {product.price}
                </p>
              </div>
              <div className="mt-10">
                <button onClick={handleAddToCart} className="bg-[#5ECE7B] text-white w-full max-w-[300px] py-4 font-medium">
                  ADD TO CART
                </button>
              </div>
              <div className="mt-10">
                <p className="w-full max-w-[300px] font-medium">
                  {product.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
