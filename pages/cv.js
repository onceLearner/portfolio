import React from "react";
import Head from "next/head";
import {
  FaArrowCircleLeft,
  FaArrowLeft,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaMailBulk,
  FaLocationArrow,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import Link from "next/link";

const CV = () => {
  return (
    <div className="cv p-4 ">
      <Head>
        <title>cv</title>
      </Head>
      <Link className="back underline bg-blue" href="index">
        <a className="cv__back_link text-blue-800  flex items-center  hover:text-red-300">
          <FaArrowLeft size={12} />
          <p className="ml-2 text-sm">return</p>
        </a>
      </Link>
      <div className="main ">
        <div className="header flex flex-wrap justify-between border-b  pb-5">
          <div className="header__left p-4">
            <h3 className="text-2xl font-semibold"> Mohammed el issati</h3>
            <h4>software engineer Student</h4>
            <p className="header__left__bio max-w-3xl pt-3 font-thin">
              A confident, self-motivated software engineer .never-stop
              autodidact , learner in every aspect of his life, with good
              analytical and verbal skills.
            </p>
          </div>
          <div className="header__right p-4 ">
            <a href="" className="flex   items-center p-1 hover:underline ">
              <FiMail className="mr-2" /> <p>mohamedelissati28@gmail.com</p>
            </a>
            <a
              href="https://www.google.com.tr/maps/@41.0847699,29.0492408,16.39z"
              className="flex   items-center p-1 hover:underline "
            >
              <FaLocationArrow className="mr-2" /> <p> Rabat, Morocco</p>
            </a>
            <a href="" className="flex  items-center  p-1 hover:underline  ">
              <FaLinkedin className="mr-2" />
              <p>linkedin.com/in/mohammed-el-issati</p>
            </a>
            <a href="" className="flex  p-1 items-center hover:underline  ">
              <FaGithub className="mr-2" /> <p>github.com/oncelearner</p>
            </a>
          </div>
        </div>
      </div>
      <div className="skills"> skills</div>
      <div className="education"> education</div>
      <div className="projects">projects</div>
      <div className="languages">languages</div>
    </div>
  );
};
export default CV;
