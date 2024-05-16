import React from "react";

const cats = [
  {
    id: "1001",
    name: "Cheetah",
    latinName: "Acinonyx jubatus",
    Image: "../public/Cheetah.jpg",
  },
  {
    id: "1002",
    name: "Cougar",
    latinName: "Puma concolor",
    Image: "../public/Cougar.jpg",
  },
  {
    id: "1003",
    name: "Jaguar",
    latinName: "Panthera onca",
    Image: "../public/Jaguar.jpg",
  },
  {
    id: "1004",
    name: "Leopard",
    latinName: "Panthera pardus",
    Image: "../public/Leopard.jpg",
  },
  {
    id: "1005",
    name: "Lion",
    latinName: "Panthera leo",
    Image: "../public/Lion.jpg",
  },
  {
    id: "1006",
    name: "Snow leopard",
    latinName: "Panthera uncia",
    Image: "../public/Snow Leopard.jpg",
  },
  {
    id: "1007",
    name: "Tiger",
    latinName: "Panthera tigris",
    Image: "../public/Tiger.jpg",
  },
];

const BigCats = () => {
  return (
    <div>
      <h1>Big Cats</h1>
      <ul className="big-cats-list">
        {cats.map((cat) => (
          <li key={cat.id}>
            {/* ID: {cat.id} - <storng>{cat.name}</storng> - {cat.latinName} */}
            <p>
              ID: {cat.id} - Name: {cat.name} - - - - - -Latin Name:{" "}
              {cat.latinName}
            </p>
            <img src={cat.Image} className="image-container" alt="cat.name" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BigCats;
