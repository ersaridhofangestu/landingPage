import React from "react";
import Typografi from "../components/Typografi";
import Card from "../components/Card";
import { FaUserLarge } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { PiCoinsFill } from "react-icons/pi";
import Model5 from "../assets/model-5.jpg";
import ModelTop from "../assets/model-top.jpg";
import ModelBottom from "../assets/model-bottom.jpg";
import accories4 from "../assets/accories/zigzag.png";
const Main = () => {
  return (
    <main className="w-full bg-slate-100">
      <div className="pt-40 md:-mt-[20rem] lg:pt-96 xl:pt-40 xl:mt-0 md:grid md:grid-cols-4   max-w-[66rem] md:mx-auto pb-40">
        <section className="md:col-span-4">
          <Typografi.Header
            small="whey choose us"
            title="benefits of online tutoring services with us"
          />
        </section>
        <section className="md:col-span-4 mt-10 ">
          <div className="grid justify-center mx-auto md:grid-cols-2 xl:grid-cols-4 gap-6">
            {/* 
          // ? card 1
           */}
            <Card.Big
              title="One-on-one Teaching"
              information="All of our special education experts have a degree in special education"
            >
              <FaUserLarge className="bg-blue-800 h-10 w-10 p-2 rounded-lg fill-white" />
            </Card.Big>

            {/* 
          // ? card 2
           */}
            <Card.Big
              title="24/7 Tutor Availablitity"
              information="Our tutors are always available to respond as quick as possible for you"
            >
              <IoTime className="bg-green-600 h-10 w-10 p-2 rounded-lg fill-white" />
            </Card.Big>

            {/* 
          // ? card 3
           */}
            <Card.Big
              title="Interactive Whiteboard"
              information="Our digital whiteboard equipped with audio and vidio chat fitures"
            >
              <PiTelevisionSimpleFill className="bg-orange-600 h-10 w-10 p-2 rounded-lg fill-white" />
            </Card.Big>

            {/* 
          // ? card 4
           */}
            <Card.Big
              title="Affordable Prices"
              p="md:pb-10 lg:pb-5"
              information="Choose an expert titor on your budget and per hour"
            >
              <PiCoinsFill className="bg-pink-500 h-10 w-10 p-2 rounded-lg fill-white" />
            </Card.Big>
          </div>
        </section>
        <section className="relative col-span-4 w-full mt-20">
          <div className="md:flex gap-24">
            <div className="">
              <img
                src={Model5}
                width={1000}
                className="rounded-lg"
                alt="model 5"
              />
              <img
                src={accories4}
                alt="accesories background"
                className="absolute top-0 w-20 -rotate-45 -ml-10 xl:block hidden"
              />
            </div>
            <Typografi.Paragraf
              small="coustomize with your schedule"
              title="Personalizd Professional Online Tutor on Your Schedule"
              btn="Get started"
            />
          </div>
        </section>
        <section className="relative col-span-4 w-full mt-20">
          <div className="md:flex gap-24">
            <div className="md:order-2">
              <img
                src={ModelBottom}
                className="rounded-lg border-2 border-slate-100 w-72 -ml-16 -z-10"
                alt="model bottom"
              />
              <img
                src={ModelTop}
                className="rounded-lg -mt-52 w-72 ml-[6.3rem] md:ml-0 md:-mt-20 lg:ml-32 lg:-mt-56  xl:ml-32 border-2 border-slate-100 z-20"
                alt="model top"
              />
              <img
                src={accories4}
                alt="accesories background"
                className="absolute -top-5 rotate-12 ml-52 w-36 xl:block hidden"
              />
            </div>
            <Typografi.Paragraf
              className="md:order-1"
              wP="md:w-[34rem] w-[23rem]"
              small="coustomize with your schedule"
              title="Talented and Qualified Tutors to Serve You for Help"
              btn="Get started"
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Main;
