import React, { useState } from "react";
import Link from "next/link";
const Posts = () => {
  const [Counter, setCounter] = useState(0);
  return (
    <div className=" p-6  ">
      <div id="articles" className="mt-3 ">
        <div id={Counter}>
          <p id="date" className="font-hairline">
            25/07/2020{" "}
          </p>
          <a className="text-3xl font-medium hover:border-l-2" href="#">
            NextJs : when and how to use it?
          </a>
        </div>
        <div id={Counter + 1}>
          <p id="date" className="font-hairline">
            29/07/2020{" "}
          </p>
          <a className="text-3xl font-medium hover:border-l-2" href="#">
            best Css frameworks
          </a>
        </div>
        <div id={Counter + 1}>
          <p id="date" className="font-hairline">
            30/07/2020{" "}
          </p>
          <a className="text-3xl font-medium hover:text-lg" href="#">
            Bulma: is is too easy to be true?
          </a>
        </div>
      </div>
    </div>
  );
};
export default Posts;
