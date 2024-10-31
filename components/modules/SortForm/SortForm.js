import React from "react";

function SortForm({ mediaType, setSortOption }) {
  const sortItems = [
    {
      id: 3,
      name: "Popularity",
      value: "popularity.desc",
    },
    {
      id: 2,
      name: "Number of ratings",
      value: "vote_average.desc",
    },
    {
      id: 4,
      name: "Alphabetical",
      value: mediaType === "tv" ? "original_name.desc" : "original_title.desc",
    },
  ];
  return (
    <div className="max-w-screen-2xl mx-auto my-5 w-full flex items-center justify-end gap-3 px-3 text-sm">
      <span>Sort by :</span>
      <div className="relative">
        <select
          onChange={(event) => setSortOption(event.target.value)}
          className="w-full bg-slate-700 placeholder:text-slate-400 text-white text-sm border border-slate-700 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-blue-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer"
        >
          {sortItems.map((item) => (
            <option value={item.value} key={item.id}>
              {item.name}
            </option>
          ))}
        </select>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.2"
          stroke="currentColor"
          className="h-5 w-5 ml-1 absolute top-2.5 right-2.5 text-slate-100"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
          />
        </svg>
      </div>
    </div>
  );
}

export default SortForm;
