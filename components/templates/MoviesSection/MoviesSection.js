'use client'
import BestMoviesSlider from '@/components/modules/BestMoviesSlider/BestMoviesSlider'
import Carousel from '@/components/modules/Carousel/Carousel'
import MovieCard from '@/components/modules/MovieCard/MovieCard'
import React from 'react'

function MoviesSection({trendingSeries}) {
  return (
    <>
      {/* <Carousel >
        <MovieCard />
      </Carousel> */}
      <BestMoviesSlider items={trendingSeries} title="Trending Series" moreTitle="Show more" moreHref={'series'} />
      {/* <Carousel >
        <MovieCard />
      </Carousel> */}

    </>
  )
}

export default MoviesSection