import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios';
import Movie from './Movie';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const SectionsRow = ({title, fetchURL, rowId}) => {

    const [movies, setMovies] = useState([])
    

    useEffect(() => {
        axios.get(fetchURL).then((res) => {
            setMovies(res.data.results);
        })
    }, [fetchURL]);

    const slideLeft = () => {
        let slide = document.getElementById('slider' + rowId);
        slide.scrollLeft = slide.scrollLeft - 1000;
    }

    const slideRight = () => {
        let slide = document.getElementById('slider' + rowId);
        slide.scrollLeft = slide.scrollLeft + 1000;
    }

  return (
    <Fragment>
        <h2 className='text-white font-bold md:text-xl p-4 md:p-8'>{title}</h2>
        <div className='relative flex items-center group p-4'>
            <MdChevronLeft onClick={slideLeft} className='bg-white rounded-full opacity-50 text-black hover:opacity-100 absolute left-0 z-[10] cursor-pointer hidden group-hover:block' size={40} />
            <div id={"slider" + rowId} className='w-full overflow-x-scroll scroll-smooth scrollbar-hide whitespace-nowrap'>
                {movies?.map((item, id) => (
                    <Movie key={id} item={item} />
                ))}
            </div>
            <MdChevronRight onClick={slideRight} className='bg-white rounded-full opacity-50 text-black hover:opacity-100 absolute right-0 z-[10] cursor-pointer hidden group-hover:block' size={40} />
        </div>
    </Fragment>
  )
}

export default SectionsRow