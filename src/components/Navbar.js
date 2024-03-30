import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [dark, setDark] = useState(false);

  const large = useMediaQuery({ query: `(min-width: 1024px)` });

  useEffect(() => {
    if (large) {
      setNav(false);
    }
  }, [large]);

  useEffect(() => {
    let elem = document.getElementsByTagName("html");
    let mode = localStorage.getItem("class");
    if (mode === "dark") {
      elem[0].setAttribute("class", "dark");
      setDark(true);
    } else if (mode === null) {
      elem[0].removeAttribute("class");
      setDark(false);
    }
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleMode = () => {
    let elem = document.getElementsByTagName("html");
    let mode = localStorage.getItem("class");

    if (mode === null) {
      localStorage.setItem("class", "dark");
      elem[0].setAttribute("class", "dark");
      setDark(true);
    } else if (mode === "dark") {
      localStorage.removeItem("class");
      elem[0].removeAttribute("class");
      setDark(false);
    }
  };

  return (
    <div className="flex justify-between items-center h-20 sm: min-w-[500px] xl:min-w-[1240px] mx-auto px-4 text-white dark:text-black">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden z-50 dark:text-black">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-200 bg-[#000300] dark:bg-white ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>
        <li className="p-4 border-b border-gray-200">Home</li>
        <li className="p-4 border-b border-gray-200">Company</li>
        <li className="p-4 border-b border-gray-200">Resources</li>
        <li className="p-4 border-b border-gray-200">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <button
        onClick={handleMode}
        className="md:min-w-[180px] lg:min-w-[200px] sm:min-w-[160px] min-w-[100px] lg:min-h-10 md:min-h-9 sm:min-h-8 min-h-7 dark:bg-[#00df9a] bg-white text-black rounded ml-2 outline-0"
      >
        {!dark ? "Ligth mode" : "Dark mode"}
      </button>
    </div>
  );
}
