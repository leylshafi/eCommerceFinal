import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookieContext } from '../../CookieContext';
function RegisterCard() {
   const [formData,setFormData] = useState({})
  const navigate = useNavigate()
  const { setCookie, cookies } = useCookieContext()

  const register = async() =>{
    try{
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        body: JSON.stringify(formData),
        headers:
        {
          "Content-type": "application/json"
        }

      })

      if (response.ok) {
        const data = await response.json();
        const token = data.user.token;
        setCookie('accessToken', token, { path: '/' });
        navigate("/login")
      }
      else {
        console.log(response.status)
        console.log(response.json())
      }
    }
    catch(error){
      console.log(error)
    }
  }

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setFormData((prevForm) => ({
      ...prevForm,
      [name]: value
    }))
  }

  const handleRegister = async (e) => {
    e.preventDefault();
    register();
  }
  
  return (
    <form className="flex flex-col justify-center items-center">
      <div className="grid lg:grid-cols-2 py-3">
        <div className="flex border border-zinc-300 px-5 rounded-[30px] sm:w-[397px] m-2">
          <img src="\src\assets\codicon_mail (1).svg" alt="Name Icon" />
          <input className="p-[12px]" placeholder="Name" onChange={(e) => handleChange(e)} name='name'/>
        </div>
        <div className="flex border border-zinc-300 px-5 rounded-[30px] sm:w-[397px] m-2">
          <img src="\src\assets\codicon_mail.svg" alt="Email Icon" />
          <input className="p-[12px]" placeholder="Email Address" name='email' onChange={(e) => handleChange(e)} />
        </div>
        <div className="flex border border-zinc-300 rounded-[30px] sm:w-[397px] px-5 m-2">
          <img src="\src\assets\codicon_mail (1).svg" alt="Surname Icon" />
          <input className="p-[12px] " placeholder="Surname"  onChange={(e) => handleChange(e)} />
        </div>
        <div className="flex border border-zinc-300 rounded-[30px] sm:w-[397px] px-5 m-2">
          <img src="\src\assets\bx_bxs-lock-alt.svg" alt="Password Icon" />
          <input type="password" className="p-[12px] " placeholder="Password" name='password' onChange={(e) => handleChange(e)} />
        </div>
      </div>
      <button className="bg-green-500 sm:w-[397px] w-full p-[12px] text-white" onClick={(e) => handleRegister(e)}>
        Register
      </button>
      <div className="flex items-center justify-center my-4 text-emerald-700">
        <p>Do you have an account? </p>
        <button className="underline" onClick={() => navigate("/login")}>Log in</button>
      </div>
    </form>
  );
}

export default RegisterCard;
