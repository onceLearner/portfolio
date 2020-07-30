import React, { useState } from "react";
import Card from "../src/components/card";
import { FaArrowCircleLeft } from "react-icons/fa";
import Link from "next/link";
const Portfolio = () => {
  return (
    <div className=" p-8 ">
      <Link href="index" className="flex ">
        <a className=" text-blue-700 shadow-2xl  hover:text-red-300">
          <FaArrowCircleLeft /> back
        </a>
      </Link>
      <div id="all_cards" className="p-3 flex justify-evenly gap-3">
        <Card name="reda"></Card>
        <Card name="reda2"></Card>
      </div>
      <div className="">
        <div className="flex justify-center">
          <p>A</p>
          <p>B</p>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
