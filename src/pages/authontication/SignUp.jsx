import React, { Fragment } from 'react'
import backgroundImg from '../../assets/background.jpg'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <Fragment>
        <div className='w-full h-screen'>
            <img className='w-full h-full hidden sm:block absolute object-cover' src={backgroundImg} alt="/" />
            <div className='bg-black/50 fixed top-0 left-0 w-full h-screen'></div>
            <div className='fixed w-full px-4 py-24 z-50'>
              <div className="max-w-[450px] h-[600px] bg-black/75 rounded-md mx-auto text-white">
                <div className="max-w-[320px] mx-auto py-16">
                  <h1 className='text-4xl font-bold mb-[24px] font-sans'>Sign Up</h1>
                  <form className='w-full flex flex-col py-4'>
                    <input className='py-[16px] px-[20px] border-b-2 border-b-[#b92d2b] my-2 rounded-[4px] bg-[#333] outline-none text-white' type="email" name="email" placeholder='Enter your Email' autoComplete='email'/>
                    <input className='py-[16px] px-[20px] border-b-2 border-b-[#b92d2b] my-2 rounded-[4px] bg-[#333] outline-none text-white' type="password" name="password" placeholder='Enter your Password' autoComplete='current-password' />
                    <button className='bg-[#e50914] py-3 my-6 font-bold cursor-pointer rounded-[4px]'>Sign Up</button>
                    <div className='flex justify-between items-center text-sm text-[#B3B3B3]'>
                      <p><input type="checkbox" name="remember" className='mr-2 font-sans text-[13px]' />Remember me</p>
                      <p className='font-sans text-[13px]'>Need help?</p>
                    </div>
                    <p className='text-[17px] mt-4'><span className='text-gray-400'>Already subscribed to Netflix? </span><Link to='/signin'> Sign in</Link></p>
                    <p className='text-[14px] text-gray-400 mt-4'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="http://" className='text-[#0071EB]'>Learn more.</a></p>
                  </form>
                </div>
              </div>
            </div>
        </div>
    </Fragment>
  )
}

export default SignUp