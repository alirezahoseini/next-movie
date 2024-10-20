import React from 'react'

function SortForm() {
  return (

    <div class="max-w-screen-2xl mx-auto my-5 w-full flex items-center justify-end gap-3 px-3 text-sm">
      <span>Sort by :</span>
      <div class="relative">
        <select
          className="w-full bg-slate-700 placeholder:text-slate-400 text-white text-sm border border-slate-700 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-blue-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer">
          {/* <option value="RANKING" selected="">Ranking</option>
          <option value="USER_RATING">IMDb rating</option>
          <option value="RELEASE_DATE">Release date</option>
          <option value="USER_RATING_COUNT">Number of ratings</option>
          <option value="TITLE_REGIONAL">Alphabetical</option>
          <option value="POPULARITY">Popularity</option>
          <option value="RUNTIME">Runtime</option> */}
        </select>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" class="h-5 w-5 ml-1 absolute top-2.5 right-2.5 text-slate-100">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
        </svg>
      </div>
    </div>
  )
}

export default SortForm