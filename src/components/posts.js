import React, { useState } from "react";
import Link from "next/link";
const Posts = (probs) => {
  return (
    <div className="Post mb-6 cursor-pointer " id="post_cont">
      <div className="Post__date">
        <p className="font-serif text-sm  text-blue-900">{probs.post.date}</p>
      </div>
      <div className="Post__title ">
        <h1 className="text-2xl md:text-3xl font-bold  " id="post__title">
          {probs.post.title}
        </h1>
      </div>
      <div className="Post__subtitle">
        <h3 className="text-sm font-serif  text-blue-900" id="post__sub">
          {probs.post.subtitle}
        </h3>
      </div>
      <div className="Post__techs  flex  gap-2 text-purple-800 ">
        {probs.post.tech.map((elt) => (
          <h1 className="text-sm  "> #{elt}</h1>
        ))}
      </div>
    </div>
  );
};
export default Posts;
