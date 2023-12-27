import React, { useState } from "react";
import logo from "../images/logo.svg";

const Navbar2 = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    // navbar container
    <div className="my-7 mx-auto px-6 bg-white flex justify-between items-center ">
      {/* menu */}
      <div className="flex space-x-10">
        <div className="cursor-pointer">
          <img src={logo} alt="" />
        </div>
        <ul className="hidden lg:flex items-center space-x-6 text-gray-500 font-bold text-sm [&>*]:cursor-pointer">
          <li className="hover:text-black">Features</li>
          <li className="hover:text-black">Pricing</li>
          <li className="hover:text-black">Resources</li>
        </ul>
      </div>
      {/* login buttons */}
      <div className="hidden lg:flex items-center space-x-5">
        <button className="text-gray-500 font-bold">Login</button>
        <button className="text-white font-bold px-5 py-3 rounded-full bg-cyan hover:opacity-70">
          Sign Up
        </button>
      </div>

      {/* hamburger button */}
      <button
        id="menu-btn"
        className={`${
          menuOpen ? "open" : ""
        } block hamburger lg:hidden focus:outline-none`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </button>

      {/* mobile menu */}
      <div
        id="menu"
        className={`${
          menuOpen ? "block" : "hidden"
        } absolute p-6 rounded-lg bg-purple-800 left-6 right-6 top-20 z-100"`}
      >
        <div className="flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm">
          <a href="" className="w-full text-center">
            Features
          </a>
          <a href="" className="w-full text-center">
            Pricing
          </a>
          <a href="" className="w-full text-center">
            Resources
          </a>
          <a
            href=""
            className="w-full pt-6 border-t border-gray-400 text-center"
          >
            Login
          </a>
          <a href="" className="w-full py-3 text-center rounded-full bg-cyan">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
