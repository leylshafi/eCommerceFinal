import React, { useState, useContext, useEffect } from 'react';
import Context from '../../ContextWrapper';
function Navigation() {
  const { categories, getCategories, setCurrentCategory, filterProducts } = useContext(Context)

  useEffect(() => {
    getCategories()
  }, [])


  return (
    <nav className="flex justify-between items-center ">
      <div>
        <ul className="flex space-x-4">
        {categories.map((c) =>
          (<li className="flex flex-col  text-center w-[70px] h-[56px]">
            <button onClick={() => {
              setCurrentCategory(c)
              filterProducts(c)
            }} className="py-6 border-b-2 mt-3 border-transparent hover:text-green-400 hover:border-green-400">{c}</button>
          </li>))}
        </ul>
        
      </div>
      <img className='' src="\src\assets\a-logo.svg" />
      <div className='flex'>
      <select>
        <option>₼</option>
        <option>$</option>
      </select>
      <img className='' src="\src\assets\Empty Cart.svg" />
      </div>
    </nav>
  );
}

export default Navigation;
