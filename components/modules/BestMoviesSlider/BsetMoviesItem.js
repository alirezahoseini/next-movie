import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoPlay } from "react-icons/io5";
import imdb_logo from '@/app/files/images/IMDB_Logo_2016.svg'

function BsetMoviesItem({ name, media_type, id, backdrop_path, vote_average, first_air_date}) {
    return (
        <>
            <Link
                href={`/${media_type}/${id}`}
                style={{ backgroundImage: `url(/api/proxy?url=https://image.tmdb.org/t/p/original${backdrop_path})` }}
                className='group w-full h-60 flex bg-cover bg-center rounded-lg items-end overflow-hidden relative'>
                {/* ---- Item body ---- */}
                <div className="transition-all duration-100 flex flex-col items-start gap-2 w-full px-4 pb-3 pt-12 bg-gradient-to-t from-black">
                    <h2 className='mt-2 text-sm text-nowrap text-ellipsis overflow-hidden w-full'>{name}</h2>
                    <div className='flex items-center justify-between w-full text-sm text-slate-500'>
                        <span>{first_air_date.slice(0, 4)}</span>
                        <span className='flex gap-2'>
                            {vote_average.toFixed(1)}
                            <img className='w-[25px]' src={imdb_logo.src} alt="" />
                        </span>
                    </div>
                </div>
                {/* ---- Item Overlay ---- */}
                <div className='absolute w-full h-full bg-black z-10 bg-opacity-0 group-hover:backdrop-blur-[3px] group-hover:bg-opacity-35 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-150'>
                    <IoPlay className='text-5xl p-3 bg-red-700 rounded-full scale-0 group-hover:scale-100 transition-all duration-150' />
                </div>
            </Link>
        </>
    )
}

export default BsetMoviesItem