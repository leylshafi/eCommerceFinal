import React from 'react'
import { useNavigate } from 'react-router-dom';
function LoginCard() {
  const navigate = useNavigate()
  return (
    <>
    <form action="" className="w-full max-w-sm">
          <div className="flex border border-zinc-300 px-5 rounded-[30px] sm:w-[397px]  my-5">
            <img src="\src\assets\codicon_mail.svg" />
            <input className="p-[12px]" placeholder="Email Address" />
          </div>

          <div className="flex border border-zinc-300 rounded-[30px] sm:w-[397px] px-5 my-5">
            <img src="\src\assets\bx_bxs-lock-alt.svg" />
            <input className="p-[12px] " placeholder="Password" />
          </div>
          <button className="bg-green-500 sm:w-[397px] w-full p-[12px] text-white" >
            Login
          </button>
          <div className="flex items-center justify-center my-4 text-emerald-700">
            <p>Do not have account? </p>
            <button className="underline"
            onClick={()=> navigate("/register")}
            >Register</button>
          </div>
        </form>
        </>
  )
}

export default LoginCard