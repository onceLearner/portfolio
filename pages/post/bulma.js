import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import Head from "next/head";
const Bulma = () => {
  return (
    <div className="portfolio ">
      <Head>
        <title> issati | bulma post</title>
      </Head>
      <div className="return">
        <Link className="return__link           underline bg-blue" href="index">
          <a className="Portfolio__back_link text-blue-800  flex items-center  hover:text-purple-400">
            <FaArrowLeft size={12} />
            <p className="ml-2 text-sm">return</p>
          </a>
        </Link>
      </div>
      <div className="main"> the bulma post here </div>
    </div>
  );
};
export default Bulma;
