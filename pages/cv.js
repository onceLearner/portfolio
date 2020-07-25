import React from "react";
import Link from "next/link";
const CV = () => {
  return (
    <div className=" p-8 ">
      <div className="p-4 shadow bg-blue-900  rounded-lg">
        <h2 className="px-5  py-2 text-yellow-500 text-center text-lg ">
          this is my Cv
        </h2>
        <Link href="index" className="underline bg-blue">
          <a className="text-blue-200 shadow border-b hover:text-red-300">
            {" "}
            return back
          </a>
        </Link>
      </div>
    </div>
  );
};
export default CV;
