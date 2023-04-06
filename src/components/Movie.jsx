import React, { Fragment, useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import netflixLogo from '../assets/logo.jpg'

const Movie = ({item}) => {

    const [like, setLike] = useState(false)

  return (
    <Fragment>
        <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 select-none'>
            <img className='w-full h-auto block' src={ item.backdrop_path ? `https://image.tmdb.org/t/p/w500/${item?.backdrop_path}` : netflixLogo} alt={item.title} />
            <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                <p className='white-space-normal text-xs md:text-sm font-bold flex h-full justify-center items-center text-center'>{item?.title}</p>
                <p>
                    {like ? <FaHeart className='absolute top-4 left-4 text-gray-300'/> : <FaRegHeart className='absolute top-4 left-4 text-gray-300'/>}
                </p>
            </div>
        </div>
    </Fragment>
  )
}

export default Movie