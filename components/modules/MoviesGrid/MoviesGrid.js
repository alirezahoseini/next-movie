import React from "react";
import MovieCard from "../MovieCard/MovieCard";

function MoviesGrid({ items }) {
  return (
    <div className="flex flex-wrap mt-4 max-w-screen-2xl mx-auto">
      {items.map((item) => (
        <div key={item.id} className="w-1/2 md:w-4/12 lg:w-3/12 xl:w-3/12 p-3">
          <MovieCard {...item} />
        </div>
      ))}
    </div>
  );
}

export default MoviesGrid;
