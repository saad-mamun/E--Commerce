import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillMediumCircle } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
const Footer = () => {
  return (
    <section className="bg-blue-100  px-1 lg:px-3">
      <div className=" flex items-start lg:flex-row flex-col justify-center lg:gap-[200px] gap-3 p-5 ">
        <div>
          <h3>Ready to get started?</h3>
          <h3>Talk to us today</h3>
        </div>

        <div>
          <button>
            <NavLink to="/contact">Get Started</NavLink>
          </button>
        </div>
      </div>

      {/* main footer */}

      <footer>
        <div className="container mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          <div>
            <h3 className="font-semibold text-xl">Global Tech</h3>
            <p className="w-[250px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
              quasi.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              Subscribe to get important updates
            </h3>
            <form action="#">
              <input type="email" placeholder="Enter e-mail" />
              <input type="submit" value="subscribe" />
            </form>
          </div>

          <div>
            <h3 className="text-xl font-semibold pb-2">follow us</h3>
            <div className="flex gap-3">
              <div>
                <AiFillLinkedin className="text-xl" />
              </div>
              <div>
                <AiFillMediumCircle className="text-xl" />
              </div>
              <div>
                <AiFillYoutube className="text-xl" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Call Us</h3>
            {/* <a href="tel:01791182660">Click here to call me</a> */}
            <h4>+880 1358975418</h4>
          </div>
        </div>

        <div>
          <hr />
          <div>
            <p className='text-lg font-medium text-center py-2'>@{new Date().getFullYear()} Global Tech. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Footer
