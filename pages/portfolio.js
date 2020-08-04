import React, { useState } from "react";
import Card from "../src/components/card";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import Head from "next/head";
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
        <h3 className="main__title font-extrabold text-4xl">Projects</h3>
        <div className="main__projects flex justify-between p-4">
          <Card></Card>
        </div>
      </main>
    </div>
  );
};
export default Portfolio;
