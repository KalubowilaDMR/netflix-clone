import React, { Fragment, useState, useEffect } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { UserAuth } from '../context/AuthContext'
import { db } from '../firebase'
import { doc, updateDoc, onSnapshot } from 'firebase/firestore'
import netflixLogo from '../assets/logo.png'
import { AiOutlineClose } from 'react-icons/ai'
import { Toaster, toast } from 'react-hot-toast'

const SaveShow = () => {

    const [movies, setMovies] = useState([])

    const { user } = UserAuth();

    const slideLeft = () => {
        let slide = document.getElementById('slider')
        slide.scrollLeft = slide.scrollLeft - 1000
    }

    const slideRight = () => {
        let slide = document.getElementById('slider')
        slide.scrollLeft = slide.scrollLeft + 1000
    }

    useEffect(() => {
        onSnapshot(
            doc(db, 'users', `${user?.email}`), (doc) => {
                setMovies(doc.data()?.savedShows)
            })
    }, [user?.email])

    const movieRef = doc(db, 'users', `${user?.email}`)
    const deleteItem = async (passId) => {
        try {
            const result = movies.filter((item) => item.id !== passId )
            await updateDoc(movieRef, {
                savedShows : result
            })
            toast.success('Delete Success from database!')
        } catch (err) {
            toast.error('Somthing went Wrong!')
            console.log(err);
        }
    }

  return (
    <Fragment>
        <Toaster position='top-center' reverseOrder={true}/>

        <h2 className='text-white font-bold md:text-xl p-4 md:p-8'>My Shows</h2>
        <div className='relative flex items-center group p-4'>
            <MdChevronLeft onClick={slideLeft} className='bg-white rounded-full opacity-50 text-black hover:opacity-100 absolute left-0 z-[10] cursor-pointer hidden group-hover:block' size={40} />
            <div id={"slider"} className='w-full overflow-x-scroll scroll-smooth scrollbar-hide whitespace-nowrap'>
                {movies?.map((item, id) => (
                    <div key={id} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 select-none'>
                        <img className='w-full h-auto block' src={ item.img ? `https://image.tmdb.org/t/p/w500/${item?.img}` : netflixLogo } alt={item.title} />
                        <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                            <p className='white-space-normal text-xs md:text-sm font-bold flex h-full justify-center items-center text-center'>{item?.title}</p>                        
                            <p onClick={() => deleteItem(item.id)}>
                                {/* {like ? <FaHeart className='absolute top-4 left-4 text-gray-300'/> : <FaRegHeart className='absolute top-4 left-4 text-gray-300'/>} */}
                                <AiOutlineClose className='absolute top-4 right-4 text-red-700 font-extrabold text-xl bg-white rounded-md' />
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <MdChevronRight onClick={slideRight} className='bg-white rounded-full opacity-50 text-black hover:opacity-100 absolute right-0 z-[10] cursor-pointer hidden group-hover:block' size={40} />
        </div>
    </Fragment>
  )
}

export default SaveShow