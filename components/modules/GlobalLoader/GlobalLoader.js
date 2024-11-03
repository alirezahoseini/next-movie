import Image from "next/image";
import React from "react";
import loaderGif from "@/app/files/images/loading-dots.svg";

function GlobalLoader({ show }) {
  return (
    <div
      className={`${
        show === true ? " pointer-events-auto" : "pointer-events-none invisible"
      } fixed top-0 right-0 w-screen h-screen bg-black z-[11] bg-opacity-40 flex items-center justify-center backdrop-blur-md`}
    >
      <div className="p-5 w-1/2 md:w-72 bg-white rounded-xl flex items-center justify-center flex-col gap-0">
        <img src={loaderGif.src} className="w-16 text-red-500" alt="" />
        <span className="font-bold text-base text-slate-700">Please wait</span>
      </div>
    </div>
  );
}

export default GlobalLoader;
