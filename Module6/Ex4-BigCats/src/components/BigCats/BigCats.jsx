import React, { useState } from "react";
import SingleCat from "../SingleCat/SingleCat";
import "./BigCats.css";

function BigCats() {
  // Assign array to initialCatList variable
  const initialCatList = [
    {
      id: "1001",
      name: "Cheetah",
      latinName: "Acinonyx jubatus",
      image: "../public/img/Cheetah.jpg",
    },
    {
      id: "1002",
      name: "Tiger",
      latinName: "Panthera tigris",
      image: "../public/img/Tiger.jpg",
    },
    {
      id: "1003",
      name: "Lion",
      latinName: "Panthera leo",
      image: "../public/img/Lion.jpg",
    },
    {
      id: "1004",
      name: "Leopard",
      latinName: "Panthera pardus",
      image: "../public/img/Leopard.jpg",
    },
    {
      id: "1005",
      name: "Snow leopard",
      latinName: "Panthera uncia",
      image: "../public/img/Snow Leopard.jpg",
    },
    {
      id: "1006",
      name: "Jaguar",
      latinName: "Panthera onca",
      image: "../public/img/Jaguar.jpg",
    },
    {
      id: "1007",
      name: "Cougar",
      latinName: "Puma concolor",
      image: "../public/img/Cougar.jpg",
    },
  ];

  // Assign state variable to hold the arry of bigcats
  const [cats, setCats] = useState(initialCatList);
  // Map the cats state to SingleCat components
  const catList = cats.map((cat) => (
    <SingleCat
      key={cat.id}
      id={cat.id}
      name={cat.name}
      latinName={cat.latinName}
      image={cat.image}
    />
  ));

  // Function to shor the cats arry in alphabetical order
  const sortAlphabetically = () => {
    let sortedCats = [...cats];
    sortedCats.sort((a, b) => (a.name > b.name ? 1 : -1)); // Compare the string to sort
    setCats(sortedCats);
  };

  // Function to shor the cats array in reverse alphabetical order
  const sortReverseAlphabetically = () => {
    let sortedCats = [...cats];
    sortedCats.sort((a, b) => (a.name > b.name ? 1 : -1)); // Sort the string before reverse
    sortedCats.reverse(); // Reverse the alphabetically sorted string
    setCats(sortedCats);
  };

  // Function to filter the cats array by Panthera Family.
  const filterByPantheraFamily = () => {
    const filteredCats = cats.filter((cat) =>
      cat.latinName.startsWith("Panthera")
    );
    setCats(filteredCats);
  };

  // Function to reset the initial arrylist
  function resetCatList() {
    setCats(initialCatList);
  }

  return (
    // Bigcats single div wrapper
    <div className="big-cats-container">
      <h1>Big Cats</h1>
      {/* Grouped Buttons to div wrapper for styling */}
      <div className="button-container">
        <button onClick={sortAlphabetically}>Sort Alphabetically</button>
        <button onClick={sortReverseAlphabetically}>
          Sort Reverse Aplhabetically
        </button>
        <button onClick={filterByPantheraFamily}>Filter Panthaera </button>
        <button onClick={resetCatList}>Reset</button>
      </div>
      <ul className="big-cats-list ">{catList}</ul>
    </div>
  );
}

export default BigCats;
