import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="px-4">
        <button
          className="lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
        <ul
          className={`lg:flex  lg:items-center lg:gap-6 absolute lg:static  w-full left-0  transition-transform
        ${
          isMenuOpen
            ? "top-20 flex w-full h-full flex-col justify-center items-center gap-5 bg-blue-50"
            : "-top-full"
        }`}
        >
          <li>
            <NavLink
              to="/"
              className="text-lg font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about"
              className="text-lg font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="products"
              className="text-lg font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="contact"
              className="text-lg font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="cart"
              className="text-lg font-semibold relative"
              onClick={() => setIsMenuOpen(false)}
            >
              <FiShoppingCart />
              <span className="absolute bottom-2 left-4 text-[10px] text-black bg-yellow-500 rounded-full px-[2px]">
                10
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
