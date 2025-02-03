import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <div className="container mx-auto lg:px-3 px-1 h-[650px]">
      <div className=" py-10 space-y-3">
        <h1 className="text-4xl font-semibold ">404</h1>
        <h1 className="text-xl font-semibold text-blue-600">
          UH OH! You're lost
        </h1>
        <p className="w-[600px] text-base text-gray-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
          quibusdam nihil, qui fugit deleniti maiores.
        </p>
        <NavLink to="/">
          <button className="font-bold text-xl text-blue-600">
            Go Back To Home
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Error
