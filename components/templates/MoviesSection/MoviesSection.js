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
        moreHref={"discover/movie"}
      />
      <BestMoviesSlider
        type={"tv"}
        url={{
          value: "trending/tv/week",
          queries: false,
        }}
        title="Trend Series"
        moreTitle="Show more"
        moreHref={"discover/tv"}
      />
      <Carousel
        type={"tv"}
        url={{
          value: "tv/on_the_air",
          queries: false,
        }}
        title="On Air Series"
        moreTitle="Show more"
        moreHref={"discover/tv"}
      />
      <Carousel
        type={"movie"}
        url={{
          value: "movie/popular",
          queries: false,
        }}
        title="Popular movies"
        moreTitle="Show more"
        moreHref={"discover/movie"}
      />
    </>
  );
}

export default MoviesSection;
