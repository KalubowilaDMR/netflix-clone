import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'

const SectionsRow = ({title, fetchURL}) => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get(fetchURL).then((res) => {
            setMovies(res.data.results);
        })
    }, [fetchURL]);

    console.log(movies);

  return (
    <Fragment>
        <h2 className='text-white font-bold md:text-xl p-4 md:p-8'>{title}</h2>
        <div className='relative flex items-center'>
            <div id="slider">

            </div>
        </div>
    </Fragment>
  )
}

export default SectionsRow