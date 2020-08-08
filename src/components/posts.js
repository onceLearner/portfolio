import React, { useState } from "react";
import Link from "next/link";
const Posts = (probs) => {
  return (
    <div className="Post mb-4 md:mx-auto ">
      <div className="Post__date">
        <p className="font-serif text-sm">{probs.post.date}</p>
      </div>
      <div className="Post__title ">
        <h1 className="text-xl md:text-2xl font-bold  " id="post__title">
          {probs.post.title}
        </h1>
      </div>
      <div className="Post__subtitle">
        <h3 className="text-sm font-hairline">{probs.post.subtitle}</h3>
      </div>
    </div>
  );
};
export default Posts;
