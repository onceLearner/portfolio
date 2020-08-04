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
        <title> issati | CV</title>
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
            <a
              href="mailto:mohamedelissati28@gmail.com"
              className="flex   items-center p-1 hover:underline "
            >
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
        <div className="my  sm:flex flex-wrap  justify-evenly">
          <div className="my__skills w-1/2">
            <h3 className="my__skills__title text-2xl">Skills</h3>
            <div className="my__skills__content mb-4 ">
              <div className="flex p-1 ">
                <h4 className="font-bold mr-3">languages:</h4>
                <p>Python, C, java </p>
              </div>
              <div className="flex p-1 ">
                <h4 className="font-bold mr-3 ">Web Technologies</h4>
                <p>javascript, php, html5, css3, </p>
              </div>
              <div className="flex flex-wrap p-1 ">
                <h4 className="font-bold mr-3 ">Web Frameworks/libraries</h4>
                <p>ReactJs, nextJs,Tailwind,bootstrap,spring boot</p>
              </div>
              <div className="flex p-1 ">
                <h4 className="font-bold mr-3 ">Mobile Dev</h4>
                <p>React native</p>
              </div>
              <div className="flex flex-wrap p-1 ">
                <h4 className="font-bold mr-3 ">Database</h4>
                <p>
                  {" "}
                  Sql :MySql,Postgresql,pl/sql <br></br>NoSql :MondoDb{" "}
                </p>
              </div>
              <div className="flex p-1 ">
                <h4 className="font-bold mr-3 ">others</h4>
                <p>git, RestApi, CI/CD , Aws, </p>
              </div>

              <div></div>
            </div>
          </div>
          <div className="my__education w-6/12 ">
            <h3 className="my__education__title text-2xl ">Education</h3>
            <div className="my__education_content mt-3">
              <div className="Emi border-l-2 border-black p-3">
                <p className="font-bold">Mohammadia School of Engineering</p>
                <p className="">Bsc in Informatics </p>
              </div>
              <div className="prepa border-l-2 border-black mt-3 p-2">
                <p className="font-bold  p-1">
                  Preparatory Classes for Engineering Schools
                </p>
                <p>major in Mathematics and Physics</p>
              </div>
            </div>
          </div>
          <div className="my__projects w-1/2 ">
            <h3 className="my__projects__title text-2xl">Projects</h3>
            <div classNmae="my__projects__content">
              <div className="p1">
                <h3>project 1</h3>
              </div>
              <div className="p2">
                <h3>project 2</h3>
              </div>
              <div className="p3">
                <h3>project 3</h3>
              </div>
            </div>
          </div>
          <div className="my__languages w-1/2">
            <h3 className="my__languages__title text-2xl">Languages</h3>
            <div className="my__languages__content">
              <div className="En flex">
                <p className="text-mg font-bold mr-2">English: </p>
                <p>proficient</p>
              </div>
              <div className="Fr flex">
                <p className="text-mg font-bold mr-2">French: </p>
                <p>fluent</p>
              </div>
              <div className="Ar flex">
                <p className="text-mg font-bold mr-2">Arabic: </p>
                <p>native</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CV;
