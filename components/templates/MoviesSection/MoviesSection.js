"use client";
import BestMoviesSlider from "@/components/modules/BestMoviesSlider/BestMoviesSlider";
import Carousel from "@/components/modules/Carousel/Carousel";
import React from "react";

function MoviesSection(props) {
  const { trendingSeries, onAirSeries, trendingMovies, popularMovies } = props;
  return (
    <>
      <Carousel
        type={"movie"}
        url={{
          value: "trending/movie/week",
          queries: false,
        }}
        title="Trend movies"
        moreTitle="Show more"
        moreHref={"movie"}
      />
      {/* <BestMoviesSlider
        type={"tv"}
        items={trendingSeries}
        title="Trend Series"
        moreTitle="Show more"
        moreHref={"series"}
      /> */}
      <Carousel
        type={"tv"}
        url={{
          value: "tv/on_the_air",
          queries: false,
        }}
        title="On Air Series"
        moreTitle="Show more"
        moreHref={"tv"}
      />
      <Carousel
        type={"movie"}
        url={{
          value: "movie/popular",
          queries: false,
        }}
        title="Popular movies"
        moreTitle="Show more"
        moreHref={"movie"}
      />
    </>
  );
}

export default MoviesSection;
