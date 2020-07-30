import React from "react";
const Card = (probs) => {
  return (
    <div className="container shadow border rounded-full p-3  ">
      <h3 className="text-2xl"> project {probs.name} </h3>
      <p> this the description of project {probs.name}</p>
    </div>
  );
};
export default Card;
