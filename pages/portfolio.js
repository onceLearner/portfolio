import React, { useState } from "react";
import Card from "../src/components/card";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import Head from "next/head";
import { Projects } from "../src/store/projects/projects";
const Portfolio = () => {
  return (
    <div className="portfolio ">
      <Head>
        <title> issati | portfolio</title>
      </Head>
      <div className="return">
        <Link className="return__link           underline bg-blue" href="index">
          <a className="Portfolio__back_link text-blue-800  flex items-center  hover:text-purple-400">
            <FaArrowLeft size={12} />
            <p className="ml-2 text-sm">return</p>
          </a>
        </Link>
      </div>

      <main className="main p-6">
        <h3 className="main__page-title  font-extrabold text-4xl">Projects</h3>
        <div className="main__projects   md:flex flex-wrap gap-5 justify-evenly p-4">
          {Projects.map((project) => (
            <Card project={project} className="w-1/2" />
          ))}
        </div>
      </main>
    </div>
  );
};
export default Portfolio;
