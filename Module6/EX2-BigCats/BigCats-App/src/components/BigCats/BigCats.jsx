import React from "react";
import SingleCat from "../SingleCat/SingleCat";
import "./BigCats.css";

const cats = [
  {
    id: "1001",
    name: "Cheetah",
    latinName: "Acinonyx jubatus",
    image: "../public/img/Cheetah.jpg",
  },
  {
    id: "1002",
    name: "Cougar",
    latinName: "Puma concolor",
    image: "../public/img/Cougar.jpg",
  },
  {
    id: "1003",
    name: "Jaguar",
    latinName: "Panthera onca",
    image: "../public/img/Jaguar.jpg",
  },
  {
    id: "1004",
    name: "Leopard",
    latinName: "Panthera pardus",
    image: "../public/img/Leopard.jpg",
  },
  {
    id: "1005",
    name: "Lion",
    latinName: "Panthera leo",
    image: "../public/img/Lion.jpg",
  },
  {
    id: "1006",
    name: "Snow leopard",
    latinName: "Panthera uncia",
    image: "../public/img/Snow Leopard.jpg",
  },
  {
    id: "1007",
    name: "Tiger",
    latinName: "Panthera tigris",
    image: "../public/img/Tiger.jpg",
  },
];

function BigCats() {
  return (
    <div className="big-cats-container">
      <h1>Big Cats</h1>
      {/* <ul className="big-cats-list">
        {cats.map((cat) => (
          <li key={cat.id}>
            <p>
              ID: {cat.id} - Name: {cat.name} - - - - - -Latin Name:{" "}
              {cat.latinName}
            </p>
            <img src={cat.Image} className="image-container" alt="cat.name" />
          </li>
        ))}
      </ul> */}
      <ul className="big-cats-list">
        {cats.map((cat) => (
          <SingleCat
            id={cat.id}
            name={cat.name}
            latinName={cat.latinName}
            image={cat.image}
          />
        ))}
      </ul>
    </div>
  );
}

export default BigCats;
