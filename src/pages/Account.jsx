import React, { Fragment } from 'react'
import backgroundImg from '../assets/background.jpg'
import SaveShow from '../components/SaveShow'

const Account = () => {
  return (
    <Fragment>
        <div className='w-full text-white'>
          <img className='w-full h-[400px] object-cover' src={backgroundImg} alt="/" />
          <div className="bg-black/60 absolute top-0 left-0 w-full h-[400px]">
          <h1 className='text-3xl text-center mt-[30%] md:mt-[10%] md:text-5xl font-bold font-sans'>My Favourits</h1>
          </div>
          {/* <div className="absolute top-[20%] p-4 md:p-8">
            <h1 className='text-3xl md:text-5xl font-bold font-sans'>My Show</h1>
          </div> */}
        </div>
        <SaveShow />
    </Fragment>
  )
}

export default Account