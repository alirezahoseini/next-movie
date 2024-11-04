"use client";
import React, { useEffect, useState } from "react";
import useApi from "@/hooks/useApi";
import { TbCategory2, TbAlarm, TbCalendar } from "react-icons/tb";
import imdb_logo from "@/app/files/images/IMDB_Logo_2016.svg";
import Image from "next/image";
import GlobalLoader from "@/components/modules/GlobalLoader/GlobalLoader";

function page({ params }) {
  const [postInfo, setPostInfo] = useState({
    poster_path: "",
    name: "",
    title: "",
    vote_average: 8,
    first_air_date: '2024',
    release_date: '2024',
    backdrop_path: "",
    genres: [],
    overview: "",
    runtime: 156,
  });
  const { data, error, isLoading, setApiUrl } = useApi();
  useEffect(() => {
    setApiUrl({
      value: `${params.details}/${params.id}`,
    });
  }, []);

  useEffect(() => {
    if (data?.success == false || error) {
      console.log(error);
      return;
    }
    if (data) {
      setPostInfo(data);
    }
  }, [data, error]);

  const itemName = params.details === "tv" ? postInfo.name : postInfo.title;
  console.log(postInfo);
  //   if (params.discover !== "movie" && params.discover !== "tv") {
  //     notFound();
  //     return;
  //   }
  return (
    <>
      {data && !error && (
        <>
          {/* ------- start of main details --------  */}
          <div
            id="main"
            className="flex flex-col lg:flex-row w-full max-w-screen-2xl mx-auto  gap-3 lg:px-4 pt-24 pb-3 lg:pb-5"
            style={{
              background: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)) , url('https://image.tmdb.org/t/p/w500${postInfo.backdrop_path}') no-repeat center / cover`,
            }}
          >
            {/* -- start of post image -- */}
            <div
              id="post_image"
              className="w-full flex items-center justify-start pl-4 lg:pl-0 lg:w-1/4"
            >
              <Image
                width={300}
                height={400}
                unoptimized
                src={`https://image.tmdb.org/t/p/w500${postInfo.poster_path}`}
                className="rounded-lg w-2/6 lg:w-full"
                alt={itemName}
              />
            </div>
            {/* -- END of post image -- */}

            {/* -- start of post body -- */}
            <div id="post_body" className="w-full px-4">
              {/* Start top section  */}
              <div id="top-section" className="flex flex-col  gap-2">
                <h1 className="text-4xl font-bold mb-2">{itemName}</h1>
                <div className="flex gap-3 lg:gap-10 text-sm items-center w-full lg:max-w-fit justify-between">
                  <span className="flex gap-1 items-center">
                    <TbCategory2 className="text-lg text-slate-500" />
                    {postInfo.genres.map((a) => (
                      <span key={a.id}>{a.name},</span>
                    ))}
                  </span>
                  <span className="flex gap-1 items-center">
                    <TbAlarm className="text-lg text-slate-500" />
                    {`${Math.floor(postInfo.runtime / 60)}h ${
                      postInfo.runtime % 60
                    }m`}
                  </span>
                </div>
                <div className="flex gap-3 lg:gap-10 text-sm items-center w-full lg:max-w-fit justify-between">
                  <span className="flex gap-1 items-center">
                    <TbCalendar className="text-lg text-slate-500" />
                    {params.details === "tv"
                      ? postInfo.first_air_date?.slice(0, 4)
                      : postInfo.release_date?.slice(0, 4)}
                  </span>
                  <span className="flex gap-1 items-center">
                    <img className="w-[30px]" src={imdb_logo.src} alt="" />
                    {postInfo.vote_average.toFixed(1)}
                  </span>
                </div>
              </div>
              {/* End top section  */}

              {/* start of Overview  */}
              <div className="mt-3">
                <h2 className="font-bold">Overview</h2>
                <p className="text-slate-200 ">{postInfo.overview}</p>
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
              {
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
              }
            </div>
          </div>
          {/* ------- END of Cast box --------  */}
          <GlobalLoader show={isLoading} />
        </>
      )}
    </>
  );
}

export default page;
