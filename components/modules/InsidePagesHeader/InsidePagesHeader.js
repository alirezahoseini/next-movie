import Link from 'next/link'
import React from 'react'
import insde_header_bg from '@/app/files/images/inside-header-bg.jpg'

function InsidePagesHeader({title}) {
  return (
    <div className='h-48 bg-cover relative max-w-screen-2xl mx-auto' style={{backgroundImage: `url(${insde_header_bg.src})`}}>
        {/* ++++ Overlay ---- */}
        <ul className='w-full h-full bg-black bg-opacity-70 flex justify-center items-center gap-2 text-base lg:text-lg'>
            <li>
                <Link href={'/'} >Home </Link>
            </li>
            /
            <li className=''>
                <span className='capitalize opacity-70'>{title}</span>
            </li>
        </ul>
    </div>
  )
}

export default InsidePagesHeader