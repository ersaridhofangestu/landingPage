import React from "react";
import { FaLaptopCode, FaLeaf, FaXmark } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import Button from "./Button";
import { useState, useEffect } from "react";

function Nav() {
  // ? hamburger menu
  const [toggle, setToggle] = useState(false);
  const handletoggle = () => setToggle(!toggle);

  // ? nav bg color
  const [color, setColor] = useState(false);

  const handleColor = () => {
    if (window.scrollY >= 10) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  useEffect(() => {
    handleColor();
    window.addEventListener("scroll", handleColor);
  });

  return (
    <header>
      <nav
        className={` h-10  fixed left-0 top-0 right-0 z-50 ${
          color
            ? "bg-slate-50 transition-colors duration-500 ease-in-out"
            : "bg-transparent"
        }`}
      >
        <div className="h-10 max-w-[66rem] mx-auto flex justify-between items-center ">
          <div className="flex items-center gap-1 ">
            <FaLaptopCode size={30} className="text-blue-700" />
            <h1 className="font-bold text-lg">Tutor</h1>
          </div>

          {/* 
          // ! dekstop 
          */}
          <div className="gap-6 font-medium text-gray-600 hidden xl:flex">
            <a href="#" className="text-black font-bold">
              Home
            </a>
            <a href="#">For student</a>
            <a href="#">Resouces</a>
            <a href="#">About us</a>
            <a href="#">Contact us</a>
          </div>
          <div className="hidden xl:flex">
            <Button.Light>Sign in</Button.Light>
            <Button.Primary>Register</Button.Primary>
          </div>

          {/* 
        // !Mobaile Frest }
         */}

          <div className="xl:hidden">
            <div
              className={
                toggle
                  ? "absolute left-0 top-9 pt-3 flex flex-col w-[100%] h-[100vh] text-center gap-6 font-medium text-gray-600 transition-all duration-500 ease-in-out bg-slate-100 md:gap-10"
                  : "absolute left-[-100%] top-9 pt-3 flex flex-col w-[100%] h-[100vh] text-center gap-6 font-medium text-gray-600 transition-all duration-500 ease-in-out bg-slate-100 md:gap-10"
              }
            >
              <a href="#" className="text-black font-bold">
                Home
              </a>
              <a href="#">For student</a>
              <a href="#">Resouces</a>
              <a href="#">About us</a>
              <a href="#">Contact us</a>
              <div className="pt-5 w-[60%]  mx-auto border-t-2 border-gray-300">
                <Button.Light>Sign in</Button.Light>
                <Button.Primary>Register</Button.Primary>
              </div>
            </div>
            <div onClick={handletoggle}>
              {toggle ? <FaXmark size={25} /> : <GiHamburgerMenu size={25} />}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
