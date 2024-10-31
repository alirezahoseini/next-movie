import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SlMenu } from "react-icons/sl";
import { TbMovie } from "react-icons/tb";
import { MdOutlineLiveTv } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import logo from "@/app/files/images/logo.svg";
import SearchBox from "../SearchBox/SearchBox";

function MobileHeader(props) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <div
      className={`fixed top-0 right-0 w-full z-50 flex items-center justify-between p-4 overflow-hidden lg:hidden  ${
        props.isOverlayHeader ? "bg-black border-b-2 border-slate-800" : ""
      }`}
    >
      {/* ---- Logo ---- */}
      <Link href={"/"} className="flex items-center gap-2">
        <Image src={logo} width={30} height={30} alt="" />
        <h2 className="font-bold">Next Movie</h2>
      </Link>
      {/* ---- Buttons ---- */}
      <div className="flex items-center gap-6">
        <button
          onClick={() => props.setIsOpenSearchBox((prevState) => !prevState)}
        >
          <IoSearchOutline className="text-2xl" />
        </button>
        <SearchBox {...props} />
        <button onClick={() => setIsOpenMenu((prevState) => !prevState)}>
          <SlMenu className="text-2xl" />
        </button>
      </div>
      {/* ---- Hamberger Menu ---- */}
      <div
        className={`${
          isOpenMenu ? "translate-x-0" : "translate-x-[100%]"
        } right-0
             fixed top-0 z-[1000] bg-zinc-950 w-[60vw] md:w-[40vw] h-[100vh] p-5 transition-all duration-75 `}
      >
        {/* ---- Logo ---- */}
        <Link
          onClick={() => setIsOpenMenu((prevState) => !prevState)}
          href={"/"}
          className="flex items-center gap-2"
        >
          <Image src={logo} width={30} height={30} alt="" />
          <h2 className="font-bold text-slate-300">Next Movie</h2>
        </Link>
        {/* ---- Links ---- */}
        <ul className={""}>
          <li onClick={() => setIsOpenMenu((prevState) => !prevState)}>
            <Link href={"/"} className="flex items-center gap-2 mt-5 p-2">
              <AiOutlineHome style={{ fontSize: "1.5rem" }} />
              Home
            </Link>
          </li>
          <li onClick={() => setIsOpenMenu((prevState) => !prevState)}>
            <Link href={"/movie"} className="flex items-center gap-2 mt-3 p-2">
              <TbMovie style={{ fontSize: "1.5rem" }} />
              Movies
            </Link>
          </li>
          <li onClick={() => setIsOpenMenu((prevState) => !prevState)}>
            <Link href={"/tv"} className="flex items-center gap-2 mt-3 p-2">
              <MdOutlineLiveTv style={{ fontSize: "1.5rem" }} />
              TV series
            </Link>
          </li>
        </ul>
      </div>
      {/* ---- Display Overlay ---- */}
      <div
        onClick={() => setIsOpenMenu((prevState) => !prevState)}
        className={`fixed w-[100vw] h-[100vh] top-0 right-0 z-[999] backdrop-blur-md bg-slate-950 transition-all duration-75  cursor-pointer bg-opacity-25 ${
          isOpenMenu ? "" : "invisible pointer-events-none opacity-0"
        }`}
      />
    </div>
  );
}

export default MobileHeader;
