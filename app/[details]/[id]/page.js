"use client";
import React, { useEffect } from "react";
import useApi from "@/hooks/useApi";
import { TbCategory2, TbAlarm, TbCalendar } from "react-icons/tb";
import imdb_logo from "@/app/files/images/IMDB_Logo_2016.svg";
import Image from "next/image";

function page({ params }) {
  // const { data, error, isLoading, setApiUrl } = useApi();
  // useEffect(() => {
  //   setApiUrl({
  //     value: `${params.details}/${params.id}`,
  //   });
  // }, []);

  // useEffect(() => {
  //   // if(data?.)
  //   if (data?.success == false || error) {
  //     console.log(error);
  //     return;
  //   }
  //   if (data) {
  //     console.log(data);
  //   }
  // }, [data, error]);

  //   if (params.discover !== "movie" && params.discover !== "tv") {
  //     notFound();
  //     return;
  //   }
  return (
    <>
      {/* ------- start of main details --------  */}
      <div
        id="main"
        className="flex flex-col lg:flex-row w-full max-w-screen-2xl mx-auto  gap-3 lg:px-4 pt-24 pb-3 lg:pb-5"
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)) , url('https://media.themoviedb.org/t/p/w1000_and_h450_multi_faces/lTYGtgDRygku7iiFLWyiEc4wLzz.jpg') no-repeat center / cover",
        }}
      >
        {/* -- start of post image -- */}
        <div
          id="post_image"
          className="w-full flex items-center justify-start pl-4 lg:pl-0 lg:w-1/4"
        >
          <img
            src="https://media.themoviedb.org/t/p/w300_and_h450_bestv2/b5Qx4r8IcZ2gxWk5CoPWmdb6LgP.jpg"
            className="rounded-lg w-2/6 lg:w-full"
          />
        </div>
        {/* -- END of post image -- */}

        {/* -- start of post body -- */}
        <div id="post_body" className="w-full px-4">
          {/* Start top section  */}
          <div id="top-section" className="flex flex-col  gap-2">
            <h1 className="text-4xl font-bold mb-2">this is a title</h1>
            <div className="flex gap-3 lg:gap-10 text-sm items-center w-full lg:max-w-fit justify-between">
              <span className="flex gap-1 items-center">
                <TbCategory2 className="text-lg text-slate-500" /> Action,
                Fantasy, Horror
              </span>
              <span className="flex gap-1 items-center">
                <TbAlarm className="text-lg text-slate-500" /> 1h 57m
              </span>
            </div>
            <div className="flex gap-3 lg:gap-10 text-sm items-center w-full lg:max-w-fit justify-between">
              <span className="flex gap-1 items-center">
                <TbCalendar className="text-lg text-slate-500" /> 2024
              </span>
              <span className="flex gap-1 items-center">
                <img className="w-[30px]" src={imdb_logo.src} alt="" />
                8.6
              </span>
            </div>
          </div>
          {/* End top section  */}

          {/* start of Overview  */}
          <div className="mt-3">
            <h2 className="font-bold">Overview</h2>
            <p className="text-slate-200 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="mt-5">
              <ul className="flex flex-wrap w-full lg:w-8/12 justify-between items-start gap-y-3 ">
                <li className="flex flex-col text-sm w-1/2 lg:w-1/3">
                  <h3 className="font-bold">Name mjjii</h3>
                  <span className="text-sm text-slate-300">Director</span>
                </li>
                <li className="flex flex-col text-sm w-1/2 lg:w-1/3">
                  <h3 className="font-bold">Name mjjii</h3>
                  <span className="text-sm text-slate-300">Novel</span>
                </li>
                <li className="flex flex-col text-sm w-1/2 lg:w-1/3">
                  <h3 className="font-bold">Name mjjii</h3>
                  <span className="text-sm text-slate-300">Screenplay</span>
                </li>
              </ul>
            </div>
          </div>
          {/* END of Overview */}
        </div>
        {/* -- END of post body -- */}
      </div>
      {/* ------- END of main details --------  */}

      {/* ------- start of Cast box --------  */}
      <div
        id="cast-box"
        className="max-w-screen-2xl mx-auto px-4 w-full overflow-hidden"
      >
        <h2 className="font-bold my-4">Top Billed Cast</h2>
        <div
          id="slides-wrapper"
          className="whitespace-nowrap overflow-x-auto
          pb-4
        [&::-webkit-scrollbar]:h-2
        lg:[&::-webkit-scrollbar]:h-4
        [&::-webkit-scrollbar-track]:rounded-full
        [&::-webkit-scrollbar-track]:bg-gray-700
        [&::-webkit-scrollbar-thumb]:rounded-full
        [&::-webkit-scrollbar-thumb]:bg-gray-600
        dark:[&::-webkit-scrollbar-track]:bg-neutral-900
        dark:[&::-webkit-scrollbar-thumb]:bg-neutral-800
        "
        >
          <div className="bg-gray-950 max-w-fit rounded-md overflow-hidden w-[138px] inline-block mx-3">
            <Image
              src={
                "https://media.themoviedb.org/t/p/w138_and_h175_face/iIwGt05vG5smGDiLJ7f6bMRQOOY.jpg"
              }
              width={138}
              height={175}
              alt=""
              unoptimized
            />
            <h4 className="font-bold text-sm p-3 text-wrap">
              Francisco Ortiz ddddd ddd
            </h4>
          </div>
          <div className="bg-gray-950 max-w-fit rounded-md overflow-hidden w-[138px] inline-block mx-3">
            <Image
              src={
                "https://media.themoviedb.org/t/p/w138_and_h175_face/iIwGt05vG5smGDiLJ7f6bMRQOOY.jpg"
              }
              width={138}
              height={175}
              alt=""
              unoptimized
            />
            <h4 className="font-bold text-sm p-3 text-wrap">
              Francisco Ortiz ddddd ddd
            </h4>
          </div>
          <div className="bg-gray-950 max-w-fit rounded-md overflow-hidden w-[138px] inline-block mx-3">
            <Image
              src={
                "https://media.themoviedb.org/t/p/w138_and_h175_face/iIwGt05vG5smGDiLJ7f6bMRQOOY.jpg"
              }
              width={138}
              height={175}
              alt=""
              unoptimized
            />
            <h4 className="font-bold text-sm p-3 text-wrap">
              Francisco Ortiz ddddd ddd
            </h4>
          </div>
          <div className="bg-gray-950 max-w-fit rounded-md overflow-hidden w-[138px] inline-block mx-3">
            <Image
              src={
                "https://media.themoviedb.org/t/p/w138_and_h175_face/iIwGt05vG5smGDiLJ7f6bMRQOOY.jpg"
              }
              width={138}
              height={175}
              alt=""
              unoptimized
            />
            <h4 className="font-bold text-sm p-3 text-wrap">
              Francisco Ortiz ddddd ddd
            </h4>
          </div>
          <div className="bg-gray-950 max-w-fit rounded-md overflow-hidden w-[138px] inline-block mx-3">
            <Image
              src={
                "https://media.themoviedb.org/t/p/w138_and_h175_face/iIwGt05vG5smGDiLJ7f6bMRQOOY.jpg"
              }
              width={138}
              height={175}
              alt=""
              unoptimized
            />
            <h4 className="font-bold text-sm p-3 text-wrap">
              Francisco Ortiz ddddd ddd
            </h4>
          </div>
        </div>
      </div>
      {/* ------- END of Cast box --------  */}
    </>
  );
}

export default page;
