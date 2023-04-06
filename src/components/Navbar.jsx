import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Fragment>
        <div className='flex items-center justify-between px-4 md:px-32 py-4 z-[100] w-full absolute'>
          <Link to='/'>
            <h1 className='text-[rgb(229,9,20)] text-5xl font-bold cursor-pointer'>NETFLIX</h1>
          </Link>
            <div>
              <Link to='/signin'>
                <button className='text-white pr-4'>Sign In</button>
              </Link>
              <Link to='/signup'>
                <button className='bg-red-600 text-white px-6 py-2 rounded cursor-pointer'>Sign Up</button>
              </Link>
            </div>
        </div>
    </Fragment>
  )
}

export default Navbar