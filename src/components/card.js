import React from "react";

const stack = ["react", "css", "aws", "next"];
const Card = (probs) => {
  return (
    <div
      className="card   shadow-xl border-gray-800 rounded-lg w-10/12 md:w-4/12 p-3 "
      id="card_container"
    >
      <div className="card__header   flex  items-center">
        <div className="card__header__img ">
          <img src="avatar1.jpg" id="avatar"></img>{" "}
        </div>
        <div className="card__header__title pl-12">
          <h1 className="font-bold text-lg">porjectName</h1>
          <p className="font-light">web application</p>
        </div>
      </div>
      <div className="card__body mt-3 mb-3">
        <p className="card__body__text font-serif ">
          this project was intended to be used in different fields of the tech
          industry{" "}
        </p>
      </div>
      <div className="card__footer">
        <h3 className="card__footer__date text-purple-700 ">sept 2017</h3>
        <div className="font-thin flex ">
          {stack.map((elt) => (
            <p className="tags mr-4 text-purple-600">#{elt}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Card;
