'use client'
import BestMoviesSlider from '@/components/modules/BestMoviesSlider/BestMoviesSlider'
import Carousel from '@/components/modules/Carousel/Carousel'
import MovieCard from '@/components/modules/MovieCard/MovieCard'
import React from 'react'

function MoviesSection() {
  return (
    <>
      <Carousel >
        <MovieCard />
      </Carousel>
      <BestMoviesSlider />
      <Carousel >
        <MovieCard />
      </Carousel>

    </>
  )
}

export default MoviesSection