'use client'
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { IoPlay } from "react-icons/io5";
import imdb_logo from '@/app/files/images/IMDB_Logo_2016.svg'


function MovieCard(props) {
  const { poster_path, name, title, vote_average, first_air_date, release_date, id, type } = props;
  let itemTitle = type === 'tv' ? name : title
  return (
    <Link href={`/${type}/${id}`} className='flex flex-col group w-full rounded-lg overflow-hidden hover:bg-zinc-900 bg-transparent transition-all duration-150'>
      {/* ---- Card Image ---- */}
      <div className='relative'>
        <div className='absolute w-[97%] h-[98%] rounded-lg bg-black z-10 bg-opacity-0 group-hover:backdrop-blur-[3px] group-hover:bg-opacity-35 group-hover:m-1 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-150'>
          <IoPlay className='text-5xl p-3 bg-red-700 rounded-full scale-0 group-hover:scale-100 transition-all duration-150' />
        </div>
        <Image src={`https://image.tmdb.org/t/p/w500${poster_path}`} unoptimized width={400} height={200} alt={itemTitle} className='w-full group-hover:p-1 group-hover:rounded-xl transition-all duration-150' layout="responsive" />
      </div>
      {/* ---- Card body ---- */}
      <div className="group-hover:px-2 pb-2 transition-all duration-100 flex flex-col items-start gap-2">
        <h2 className='mt-2 text-sm text-nowrap text-ellipsis overflow-hidden w-full'>{itemTitle}</h2>
        <div className='flex items-center justify-between w-full text-sm text-slate-500'>
          <span>{type === "tv" ? first_air_date.slice(0, 4) : release_date.slice(0, 4)}</span>
          <span className='flex gap-2'>
            {vote_average.toFixed(1)}
            <img className='w-[25px]' src={imdb_logo.src} alt="" />
          </span>
        </div>
      </div>
    </Link>
  )
}

export default MovieCard

const a = {
  "backdrop_path": "/VSRmtRlYgd0pBISf7d34TAwWgB.jpg",
  "id": 194764,
  "name": "The Penguin",
  "original_name": "The Penguin",
  "overview": "Witness the The Penguin's rise to power in Gotham's criminal underworld in the aftermath of the Riddler killings.",
  "poster_path": "/a2fqompEWB2GFp9GOdlqLcfEFfw.jpg",
  "media_type": "tv",
  "adult": false,
  "original_language": "en",
  "genre_ids": [
      18,
      80
  ],
  "popularity": 1012.553,
  "first_air_date": "2024-09-19",
  "vote_average": 8.5,
  "vote_count": 210,
  "origin_country": [
      "US"
  ]
}