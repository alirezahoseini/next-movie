import React from "react";
import { RiSignalWifiErrorLine } from "react-icons/ri";
import InsidePagesHeader from "../InsidePagesHeader/InsidePagesHeader";

function MoviesGridLoader(props) {
  const { isLoading, error, data } = props;
  return (
    <>
      <div className="max-w-screen-2xl mx-auto ">
        <InsidePagesHeader title={"...."} />
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
