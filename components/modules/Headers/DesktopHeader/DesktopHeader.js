import React from "react";
import Link from "next/link";
import Image from "next/image";
import SearchBox from "../SearchBox/SearchBox";
import { IoSearchOutline } from "react-icons/io5";
import logo from "@/app/files/images/logo.svg";

function DesktopHeader(props) {
  return (
    <div
      className={` z-[999] fixed top-0 right-0 w-full  ${
        props.isOverlayHeader ? "bg-black border-b-2  border-slate-800" : ""
      }`}
    >
      <div className="w-full overflow-hidden p-4 items-center justify-between hidden lg:flex max-w-screen-2xl mx-auto">
        {/* ---- Logo ---- */}
        <Link href={"/"} className="flex items-center gap-2">
          <Image src={logo} width={30} height={30} alt="" />
          <h2 className="font-bold">Next Movie</h2>
        </Link>
        {/* ---- Links ---- */}
        <ul className={"flex gap-4 "}>
          <li className="border-b-4 px-2 border-transparent hover:border-red-600 transition-all duration-100">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="border-b-4 px-2 border-transparent hover:border-red-600 transition-all duration-100">
            <Link href={"/movies"}>Movies</Link>
          </li>
          <li className="border-b-4 px-2 border-transparent hover:border-red-600 transition-all duration-100">
            <Link href={"/series"}>TV series</Link>
          </li>
          {/* ---- Search button and search box ---- */}
          <button
            onClick={() => props.setIsOpenSearchBox((prevState) => !prevState)}
          >
            <IoSearchOutline className="text-2xl" />
          </button>
          <SearchBox {...props} />
        </ul>
      </div>
    </div>
  );
}

export default DesktopHeader;
