import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import { TbMoodSadSquint } from "react-icons/tb";

function MoviesGrid({ items }) {
  return (
    <div className="flex flex-wrap mt-4 max-w-screen-2xl mx-auto">
      {items.length == 0 ? (
        <div className="flex w-full items-center justify-center flex-col gap-2 h-64 ">
          <TbMoodSadSquint className="text-slate-600 text-8xl" />
          <span className="font-bold text-sm text-slate-300">
            Nothing found.!
          </span>
        </div>
      ) : (
        items.map((item) => (
          <div
            key={item.id}
            className="w-1/2 md:w-4/12 lg:w-3/12 xl:w-3/12 p-3"
          >
            <MovieCard {...item} />
          </div>
        ))
      )}
    </div>
  );
}

export default MoviesGrid;
