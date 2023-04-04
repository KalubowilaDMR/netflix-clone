import React, { Fragment } from 'react'

const Navbar = () => {
  return (
    <Fragment>
        <div className='flex items-center justify-between px-4 md:px-32 py-4 z-[100] w-full absolute'>
            <h1 className='text-[rgb(229,9,20)] text-5xl font-bold cursor-pointer'>NETFLIX</h1>
            <div>
                <button className='text-white pr-4'>Sign In</button>
                <button className='bg-red-600 text-white px-6 py-2 rounded cursor-pointer'>Sign Up</button>
            </div>
        </div>
    </Fragment>
  )
}

export default Navbar