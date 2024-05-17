import React from "react";
import SingleCat from "../SingleCat/SingleCat";
import "./BigCats.css";

function BigCats() {
  // Assign array to cats variable
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

  const catList = cats.map((cat) => (
    // Map the cats state to SingleCat components
    <SingleCat
      key={cat.id}
      id={cat.id}
      name={cat.name}
      latinName={cat.latinName}
      image={cat.image}
    />
  ));

  return (
    // Bigcats single div wrapper
    <div className="big-cats-container">
      <h1>Big Cats</h1>
      {/* Render the list of SingleCat component */}
      <ul className="big-cats-list ">{catList}</ul>
    </div>
  );
}

export default BigCats;
