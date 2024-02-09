import React from 'react'
export default function Detail() {
  return (
    <>
      <div className='flex flex-col md:flex-row mt-16'>
          <div className='flex flex-row md:flex-col items-center md:items-start'>
            <img src="\src\assets\Image.svg" className='w-20 h-20 mb-10 sm:mr-10 hover: cursor-pointer hover:border border-[#5ECE7B]' />
            <img src="\src\assets\Image.svg" className='w-20 h-20 mb-10 sm:mr-10 hover: cursor-pointer hover:border border-[#5ECE7B]' />
            <img src="\src\assets\Image.svg" className='w-20 h-20 mb-10 sm:mr-10 hover: cursor-pointer hover:border border-[#5ECE7B]' />
          </div>
          <div className='w-full md:w-[1002px] h-[595px] flex flex-col md:flex-row'>
            <div>
              <img src="\src\assets\Image.svg" className='w-full md:w-[610px] h-[511px] alt="" '/>
            </div>
            <div className='ml-0 md:ml-[100px] flex flex-col'>
              <h2 className="text-3xl font-semibold">Apollo</h2>
              <h3 className="text-3xl font-light">Running Short</h3>
              <div className="mt-10">
          <p className="text-[18px] font-bold">SIZE:</p>
          <div className="flex gap-3">
            <div className="flex border-[1.9px] border-zinc-900 w-[63px] h-[45px] justify-center items-center  hover: cursor-pointer">
              <p>XS</p>
            </div>
            <div className="flex border-[1.9px] bg-zinc-900 border-zinc-900 w-[63px] h-[45px] justify-center items-center  hover: cursor-pointer">
              <p className="text-white">S</p>
            </div>
            <div className="flex border-[1.9px] border-zinc-900 w-[63px] h-[45px] justify-center items-center  hover: cursor-pointer">
              <p>M</p>
            </div>
            <div className="flex border-[1.9px] border-zinc-900 w-[63px] h-[45px] justify-center items-center  hover: cursor-pointer">
              <p>L</p>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <p className="text-[18px] font-bold">COLOR:</p>
          <div className="flex gap-3">
            <div className="w-[32px] h-[32px] border-2 border-[#5ECE7B] bg-[#D3D2D5] hover: cursor-pointer"></div>
            <div className="w-[32px] h-[32px] border-2 bg-[#2B2B2B] hover: cursor-pointer"></div>
            <div className="w-[32px] h-[32px] border-2 bg-[#0F6450] hover: cursor-pointer"></div>
          </div>
        </div>
        <div className="mt-10">
          <p className="text-[18px] font-bold">PRICE:</p>
          <p className="text-[18px] font-bold mt-3">
            <span>$</span>50.00
          </p>
        </div>
        <div className="mt-10">
          <button className="bg-[#5ECE7B] text-white w-full max-w-[300px] py-4 font-medium">
            ADD TO CART
          </button>
        </div>
        <div className="mt-10">
          <p className="w-full max-w-[300px] font-medium">
            Find stunning women's cocktail dresses and party dresses. Stand out
            in lace and metallic cocktail dresses and party dresses from all
            your favorite brands.
          </p>
        </div>
            </div>
          </div>
      </div>
    </>
  )
}