import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

function SearchBox({ setIsOpenSearchBox, isOpenSearchBox }) {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");
  const [isError, setIsError] = useState(false);

  const validator = (e) => {
    if (e.target.value.length < 2) {
      setIsError(true);
      return;
    } else if (e.target.value.length >= 2) {
      setIsError(false);
    }
  };

  const navigateHandler = (e) => {
    e.preventDefault();
    if (inputValue.length < 2) {
      return;
    } else {
      setIsOpenSearchBox(false);
      setInputValue("");
      const url = `/search?query=${inputValue}&page=1`;
      router.push(url);
    }
  };
  return (
    <div
      className={`w-[100vw] h-[100vh] fixed right-0 z-[999] flex justify-center items-end lg:items-center bottom-0 transition-all duration-100 ${
        isOpenSearchBox
          ? "visible pointer-events-auto"
          : "invisible pointer-events-none"
      }`}
    >
      {/* --- Search form ---- */}
      <div
        className={`z-[999] bg-zinc-950 h-[75%] w-full rounded-t-3xl lg:rounded-3xl pt-4 px-3 flex justify-start items-center flex-col transition-all duration-75 ${
          isOpenSearchBox ? "" : "translate-y-full"
        } lg:w-[500px] lg:h-[50vh]  lg:items-center`}
      >
        <span className="block w-3/12 h-1 rounded-full mb-7 bg-slate-800 lg:hidden"></span>
        <h2 className="font-semibold">Search In Next Movies</h2>
        <form
          onSubmit={navigateHandler}
          className={`${
            isError ? "border-red-600" : ""
          } flex items-center justify-center gap-2 p-2 rounded-full border border-transparent w-10/12 bg-zinc-900 mt-5`}
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value), validator(e);
            }}
            className={`bg-transparent border-none outline-none w-full px-2`}
          />
          <button type="submit">
            <IoSearchOutline className="text-4xl  rounded-full p-2 bg-blue-500 text-white hover:bg-blue-800" />
          </button>
        </form>
      </div>
      {/* ---- Display Overlay ---- */}
      <div
        onClick={() => setIsOpenSearchBox((prevState) => !prevState)}
        className={`absolute w-[100vw] h-[100vh] top-0 right-0 z-[1] backdrop-blur-md bg-slate-950 transition-all duration-75  cursor-pointer bg-opacity-25 ${
          isOpenSearchBox
            ? "opacity-100 visible pointer-events-auto"
            : "invisible pointer-events-none opacity-0"
        }`}
      />
    </div>
  );
}

export default SearchBox;
