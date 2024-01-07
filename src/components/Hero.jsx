import { FaPlay } from "react-icons/fa";
import React from "react";
import Footer from "./Footer";
import Button from "./Button";
import Model1 from "../assets/model-1.jpg";
import Model2 from "../assets/model-2.jpg";
import Model3 from "../assets/model-3.jpg";
import Model4 from "../assets/model-4.jpg";
// !background
import accories1 from "../assets/accories/lotus.png";
import accories2 from "../assets/accories/shape.png";
import accories3 from "../assets/accories/square.png";
import accories4 from "../assets/accories/zigzag.png";
const Hero = () => {
  return (
    <div className="w-full bg-slate-100">
      <div className="pt-10 h-[100vh] ">
        <Footer.Yellow className="hidden md:block capitalize">
          are you & univercity or school student for an online tutoring
          prtnrship?
          <a href="#" className="text-blue-700">
            talk to us
          </a>
        </Footer.Yellow>
        <marquee className="md:hidden  text-black text-sm w-[100%] py-1 text-center font-semibold">
          are you & univercity or school student for an online tutoring
          prtnrship?
          <a href="#" className="text-blue-700">
            talk to us
          </a>
        </marquee>
        <div className="max-w-[66rem] h-auto xl:h-[88vh] mx-auto grid-cols-1 md:grid  md:grid-cols-2 md:gap-10 md:py-10 ">
          <div className="mb-20 pt-10">
            <small className="pl-1 text-red-700 font-semibold text-sm uppercase">
              100% satisfaction guarantee
            </small>
            <h2 className="capitalize text-6xl md:text-7xl font-semibold  md:w-[400px]">
              find your prfect{" "}
              <span className="underline decoration-yellow-500">tutor</span>
              <img
                className="absolute hidden xl:block w-10 left-[30rem] -mt-20 rotate-45 "
                src={accories1}
                alt="accesories background"
              />
            </h2>
            <p className="md:w-[23rem] my-4 capitalize pl-1">
              we help you find perfect tutor for 1-on-1 lessons. it is
              completely free and private
            </p>
            <div className="flex gap-2 items-center pl-1">
              <Button.Yellow className="uppercase font-bold py-2">
                get started
              </Button.Yellow>
              <Button.IconPrimary>
                <FaPlay size={10} className="fill-blue-700" />
              </Button.IconPrimary>
              <p>see how it works</p>
            </div>
          </div>
          <div className="grid grid-cols-2 xl:mb-20 gap-5 md:mb-10 xl:ml-[5.4rem]">
            <img
              src={Model1}
              alt="model 1"
              width={200}
              height={200}
              className="rounded-l-full z-10"
            />
            <img
              src={Model2}
              alt="model 2"
              width={200}
              height={200}
              className="rounded-lg z-10"
            />
            {/* 
          // ! accories baground start
           */}
            <div className="hidden xl:block absolute h-40 w-40 right-10 -mt-5 rounded-full bg-yellow-200 " />
            <div className="hidden xl:block absolute h-20 w-20 right-5 bottom-52 rounded-full bg-gray-200 " />
            <div className="hidden xl:block absolute h-20 w-20 -ml-10 bottom-7 rounded-full bg-pink-200 " />
            <img
              className="hidden xl:block absolute h-10 right-10 -mt-5 -rotate-12"
              src={accories2}
              alt="accories bacground"
            />
            <img
              className="hidden xl:block absolute h-10 right-10 mt-40 -rotate-12"
              src={accories3}
              alt="accories bacground "
            />
            <img
              className="hidden xl:block absolute h-10 w-20 -ml-16 bottom-10 rotate-12"
              src={accories4}
              alt="accories bacground"
            />
            {/* 
          // ! end 
           */}
            <img
              src={Model3}
              alt="model 3"
              width={200}
              height={200}
              className="rounded-lg z-10"
            />
            <img
              src={Model4}
              alt="model 4"
              width={200}
              height={200}
              className="rounded-r-full rounded-xl z-10"
            />
          </div>
        </div>
        <Footer.Blue className="hidden  md:block w-[100%] h-auto text-white py-6 z-50 absolute">
          <div className="flex items-center justify-between max-w-[66rem] mx-auto">
            <div>
              <p className="text-2xl font-extrabold ">870</p>
              <small>Expert titors</small>
            </div>
            <div className="border-l-2 border-blue-600  pl-5">
              <p className="text-2xl font-extrabold ">20,200+</p>
              <small>Hours tutored</small>
            </div>
            <div className="border-l-2 border-blue-600  pl-5">
              <p className="text-2xl font-extrabold ">298</p>
              <small>Subjects and courses</small>
            </div>
            <div className="border-l-2 border-blue-600  pl-5">
              <p className="text-2xl font-extrabold ">72,920</p>
              <small>Actives students</small>
            </div>
          </div>
        </Footer.Blue>
      </div>
    </div>
  );
};

export default Hero;
