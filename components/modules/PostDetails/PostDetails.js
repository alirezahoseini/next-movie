import React from "react";
import { TbCategory2, TbAlarm, TbCalendar } from "react-icons/tb";
import imdb_logo from "@/app/files/images/IMDB_Logo_2016.svg";
import Image from "next/image";

function PostDetails(props) {
  const {
    poster_path,
    name,
    title,
    vote_average,
    first_air_date,
    release_date,
    backdrop_path,
    genres,
    overview,
    runtime,
    number_of_episodes,
    params
  } = props;
  const itemName = params.details === "tv" ? name : title;
  return (
    <>
      {/* ------- start of main details --------  */}
      <div
        id="main"
        className="flex flex-col lg:flex-row w-full max-w-screen-2xl mx-auto  gap-3 lg:px-4 pt-24 pb-3 lg:pb-5"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)) , url('https://image.tmdb.org/t/p/w500${props.backdrop_path}') no-repeat center / cover`,
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
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
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
                {genres.slice(0, 3).map((a) => (
                  <span key={a.id}>{a.name},</span>
                ))}
              </span>
              <span className="flex gap-1 items-center">
                <TbAlarm className="text-lg text-slate-500" />
                {params.details === "tv"
                  ? `${number_of_episodes} episodes`
                  : `${Math.floor(runtime / 60)}h ${runtime % 60}m`}
              </span>
            </div>
            <div className="flex gap-3 lg:gap-10 text-sm items-center w-full lg:max-w-fit justify-between">
              <span className="flex gap-1 items-center">
                <TbCalendar className="text-lg text-slate-500" />
                {params.details === "tv"
                  ? first_air_date?.slice(0, 4)
                  : release_date?.slice(0, 4)}
              </span>
              <span className="flex gap-1 items-center">
                <img className="w-[30px]" src={imdb_logo.src} alt="" />
                {vote_average.toFixed(1)}
              </span>
            </div>
          </div>
          {/* End top section  */}

          {/* start of Overview  */}
          <div className="mt-3">
            <h2 className="font-bold">Overview</h2>
            <p className="text-slate-200 ">{overview}</p>
          </div>
          {/* END of Overview */}
        </div>
        {/* -- END of post body -- */}
      </div>
      {/* ------- END of main details --------  */}
    </>
  );
}

export default PostDetails;
