import React from 'react'
import {
  Link
}            from 'react-router-dom'

const Home = () => (
  <div className="home">
    <Link to="/clinic-history">
      Historia clinica 1
      Historia clinica 2 
    </Link>
  </div>
)

export default Home
