import React from 'react'
import CartCard from './CartCard'

function Cart() {
  return (
    <>
     <h1 className="text-[42px]">CART</h1>
    <CartCard/>
    <CartCard/>
    <CartCard/>
    <h5 className='font-[Raleway] text-[24px]'>Tax 21%: <span className='font-bold'>$42.00</span></h5>
    <h5 className='font-[Raleway] text-[24px]'>Quantity: <span className='font-bold'>3</span></h5>
    <h5 className='font-[Raleway] text-[24px]'>Total: <span className='font-bold'>$200.00</span></h5>
    <button className='w-[279px] h-[43px] bg-[#5ECE7B] text-white border-0'>ORDER</button>
    </>
  )
}

export default Cart