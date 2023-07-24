import React, { useState } from "react";
import { FaDog } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [navMenuToggle, setNavMenuToggle] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-red-400 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <FaDog className="mx-3 text-2xl dog-logo" />
        <Link to="/">
          <span className="font-semibold text-xl tracking-tight">
            Woof Dog Grooming
          </span>
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setNavMenuToggle(!navMenuToggle)}
          className="transition duration-500 ease-linear flex items-center px-3 py-2 border rounded hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3 text-white"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={
          navMenuToggle
            ? "w-full flex-grow lg:flex lg:items-center lg:w-auto mobile-menu"
            : "w-full hidden flex-grow lg:flex lg:items-center lg:w-auto mobile-menu"
        }
      >
        <div className="text-sm lg:flex-grow">
          <Link
            to="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
          >
            About Us
          </Link>

          <Link
            to="/services"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
          >
            Services
          </Link>
          <Link
            to="/testimonials"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
          >
            Testimonials
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
