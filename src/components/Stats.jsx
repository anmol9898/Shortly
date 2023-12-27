import React from "react";
import brandRecognition from "../images/icon-brand-recognition.svg";
import detailedRecords from "../images/icon-detailed-records.svg";
import fullyCustomizable from "../images/icon-fully-customizable.svg";

const Stats = () => {
  return (
    <div className="py-20 bg-gray-100">
      {/* adv container + 3boxes */}
      <div className="flex flex-col space-y-20 ">
        {/* inner title box */}
        <div className="flex flex-col space-y-6 items-center justify-center">
          <h2 className="text-2xl font-bold ">Advanced Statistics</h2>
          <p className="text-gray-400 text-sm font-serif text-center max-w-sm md:max-w-md mb-20">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>

        {/* features box section */}

        <div className="relative container mx-auto flex flex-col justify-between items-center space-y-14 md:flex-row md:space-y-0 md:space-x-7 pb-32">
            
          {/*horiontal line */}
          <div className="hidden absolute top-24 left-16 h-3 bg-cyan md:block w-10/12"></div>

          {/*vertical line */}
          <div className="absolute w-2 h-3/4 -ml-1 bg-cyan md:hidden"></div>

          {/* card 1 */}
          <div className="relative pt-10 max-w-sm bg-white rounded-md p-4 ">
            {/* img container */}
            <div className="flex justify-center md:justify-start items-center">
              <div className="bg-blue-900 w-fit rounded-full p-2 -mt-16 mb-6  ">
                <img src={brandRecognition} className="" alt="" />
              </div>
            </div>
            {/* text container */}
            <h2 className="text-center pb-6 md:text-left">Brand Recognition</h2>
            <p className="text-gray-500 text-sm font-serif text-center md:text-left">
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>

          {/* card 2 */}

          <div className="relative pt-10 max-w-sm bg-white rounded-md p-4 md:mt-8">
            {/* img container */}
            <div className="flex justify-center md:justify-start items-center">
              <div className="bg-blue-900 w-fit rounded-full p-2 -mt-16 mb-6  ">
                <img src={detailedRecords} className="" alt="" />
              </div>
            </div>
            {/* text container */}
            <h2 className="text-center pb-6 md:text-left">Detailed Records</h2>
            <p className="text-gray-500 text-sm font-serif text-center md:text-left">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>

          {/* card 3 */}

          <div className="relative pt-10 max-w-sm bg-white rounded-md p-4">
            {/* img container */}
            <div className="flex justify-center md:justify-start items-center">
              <div className="bg-blue-900 w-fit rounded-full p-2 -mt-16 mb-6  ">
                <img src={fullyCustomizable} className="" alt="" />
              </div>
            </div>
            {/* text container */}
            <h2 className="text-center pb-6 md:text-left">
              Fully Customizable
            </h2>
            <p className="text-gray-500 text-sm font-serif text-center md:text-left">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
