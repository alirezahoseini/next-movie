'use client'
import BestMoviesSlider from '@/components/modules/BestMoviesSlider/BestMoviesSlider'
import Carousel from '@/components/modules/Carousel/Carousel'
import React from 'react'

function MoviesSection(props) {
  const {trendingSeries, onAirSeries, trendingMovies, popularMovies} = props;
  return (
    <>
      <Carousel type={'movie'} items={trendingMovies} title="Trend movies" moreTitle="Show more" moreHref={'movies'}/>
      <BestMoviesSlider type={'tv'} items={trendingSeries} title="Trend Series" moreTitle="Show more" moreHref={'series'} />
      <Carousel type={'tv'} items={onAirSeries} title="On air Series" moreTitle="Show more" moreHref={'series'}/>
      <Carousel type={'movie'} items={popularMovies} title="Popular movies" moreTitle="Show more" moreHref={'movies'}/>
    </>
  )
}

export default MoviesSection