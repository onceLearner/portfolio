import Head from "next/head";
import Link from "next/link";
import { myposts } from "../src/store/posts/myposts";
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
              <h1 className="flex justify-center">
                <h5 id="issatiText" className="mr-3">
                  ISSATI
                </h5>
                | Yet Another Dev
              </h1>
            </div>

            <div
              id="personalCard"
              className="flex   items-center    md:border  rounded-full  max-w-screen-sm  mx-auto "
            >
              <div className="pr-2 pl-2 items-center " id="contImage">
                <img src="/issati2.jpg" className="imgReda "></img>
              </div>
              <div id="mainBioAndSocial" className="">
                <div id="Bio" className="">
                  <div className="flex justify-center items-center pr-8">
                    <h3 className="text-xl font-light">MOHAMMED EL ISSATI </h3>
                  </div>
                  <p className="p-2 font-hairline  ">
                    software Engineer student | Web Ethusiast | React lover{" "}
                    <br></br>shares articles, tutorials and his thoughts on
                    various things.
                  </p>
                </div>
                <div
                  id="portfolCv_SocilaContainer"
                  className="flex justify-center gap-4"
                >
                  <div id="Pages" className=" ">
                    <Link href="portfolio" className="">
                      <a className="text-blue-600 text-lg hover:underline ">
                        Portfolio
                      </a>
                    </Link>

                    <Link href="cv">
                      <a className="text-blue-500 ml-3 hover:underline  mr-5 text-lg">
                        CV
                      </a>
                    </Link>
                  </div>

                  <div id="IconSocialCont" className="flex ">
                    <a
                      href="https://www.linkedin.com/in/mohammed-el-issati-2a62a3123/"
                      target="_blank"
                    >
                      <FaLinkedin color="#0e76a8" className="mr-4" size={22} />
                    </a>
                    <div className="amine3">
                      <a href="https://twitter.com/redaamir972" target="_blank">
                        <FaTwitter color="#00acee" size={22} className="mr-4" />{" "}
                      </a>
                    </div>
                    <a href="https://github.com/oncelearner" target="_blank">
                      <FaGithub size={22} />{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="postsCont" className="mx-auto">
            <h4 className="font-bold text-lg border-l-2 border-blue-400 pl-2 mt-4 mb-4">
              Articles
            </h4>
          </div>
          <div className="post__infos ">
            {myposts.map((elt) => (
              <Posts post={elt}></Posts>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
