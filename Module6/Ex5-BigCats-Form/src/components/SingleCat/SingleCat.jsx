import React from "react";
import "./SingleCat.css";
import DeleteButton from "./DeleteButton";

// Function component to render individual cat infromation
function SingleCat({ id, name, latinName, image }) {
  return (
    // List items of a single cat
    <div>
      <li className="single-cat-item">
        <img src={image} className="single-cat-image" alt="cat.name" />
        <h2>{name}</h2>
        <p>ID: {id}</p>
        <p>{latinName}</p>
      </li>
    </div>
  );
}

export default SingleCat;
