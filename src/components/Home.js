import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <NavLink to='/Profile'>
        <button>Profile</button>
      </NavLink>
      <NavLink to={'/Product'}>
        <button>Product</button>
      </NavLink>
    </div>
  )
}

export default Home



