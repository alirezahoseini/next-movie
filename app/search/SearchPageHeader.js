import React, { useState } from "react";
import insde_header_bg from "@/app/files/images/inside-header-bg.jpg";
import { IoSearch } from "react-icons/io5";

function SearchPageHeader({ query, value, setValue, submitForm }) {
  const [isError, setIsError] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    if (value.length < 2) {
      setIsError(true);
      return;
    } else if (value.length >= 2) {
      setValue((prev) => {
        return { ...prev, searchedKey: value, isReplaceData: true };
      });
      setIsError(false);
      submitForm();
    }
  };
  return (
    <div
      className="h-52 bg-cover relative max-w-screen-2xl mx-auto"
      style={{ backgroundImage: `url(${insde_header_bg.src})` }}
    >
      {/* ++++ Overlay ---- */}
      <div className="w-full h-full flex-col bg-black bg-opacity-90 flex items-center justify-end gap-10">
        <form
          onSubmit={submitHandler}
          className="flex items-center justify-center gap-2 w-full"
        >
          <input
            type="text"
            minLength={2}
            required
            placeholder="Search more..."
            className="bg-slate-800 p-2 rounded-lg text-sm w-9/12 outline-none border-transparent border focus:border-blue-700"
            onChange={(e) =>
              setValue((prev) => {
                return { ...prev, apiQueris: e.target.value };
              })
            }
          />
          <button type="submit">
            <IoSearch className="bg-slate-800 text-4xl w-10 h-10 p-2 rounded-lg hover:bg-blue-700" />
          </button>
        </form>
        <h2 className="font-bold text-xl mb-5">
          <span className="opacity-70">Search results for </span>
          <span className="capitalize">{query}</span>
        </h2>
      </div>
    </div>
  );
}

export default SearchPageHeader;
