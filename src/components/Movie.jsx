import React, { Fragment, useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { UserAuth } from '../context/AuthContext'
import { db } from '../firebase'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'
import netflixLogo from '../assets/logo.png'
import { Toaster, toast } from 'react-hot-toast'

const Movie = ({item}) => {

    const [like, setLike] = useState(false)
    const [saved, setSaved] = useState(false)

    const {user} = UserAuth();

    const movieID = doc(db, 'users', `${user?.email}`);

    const saveShow = async () => {
        if(user?.email) {
            setLike(true)
            setSaved(true)
            await updateDoc(movieID, {
                savedShows : arrayUnion({
                    id : item.id,
                    title : item.title,
                    img : item.backdrop_path
                })
            })
        } else {
            toast.error('Error Update!.')
        }
    }

  return (
    <Fragment>

        <Toaster position='top-center' reverseOrder={true} />

        <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 select-none'>
            <img className='w-full h-auto block' src={ item.backdrop_path ? `https://image.tmdb.org/t/p/w500/${item?.backdrop_path}` : netflixLogo} alt={item.title} />
            <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                <p className='white-space-normal text-xs md:text-sm font-bold flex h-full justify-center items-center text-center'>{item?.title}</p>
                <p onClick={saveShow}>
                    {like ? <FaHeart className='absolute top-4 left-4 text-gray-300'/> : <FaRegHeart className='absolute top-4 left-4 text-gray-300'/>}
                </p>
            </div>
        </div>
    </Fragment>
  )
}

export default Movie