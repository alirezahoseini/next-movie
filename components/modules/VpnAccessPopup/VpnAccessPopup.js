"use client";
import React, { useState, useEffect } from "react";
import { MdOutlineVpnKey } from "react-icons/md";

function VpnAccessPopup() {
  const [isOpen, setIsOpen] = useState(false);
  function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }
  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
  useEffect(() => {
    const isFirstLoad = getCookie("firstLoad");
    if (isFirstLoad !== "false") {
      setIsOpen(true);
      setCookie("firstLoad", "false", 10);
    }
  }, []);
  return (
    <>
      {isOpen && (
        <div className="fixed top-0 right-0 z-[15000] h-screen w-full bg-black bg-opacity-40 backdrop-blur-md flex items-center justify-center">
          <div className="w-10/12 lg:w-5/12 bg-slate-900 py-5 px-3 lg:px-4 rounded-2xl flex items-center justify-center flex-col">
            <MdOutlineVpnKey className="border-slate-300 border-2 p-4 rounded-xl text-8xl text-slate-200" />
            <h2 className="text-red-500 font-bold mt-5 text-2xl ">
              VPN is required
            </h2>
            <p className="text-slate-200 mt-2 text-sm lg:text-base font-bold text-center">
              To run this project, be sure to turn on your vpn so that data and
              images can be received
            </p>
            <button
              className="bg-slate-800 py-2 w-1/2 rounded-lg mt-10"
              type="button"
              onClick={() => setIsOpen(false)}
            >
              Done
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default VpnAccessPopup;
