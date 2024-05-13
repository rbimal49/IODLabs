import React from "react";

const cats = [
  { id: "1", name: "Cheetah", latinName: "Acinonyx jubatus" },
  { id: "2", name: "Cougar", latinName: "Puma concolor" },
  { id: "3", name: "Jaguar", latinName: "Panthera onca" },
  { id: "4", name: "Leopard", latinName: "Panthera pardus" },
  { id: "5", name: "Lion", latinName: "Panthera leo" },
  { id: "6", name: "Snow leopard", latinName: "Panthera uncia" },
  { id: "7", name: "Tiger", latinName: "Panthera tigris" },
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
              {cat.id} - Name: {cat.name} - - - - - -Latin Name:{cat.latinName}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BigCats;
