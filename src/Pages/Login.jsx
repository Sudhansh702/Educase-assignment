import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginFormData, setLoginFormData] = React.useState({
    email: "",
    password: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  const [isValid, setIsValid] = React.useState(false);
  useEffect(() => {
    if (loginFormData.password !== "" && loginFormData.email != "") {
      setIsValid(true);
    }
  }, [loginFormData])

  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if(isValid){
      navigate("/setting");
    }
  }
  return (
    <div className='h-screen w-full flex justify-center '>
      <div className='w-full max-w-sm bg-[#F7F8F9] text-[#1D2226] h-full px-4 py-6'>
        <div className='w-full'>
          <h1 className='max-w-[60%] text-2xl font-semibold my-2'>Signin to your PopX account</h1>
          <h3 className='max-w-[60%] opacity-60 my-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
          <form action="">
            <div className='relative my-5'>
              <label htmlFor="email" className='absolute px-2 bg-[#F7F8F9] top-[-20%] left-1.5 text-sm text-[#6C25FF]'>Email Address</label>
              <input type="email" name='email' placeholder='Enter email address'
                value={loginFormData.email}
                onChange={handleChange}
                className='border-[#CBCBCB] border-2 px-4 py-2 w-full rounded focus:outline-none' />
            </div>
            <div className='relative my-5'>
              <label htmlFor="password" className='absolute px-2 bg-[#F7F8F9] top-[-20%] left-1.5 text-sm text-[#6C25FF]'>Password</label>
              <input type="text" name='password' placeholder='Enter password'
                value={loginFormData.password}
                onChange={handleChange}
                className='border-[#CBCBCB] border-2 px-4 py-2 w-full rounded focus:outline-none' />
            </div>

            <button type='submit' onClick={handleSubmit} className={`w-full py-3 text-center text-sm font-semibold rounded text-white my-2  ${isValid ? "bg-[#6C25FF] cursor-pointer" : "bg-[#CBCBCB] "}`}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
