import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className='bg-blue-50 p-3'>
      <div className=" container mx-auto flex items-center justify-between">
        <NavLink to="/">
          <h1 className=" p-3 bg text-2xl font-semibold text-blue-800">
            Global <span className="text-gray-800">Tech</span>
          </h1>
        </NavLink>
        <Navbar />
      </div>
    </header>
  );
}

export default Header
