import React from 'react'
import { NavLink } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <h1>Product</h1>
      <NavLink to='/'>
        <button>Home</button>
      </NavLink>
      <NavLink to={'/Profile'}>
        <button>Profile</button>
      </NavLink>
    </div>
  )
}

export default Product
