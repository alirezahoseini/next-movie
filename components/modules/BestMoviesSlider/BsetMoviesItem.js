import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoPlay } from "react-icons/io5";

function BsetMoviesItem({ title, id, url, poster, score = 7.3 }) {
    return (
        <>
            <Link
                href={url}
                style={{ backgroundImage: `url(${poster})` }}
                className='group w-full h-60 flex bg-cover bg-center rounded-lg items-end overflow-hidden relative'>
                {/* ---- Item body ---- */}
                <div className="transition-all duration-100 flex flex-col items-start gap-2 w-full px-4 pb-3 pt-12 bg-gradient-to-t from-black">
                    <h2 className='mt-2 text-sm text-nowrap text-ellipsis overflow-hidden w-full'>{title}</h2>
                    <div className='flex items-center justify-between w-full text-sm text-slate-500'>
                        <span>2023</span>
                        <span className='flex gap-2'>
                            {score}
                            <img className='w-[25px]' src="IMDB_Logo_2016.svg" alt="" />
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