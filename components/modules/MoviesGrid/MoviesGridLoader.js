import React from "react";
import { RiSignalWifiErrorLine } from "react-icons/ri";
import InsidePagesHeader from "../InsidePagesHeader/InsidePagesHeader";

function MoviesGridLoader(props) {
  const { isLoading, error, data } = props;
  // const loaderArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <div className="max-w-screen-2xl mx-auto ">
        <InsidePagesHeader title={"...."} />
        {!isLoading && !error && (
          //  Start Loading
          <></>
          // <div className="flex w-full flex-wrap mt-3">
          //   {loaderArray.map((item) => (
          //     <div
          //       className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 h-[70vh] p-2"
          //       key={item}
          //     >
          //       <div className="bg-slate-900 bg-opacity-25 w-full h-full rounded-lg p-2 overflow-hidden inline-block">
          //         {/* ---- Card Image ---- */}
          //         <div className="bg-slate-900 w-full h-[85%] rounded-xl animate-pulse mb-2"></div>
          //         {/* ---- Card body ---- */}
          //         <div className="bg-slate-800 h-4 w-3/4 rounded-xl animate-pulse"></div>
          //         <div className="mt-3 flex justify-between">
          //           <div className="bg-slate-800 bg-opacity-35 animate-pulse h-5 w-16 rounded-xl "></div>
          //           <div className="bg-slate-800 bg-opacity-35 animate-pulse h-5 w-16 rounded-xl "></div>
          //         </div>
          //       </div>
          //     </div>
          //   ))}
          // </div>
          //   End of Loading
        )}
        {error && (
          // Error Box
          <div className="mt-10 mb-64 w-full h-full flex  items-center justify-center px-10 flex-col">
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

export default MoviesGridLoader;
