import React from "react";
import catImage from "../../images/cat.jpeg";

const createAnArray = (LIMIT) => {
  const array = [];
  for (let index = 1; index < LIMIT + 1; index++) {
    array.push(index);
  }
  return array;
};

const list = createAnArray(50000);

const Cats = () => {
  // return list.map((el, index) => (
  //   <img key={index} src={catImage} alt={`Котик ${el}`} />
  // ));
  return list.map((el, index) => <div key={index}>{el}</div>);
};

export default Cats;
