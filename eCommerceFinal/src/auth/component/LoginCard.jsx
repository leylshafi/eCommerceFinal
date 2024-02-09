import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { useCookieContext } from '../../CookieContext';
function LoginCard() {
  const { setCookie, cookies } = useCookieContext()
    const [formData, setFormData] = useState({});
    const navigate = useNavigate()
    const login = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/auth/login", {
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
                navigate("/mainpage")
            }
            else {
                console.log(response.status)
                console.log(response.json())
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevForm) => ({
            ...prevForm,
            [name]: value
        }))

    }

    const handleLogin = async (e) => {
        e.preventDefault();
        login();
    }
  return (
    <>
    <form action="" className="w-full max-w-sm">
          <div className="flex border border-zinc-300 px-5 rounded-[30px] sm:w-[397px]  my-5">
            <img src="\src\assets\codicon_mail.svg" />
            <input className="p-[12px]" onChange={(e) => handleChange(e)} type="email" name='email' placeholder="Email Address" />
          </div>

          <div className="flex border border-zinc-300 rounded-[30px] sm:w-[397px] px-5 my-5">
            <img src="\src\assets\bx_bxs-lock-alt.svg" />
            <input onChange={(e) => handleChange(e)} type="password" name='password' className="p-[12px] " placeholder="Password" />
          </div>
          <button onClick={(e) => handleLogin(e)} type="submit" value="Login" className="bg-green-500 sm:w-[397px] w-full p-[12px] text-white" >
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