import React from "react";
import "./SingleCat.css";

function SingleCat({ id, name, latinName, image }) {
  return (
    <li className="single-cat-item">
      <img src={image} className="single-cat-image" alt="cat.name" />
      <h2>{name}</h2>
      <p>ID: {id}</p>
      <p>{latinName}</p>
    </li>
  );
}

export default SingleCat;
