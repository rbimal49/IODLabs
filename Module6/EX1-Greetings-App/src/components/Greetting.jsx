import React from "react";

// 1. Creating the Greeting component
// const Greetings = () => <h1>Hellow World</h1>;

//2. Passing the prop 'name'
const Greetings = (name) => {
  console.log(name);
  return (
    <div>
      <h4>
        Hello! {name.name} a.k.a {name.heroName}!!
      </h4>
      {name.children}
    </div>
  );
};

export default Greetings;
