import React from "react";

const Card = (probs) => {
  return (
    <div
      className="card   shadow-xl border-gray-800 rounded-lg border-l-2  md:w-5/12   p-3 mb-8  "
      id="card_container"
    >
      <div className="card__header   flex  items-center">
        <div className="card__header__img ">
          <img src={probs.project.img} id="avatar"></img>{" "}
        </div>
        <div className="card__header__title pl-12">
          <h1 className="font-bold text-lg">{probs.project.name}</h1>
          <p className="font-light">{probs.project.description}</p>
        </div>
      </div>
      <div className="card__body mt-3 mb-3">
        <p className="card__body__text font-serif ">{probs.project.text}</p>
      </div>
      <div className="card__footer">
        <h3 className="card__footer__date text-purple-700 ">
          {probs.project.date}
        </h3>
        <div className="font-thin flex ">
          {probs.project.stack.map((elt) => (
            <p className="tags mr-4 text-purple-600">#{elt}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Card;
