import Head from "next/head";
import Link from "next/link";

import React, { useState } from "react";
import { FaTwitch, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import Posts from "../src/components/posts";

export default function Home() {
  const [Counter, setCounter] = useState(0);
  return (
    <div className="container">
      <Head>
        <title>Issati</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div id="containerOfPage" className="mx-auto p-4">
          <div id="card">
            <div className="text-center text-2xl font-sans" id="Yetanother">
              <h1>
                <h5 id="issatiText">ISSATI </h5>| Yet Another Dev
              </h1>
            </div>
            <div className="w-16 h-10 mx-auto  mt-4 " id="contImage">
              <img src="/issati.jpg" className="rounded-full"></img>
            </div>
            <div
              id="personalCard"
              className=" rounded-lg  max-w-screen-lg mx-auto transform scale-75"
            >
              <div className="text-center">
                <h3 className="text-xl font-thin">MOHAMMED EL ISSATI </h3>
                <p className="p-2 font-hairline ">
                  software Engineer student | Web Ethusiast | React lover{" "}
                  <br></br>shares articles, tutorials and his thoughts on
                  various things.
                </p>
              </div>
              <div className="text-center p-2">
                <Link href="portfolio" className="">
                  <a className="text-blue-600 underline px-4">Portfolio</a>
                </Link>
                <Link href="cv">
                  <a className="text-blue-500 underline">CV</a>
                </Link>
              </div>

              <div className="flex items-center m-3 " id="socialCont">
                <p className=""> Join me !</p>
                <a href="https://www.linkedin.com/in/mohammed-el-issati-2a62a3123/">
                  <FaLinkedin
                    color="#0e76a8"
                    size={22}
                    className="mt-1 ml-5 mr-3"
                  />{" "}
                </a>
                <a href="https://twitter.com/redaamir972">
                  <FaTwitter color="#00acee" size={22} className="mt-1 mr-3" />{" "}
                </a>
                <a href="https://github.com/oncelearner">
                  <FaGithub className="mt-1" size={22} />{" "}
                </a>
              </div>
            </div>
          </div>
          <div id="postsCont" className="p-3 m-5">
            <h4 className="font-bold text-lg border-l-2 border-blue-400 pl-2 mt-3">
              Articles
            </h4>
            <Posts></Posts>
          </div>
        </div>
      </main>
    </div>
  );
}
