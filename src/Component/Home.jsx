import React from 'react'
import { useGlobalContext } from './Context'
import Movie from './Movie'
import Search from './Search'
const Home = () => {

  return (
    <div>
        <h3>Home</h3> 
        <Search/>
        <Movie/>

    </div>
  )
}

export default Home