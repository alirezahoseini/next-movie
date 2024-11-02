import React from "react";
import { RiSignalWifiErrorLine } from "react-icons/ri";

function BestMoviesSliderLoader(props) {
  const { isLoading, error, data } = props;
  const loaderArray = [1, 2, 3, 4, 5];
  return (
    <>
      <div className="mt-8 px-3 max-w-screen-2xl mx-auto">
        {!isLoading && !error && (
          //  Start Loading
          <div className="whitespace-nowrap overflow-x-hidden w-full ">
            {loaderArray.map((item) => (
              <div
                key={item}
                className="bg-slate-900 bg-opacity-25 w-full md:w-[500px]  rounded-lg p-2 overflow-hidden inline-block mx-2"
              >
                {/* ---- Card body ---- */}
                <div className="bg-slate-800 h-4 w-3/4 rounded-xl animate-pulse mt-32"></div>
                <div className="mt-3 flex justify-between">
                  <div className="bg-slate-800 bg-opacity-35 animate-pulse h-5 w-16 rounded-xl "></div>
                  <div className="bg-slate-800 bg-opacity-35 animate-pulse h-5 w-16 rounded-xl "></div>
                </div>
              </div>
            ))}
          </div>
          //   End of Loading
        )}
        {error && (
          // Error Box
          <div className=" w-full h-full flex  items-center justify-center px-10 flex-col">
            <RiSignalWifiErrorLine className="text-4xl bg-red-900 bg-opacity-30 w-28 h-28 p-5 rounded-lg text-red-300" />
            <h2 className="font-bold text-lg mt-3">Failed to load</h2>
            <p className="text-base text-slate-200">
              Please try again with vpn
            </p>
          </div>
          //   End of Error Box
        )}
      </div>
    </>
  );
}

export default BestMoviesSliderLoader;
