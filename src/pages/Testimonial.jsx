import React from "react";
import Typografi from "../components/Typografi";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import User1 from "../assets/user1.jpeg";
import User2 from "../assets/user2.jpeg";
import User3 from "../assets/user3.jpeg";

// !background
import accories2 from "../assets/accories/shape.png";
import accories3 from "../assets/accories/square.png";
import accories4 from "../assets/accories/zigzag.png";

const Testimonial = () => {
  return (
    <div className="py-10 bg-white border-b-8 border-blue-700">
      <Typografi.Header
        small="our testimmonials"
        title="what our students say about us"
      />
      {/* 
      // ! accories baground start
           */}
      <div className="hidden xl:block absolute h-20 w-20 -right-0  rounded-full bg-blue-200 " />
      <div className="hidden xl:block absolute h-20 w-20 rounded-full bg-pink-200 left-10  " />

      <img
        className="hidden xl:block absolute h-20 mt-36 left-10 -rotate-12"
        src={accories2}
        alt="accories bacground"
      />
      <img
        className="hidden xl:block absolute h-20 right-10  -rotate-12"
        src={accories3}
        alt="accories bacground "
      />
      <img
        className="hidden xl:block absolute h-10 w-20 -rotate-12 left-6 -mt-72"
        src={accories4}
        alt="accories bacground"
      />
      <img
        className="hidden xl:block absolute h-10 w-20 -rotate-12 right-20 -mt-40 scale-150"
        src={accories4}
        alt="accories bacground"
      />
      {/*
          // ! end 
             */}
      <div className="pt-10 ">
        <div className="flex gap-6 items-center justify-center">
          <img
            src={User1}
            alt="user testimonial"
            className="rounded-full w-16 h-16"
          />
          <img
            src={User2}
            alt="user testimonial"
            className="rounded-full w-20 border-4 border-blue-700 relative -top-2"
          />
          <img
            src={User3}
            alt="user testimonial"
            className="rounded-full w-16 h-16"
          />
        </div>
        <div className="text-center">
          <h6 className="font-bold">Albert Monica</h6>
          <small className="text-slate-500">Student in Codege</small>
          <div className="flex justify-center gap-2 mt-3">
            <IoIosStar className="fill-yellow-300" />
            <IoIosStar className="fill-yellow-300" />
            <IoIosStar className="fill-yellow-300" />
            <IoIosStar className="fill-yellow-300" />
            <IoIosStarHalf className="fill-yellow-300" />
          </div>
          <p className="w-[24rem] md:w[25rem] mx-auto pt-5 text-slate-800 capitalize">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            assumenda deleniti quasi fuga molestias alias facilis ab eaque cum
            iusto. Inventore distinctio quam cupiditate, nam id minima eos esse
            ad.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
