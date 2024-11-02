import React from "react";
import { RiSignalWifiErrorLine } from "react-icons/ri";

function MainSliderLoader(props) {
  const { isLoading, error, data } = props;
  return (
    <>
      <div className="slider-bg-img block w-full h-[90vh] bg-center bg-no-repeat bg-cover relative max-w-screen-2xl mx-auto">
        <div className="bg-slate-950 w-full h-full top-0 left-0 bg-opacity-70 z-0 absolute" />
        {!isLoading && !error && (
          //  Start Loading
          <div className="absolute z-10 top-0 left-0 w-full h-full flex flex-col-reverse lg:flex-row lg:items-center justify-center px-10 gap-5">
            <div className="lg:w-1/2">
              <h2 className="mb-4 text-xl w-44 h-5 bg-slate-900 rounded-xl animate-pulse"></h2>
              <div className="text-sm w-56 h-3 bg-slate-900 rounded-xl animate-pulse"></div>
              <span className="mt-5 inline-block bg-slate-900 px-4 text-sm py-2 rounded-full w-32 h-10 animate-pulse bg-opacity-50 mr-3"></span>
              <span className="mt-5 inline-block bg-slate-900 px-4 text-sm py-2 rounded-full w-32 h-10 animate-pulse bg-opacity-50"></span>
            </div>
            <div className="rounded-xl w-[150px] h-52 lg:h-56 lg:w-[200px] bg-slate-800 block animate-pulse"></div>
          </div>
          //   End of Loading
        )}
        {error && (
          // Error Box
          <div className="absolute z-10 top-0 left-0 w-full h-full flex  items-center justify-center px-10 flex-col">
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

export default MainSliderLoader;
