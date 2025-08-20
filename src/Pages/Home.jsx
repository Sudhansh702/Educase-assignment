import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className='h-screen w-full flex justify-center '>
      <div className='w-full max-w-md bg-[#F7F8F9] text-[#1D2226] h-full flex items-end px-4 py-6'>
        <div className='w-full'>
          <h1 className='max-w-[70%] text-2xl font-semibold my-2'>Welcome to PopX</h1>
          <h3 className='max-w-[70%] opacity-60 my-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
          <Link to="/register">
            <div className="w-full py-2 text-center text-sm bg-[#6C25FF] rounded text-white my-2">
              Create Account
            </div>
          </Link>
          <Link to="/login">
            <div className="w-full py-2 font-semibold text-sm text-center rounded bg-[#6C25FF4B] my-2">
              Already Register? Login
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
