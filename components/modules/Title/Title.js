import Link from 'next/link'
import React from 'react'
import { GoArrowRight } from "react-icons/go";


function Title({title, href, moreTitle = "Show more"}) {
  return (
    <div className='max-w-screen-2xl mx-auto flex items-center my-2 text-lg justify-between'>
        <h2 className='font-bold '>{title}</h2>
        <Link className='flex items-center gap-1 text-[14px] border py-1 px-3 rounded-md text-slate-500 border-slate-700 hover:text-slate-300 hover:border-slate-300 ' href={href} >
        {moreTitle}
        <GoArrowRight className='text-lg'/>
        </Link>
    </div>
  )
}

export default Title