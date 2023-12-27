import React from "react";
import hero from "../images/illustration-working.svg";
const Hero2 = () => {
  return (
    <div className="container mx-auto flex flex-col-reverse justify-between p-8 lg:flex-row ">
      {/* content */}
      <div className="flex flex-col mx-auto space-y-6 mb-40 lg:mt-16 lg:w-1/2 xl:mb-52">
        <h2 className="text-4xl font-sans font-extrabold max-w-md text-center lg:max-w-md lg:text-left lg:text-5xl">
          More than just shorter links
        </h2>
        <p className="font-serif text-xl text-gray-400 max-w-md text-center lg:max-w-sm lg:text-left">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <div className="mx-auto lg:mx-0">
          <button className="text-white font-bold py-4 rounded-full text-xl bg-cyan w-fit px-8 lg:py-3 hover:opacity-70 ">
            Get Started
          </button>
        </div>
      </div>
      {/* image */}
      <div className="mb-24 mx-auto md:w-180 lg:w-1/2 lg:mb-0">
        <img src={hero} alt="" className="h-80 lg:h-96" />
      </div>
    </div>
  );
};

export default Hero2;
