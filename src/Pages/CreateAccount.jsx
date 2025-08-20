import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const [FormData, setFormData] = React.useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    companyName: "",
    isAgency: false
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  const [isValid, setIsValid] = React.useState(false);
  useEffect(() => {
    const { fullName, phone, email, password, companyName } = FormData;
    if (fullName !== "" && phone !== "" && password !== "" && email !== "" && companyName !== "") {
      setIsValid(true);
    }
  }, [FormData])

  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (isValid) {
      navigate("/setting");
    }
  }
  return (
    <div className='h-screen w-full flex justify-center '>
      <div className='w-full max-w-sm bg-[#F7F8F9] text-[#1D2226] h-full px-4 py-6 text-sm flex flex-col justify-between'>
        <div className='w-full'>
          <h1 className='max-w-[60%] text-2xl font-semibold my-2'>Create your PopX account</h1>
          <form action="">
            <div className='relative my-5'>
              <label htmlFor="fullName" className='absolute px-2 bg-[#F7F8F9] top-[-20%] left-1.5 text-sm text-[#6C25FF]'>Full Name <span className='text-red-600'>*</span></label>
              <input type="text" name='fullName' placeholder='Enter full Name' 
                value={FormData.fullName}
                onChange={handleChange}
                className='border-[#CBCBCB] border-[1px] px-4 py-2 w-full rounded focus:outline-none' />
            </div>
            <div className='relative my-5'>
              <label htmlFor="phone" className='absolute px-2 bg-[#F7F8F9] top-[-20%] left-1.5 text-sm text-[#6C25FF]'>Phone number <span className='text-red-600'>*</span></label>
              <input type="number" name='phone' placeholder='Enter Phone number'
                value={FormData.phone}
                onChange={handleChange}
                className='border-[#CBCBCB] border-[1px] px-4 py-2 w-full rounded focus:outline-none' />
            </div>
            <div className='relative my-5'>
              <label htmlFor="email" className='absolute px-2 bg-[#F7F8F9] top-[-20%] left-1.5 text-sm text-[#6C25FF]'>Email Address <span className='text-red-600'>*</span></label>
              <input type="email" name='email' placeholder='Enter email address'
                value={FormData.email}
                onChange={handleChange}
                className='border-[#CBCBCB] border-[1px] px-4 py-2 w-full rounded focus:outline-none' />
            </div>
            <div className='relative my-5'>
              <label htmlFor="password" className='absolute px-2 bg-[#F7F8F9] top-[-20%] left-1.5 text-sm text-[#6C25FF]'>Password <span className='text-red-600'>*</span></label>
              <input type="text" name='password' placeholder='Enter password'
                value={FormData.password}
                onChange={handleChange}
                className='border-[#CBCBCB] border-[1px] px-4 py-2 w-full rounded focus:outline-none' />
            </div>
            <div className='relative my-5'>
              <label htmlFor="companyName" className='absolute px-2 bg-[#F7F8F9] top-[-20%] left-1.5 text-sm text-[#6C25FF]'>Company Name</label>
              <input type="text" name='companyName' placeholder='Enter companyName'
                value={FormData.companyName}
                onChange={handleChange}
                className='border-[#CBCBCB] border-[1px] px-4 py-2 w-full rounded focus:outline-none' />
            </div>

            <div>
              <h2 className="mb-2">Are you an Agency?</h2>
              {/* Yes Option */}
              <div className='flex gap-4'>
                <label htmlFor="no" className="flex items-center gap-[4px]">
                  <div className="relative flex items-center justify-center">
                    <input
                      type="radio"
                      name="isAgency"
                      id="yes"
                      checked={FormData.isAgency}
                      onChange={() => setFormData({ ...FormData, isAgency: true })}

                      className="appearance-none relative border border-solid border-[#642AF5] opacity-100 w-[22px] h-[22px] rounded-full checked:after:content-[''] checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:transform checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 checked:after:w-[12px] checked:after:h-[12px] checked:after:bg-[#6C25FF] checked:after:rounded-full checked:after:opacity-100"
                    />
                  </div>
                  {/* Custom Circle */}
                  <span>Yes</span>
                </label>

                {/* No Option */}
                <label htmlFor="no" className="flex items-center gap-[4px]">
                  <div className="relative flex items-center justify-center">
                    <input
                      type="radio"
                      name="isAgency"
                      id="no"
                      checked={!FormData.isAgency}
                      onChange={() => setFormData({ ...FormData, isAgency: false })}
                      className="appearance-none relative border border-solid border-[#642AF5] opacity-100 w-[22px] h-[22px] rounded-full checked:after:content-[''] checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:transform checked:after:-translate-x-1/2 checked:after:-translate-y-1/2 checked:after:w-[12px] checked:after:h-[12px] checked:after:bg-[#6C25FF] checked:after:rounded-full checked:after:opacity-100"
                    />
                  </div>
                  {/* Custom Circle */}
                  <span className="ml-1">No</span>
                </label>
              </div>
            </div>

          </form>
        </div>
        <button type='submit' onClick={handleSubmit} className={`w-full py-3 text-center text-sm font-semibold rounded text-white my-2  ${isValid ? "bg-[#6C25FF] cursor-pointer" : "bg-[#CBCBCB] "}`}>
          Create Account
        </button>
      </div>
    </div>
  )
}

export default CreateAccount