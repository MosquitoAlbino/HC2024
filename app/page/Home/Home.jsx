import React from 'react'
import {
  Link
}            from 'react-router-dom'

const Home = () => (
  <div className="home">
    <Link to="/clinic-history">
      Historia clinica
    </Link>
  </div>
)

export default Home
