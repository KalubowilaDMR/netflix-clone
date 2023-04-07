import React, { Fragment } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Navbar = () => {

  const {user, signOutUser} = UserAuth();

  const navigation = useNavigate();

  const handleLogOut = async () => {
    try{
      await signOutUser();
      navigation('/')
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Fragment>
        <div className='flex items-center justify-between px-4 md:px-32 py-4 z-[100] w-full absolute'>
          <Link to='/'>
            <h1 className='text-[rgb(229,9,20)] text-5xl font-bold cursor-pointer'>NETFLIX</h1>
          </Link>
            {user?.email ? (
              <div>
              <Link to='/account'>
                <button className='text-white pr-4'>Account</button>
              </Link>
                <button className='bg-red-600 text-white px-6 py-2 rounded cursor-pointer' onClick={handleLogOut}>Sign Out</button>
            </div>
            ) : (
              <div>
              <Link to='/signin'>
                <button className='text-white pr-4'>Sign In</button>
              </Link>
              <Link to='/signup'>
                <button className='bg-red-600 text-white px-6 py-2 rounded cursor-pointer'>Sign Up</button>
              </Link>
            </div>
            )}
        </div>
    </Fragment>
  )
}

export default Navbar