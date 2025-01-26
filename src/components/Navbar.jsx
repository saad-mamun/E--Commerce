import React from "react";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex items-center gap-6">
        <li>
          <NavLink to="/" className="text-lg font-semibold">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="about" className="text-lg font-semibold">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="products" className="text-lg font-semibold">
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="contact" className="text-lg font-semibold">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="cart" className="text-lg font-semibold relative">
            <FiShoppingCart />
            <span className="absolute bottom-2 left-4 text-[10px] text-black bg-yellow-500 rounded-full px-[2px]" >10</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
