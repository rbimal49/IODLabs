import React from "react";
import "./SingleCat.css";

function SingleCat(props) {
  return (
    <li className="single-cat-item">
      <img src={props.image} className="single-cat-image" alt="cat.name" />
      <h2>{props.name}</h2>
      <p>ID: {props.id}</p>
      <p>{props.latinName}</p>
    </li>
  );
}

export default SingleCat;
