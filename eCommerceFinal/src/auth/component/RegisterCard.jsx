import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterCard() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: ''
  });

  const register = async () => {
    try {
      console.log(formData);
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-type": "application/json"
        }
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        navigate("/login");
      } else {
        console.error("Registration failed");
        alert("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("An unexpected error occurred. Please try again later.");
    }
  }

  const handleRegister = async (e) => {
    try {
      e.preventDefault();
  
      await register();
    } catch (error) {
      console.error("Error during registration:", error);
      alert("An unexpected error occurred. Please try again later.");
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  }
  
  return (
    <form className="flex flex-col justify-center items-center">
      <div className="grid lg:grid-cols-2 py-3">
        <div className="flex border border-zinc-300 px-5 rounded-[30px] sm:w-[397px] m-2">
          <img src="\src\assets\codicon_mail (1).svg" alt="Name Icon" />
          <input className="p-[12px]" placeholder="Name" name='name' required onChange={handleChange} />
        </div>
        <div className="flex border border-zinc-300 px-5 rounded-[30px] sm:w-[397px] m-2">
          <img src="\src\assets\codicon_mail.svg" alt="Email Icon" />
          <input className="p-[12px]" placeholder="Email Address" name='email' onChange={handleChange} />
        </div>
        <div className="flex border border-zinc-300 rounded-[30px] sm:w-[397px] px-5 m-2">
          <img src="\src\assets\codicon_mail (1).svg" alt="Surname Icon" />
          <input className="p-[12px] " placeholder="Surname" name='role' onChange={handleChange} />
        </div>
        <div className="flex border border-zinc-300 rounded-[30px] sm:w-[397px] px-5 m-2">
          <img src="\src\assets\bx_bxs-lock-alt.svg" alt="Password Icon" />
          <input type="password" className="p-[12px] " placeholder="Password" name='password' onChange={handleChange} />
        </div>
      </div>
      <button className="bg-green-500 sm:w-[397px] w-full p-[12px] text-white" onClick={handleRegister}>
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
