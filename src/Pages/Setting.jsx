import React from 'react'
import image from '../assets/Ellipse.png'
import camera from '../assets/Group.svg'

const Setting = () => {
  const [userData,setUserData] = React.useState({
    name: "Marry Doe",
    email: "Marry@gmail.com"
  })
  return (
    <div className='h-screen w-full flex justify-center text-sm'>
      <div className='w-full max-w-sm bg-[#F7F8F9] text-[#1D2226] h-full'>
        <div className='bg-white p-4 shadow-b'>
          <h1>Account Setting</h1>
        </div>
        <div className='border-b border-dashed border-[#CBCBCB]'>
          <div className='px-3 py-6'>
            <div className=' flex'>
              <div className='relative h-16 w-16'>
                <img src={image} alt="profile pic" className='rounded-full h-full w-full object-cover bg-center' />
                <img src={camera} alt='camera' className="absolute bottom-0 right-0 text-white bg-[#6C25FF] rounded-full w-6 h-6 cursor-pointer shadow-md" />
              </div>
              <div className='ml-4'>
                <h2 className='font-bold'>{userData.name}</h2>
                <p>{userData.email}</p>
              </div>
            </div>
            <p className='mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid illo officia corporis deleniti quod itaque delectus optio harum consectetur aliquam.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Setting
