import React from "react";
import logo from "../images/logo.svg";
import fb from "../images/icon-facebook.svg";
import insta from "../images/icon-instagram.svg";
import pinterest from "../images/icon-pinterest.svg";
import twitter from "../images/icon-twitter.svg";

const CTAFooter = () => {
  return (
    <>
      {/* CTA  */}
      <div className="py-24 bg-darkViolet" id="cta">
        <div className="flex flex-col p-2 space-y-6">
          <h2 className="mx-auto text-white font-bold text-3xl md:text-4xl">
            Boost your links today
          </h2>
          <button className="text-white text-2xl bg-cyan w-fit mx-auto px-6 py-4 rounded-full hover:opacity-70 md:text-base md:py-3 focus:outline-none">
            Get Started
          </button>
        </div>
      </div>

      {/* Footer */}

      <footer className="py-16 bg-veryDarkViolet font-serif">
        <div className="container flex flex-col justify-between items-center mx-auto md:flex-row p-6 space-y-16 md:space-y-0 md:items-start">
          {/* logo */}
          <img src={logo} alt="logo" className="h-8 mx-auto lg:mx-0 my-6" />
          {/* menu */}
          <div className="flex flex-col space-y-16 mx-auto md:flex-row justify-between text-center md:text-left md:space-x-20 md:space-y-0">
            {/* menu - features */}
            <div className="flex flex-col space-y-4 mb-6 md:mb-0">
              <h3 className="text-white text-sm">Features</h3>
              <p className="text-gray-400 text-sm hover:text-cyan cursor-pointer">
                Link Shortening
              </p>
              <p className="text-gray-400 text-sm hover:text-cyan cursor-pointer">
                Branding Links
              </p>
              <p className="text-gray-400 text-sm hover:text-cyan cursor-pointer">
                Analytics
              </p>
            </div>
            {/* menu - resources */}
            <div className="flex flex-col space-y-4 mb-6 md:mb-0">
              <h3 className="text-white font-bold text-sm ">Resources</h3>
              <p className="text-gray-400 text-sm hover:text-cyan cursor-pointer">
                Blog
              </p>
              <p className="text-gray-400 text-sm hover:text-cyan cursor-pointer">
                Developers
              </p>
              <p className="text-gray-400 text-sm hover:text-cyan cursor-pointer">
                Support
              </p>{" "}
            </div>
            {/* menu - company */}
            <div className="flex flex-col space-y-4 mb-6 md:mb-0">
              <h3 className="text-white font-bold text-sm ">Company</h3>
              <p className="text-gray-400 text-sm hover:text-cyan cursor-pointer">
                About
              </p>
              <p className="text-gray-400 text-sm hover:text-cyan cursor-pointer">
                Our Team
              </p>
              <p className="text-gray-400 text-sm hover:text-cyan cursor-pointer">
                Careers
              </p>
              <p className="text-gray-400 text-sm hover:text-cyan cursor-pointer">
                Contact
              </p>
            </div>
          </div>
          {/* social media icons */}
          <div className="">
            <div className="flex space-x-4 items-center justify-center">
              <img src={fb} alt="" className="h-6 w-6 cursor-pointer ficon" />
              <img
                src={insta}
                alt=""
                className="h-6 w-6 cursor-pointer ficon"
              />
              <img
                src={twitter}
                alt=""
                className="h-6 w-6 cursor-pointer ficon"
              />
              <img
                src={pinterest}
                alt=""
                className="h-6 w-6 cursor-pointer ficon"
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default CTAFooter;
