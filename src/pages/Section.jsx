import React from "react";
import Typografi from "../components/Typografi";
import Card from "../components/Card";
import {
  MdEngineering,
  MdScience,
  MdOutlineWeb,
  MdOutlineAccessTimeFilled,
} from "react-icons/md";
import { FaCode, FaBinoculars } from "react-icons/fa";
import { IoLanguageSharp, IoBody } from "react-icons/io5";
const Section = () => {
  return (
    <div className="py-20 bg-white">
      <Typografi.Header
        small="our tutor subjects"
        title="find online tutor in any subject"
      />
      <div className="md:grid md:grid-cols-4 mt-10 max-w-[66rem] md:mx-auto gap-2">
        <Card.Small title="Egineering">
          <MdEngineering className="bg-blue-200 w-10 h-10 p-2 rounded-lg fill-blue-700" />
        </Card.Small>
        <Card.Small title="Programming">
          <FaCode className="bg-green-200 w-10 h-10 p-2 rounded-lg fill-green-700" />
        </Card.Small>
        <Card.Small title="Languages">
          <IoLanguageSharp className="bg-purple-200 w-10 h-10 p-2 rounded-lg fill-purple-700" />
        </Card.Small>
        <Card.Small title="Science">
          <MdScience className="bg-emerald-200 w-10 h-10 p-2 rounded-lg fill-emerald-700" />
        </Card.Small>
        <Card.Small title="History">
          <FaBinoculars className="bg-orange-200 w-10 h-10 p-2 rounded-lg fill-orange-700" />
        </Card.Small>
        <Card.Small title="Psycology">
          <IoBody className="bg-sky-200 w-10 h-10 p-2 rounded-lg fill-sky-700" />
        </Card.Small>
        <Card.Small title="Web Design">
          <MdOutlineWeb className="bg-yellow-200 w-10 h-10 p-2 rounded-lg fill-yellow-700" />
        </Card.Small>
        <Card.Small title="Egineering">
          <MdOutlineAccessTimeFilled className="bg-gray-200 w-10 h-10 p-2 rounded-lg fill-gray-700" />
        </Card.Small>
      </div>
    </div>
  );
};

export default Section;
