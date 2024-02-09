import React, { useState } from 'react'
import LoginCard from './component/LoginCard'
import RegisterCard from './component/RegisterCard'

function Auth({login}) {
   
  return (
    <>
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <h1 className="font-extrabold text-[46.62px] font-[Montserrat]">
        Hello Again!
      </h1>
      <h2 className="font-normal text-[31.58px] font-[Montserrat]">
        Welcome Back
      </h2>
      {login ? <LoginCard /> : <RegisterCard />}
    </div>
  </>
  )
}

export default Auth