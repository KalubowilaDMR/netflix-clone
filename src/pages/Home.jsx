import React, { Fragment } from 'react'
import Main from '../components/Main'
import SectionsRow from '../components/SectionsRow'
import requests from '../Request'

const Home = () => {
  return (
    <Fragment>
        <div>
            <Main />
            <SectionsRow rowId='1' title='Upcomming' fetchURL={requests.requestUpcomming}/>
            <SectionsRow rowId='2' title='Popular' fetchURL={requests.requestPopular}/>
            <SectionsRow rowId='3' title='Trending' fetchURL={requests.requestTrending}/>
            <SectionsRow rowId='4' title='Top Rated' fetchURL={requests.requestTopRated}/>
            <SectionsRow rowId='5' title='Comedy' fetchURL={requests.requestComedy}/>
        </div>
    </Fragment>
  )
}

export default Home