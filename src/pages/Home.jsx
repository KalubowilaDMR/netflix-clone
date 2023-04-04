import React, { Fragment } from 'react'
import Main from '../components/Main'
import SectionsRow from '../components/SectionsRow'
import requests from '../Request'

const Home = () => {
  return (
    <Fragment>
        <div>
            <Main />
            <SectionsRow title='Upcomming' fetchURL={requests.requestUpcomming}/>
            <SectionsRow title='Popular' fetchURL={requests.requestPopular}/>
            <SectionsRow title='Trending' fetchURL={requests.requestTrending}/>
            <SectionsRow title='Top Rated' fetchURL={requests.requestTopRated}/>
            <SectionsRow title='Horror' fetchURL={requests.requestHorror}/>
        </div>
    </Fragment>
  )
}

export default Home