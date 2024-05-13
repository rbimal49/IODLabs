import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Greetings from "./components/Greetting";
import BigCats from "./components/BigCats";

function App() {
  return (
    <>
      {/* importing and passing the prop */}
      <div>
        <Greetings name="Tony" heroName="Iron Man">
          <p>"Sometimes you gotta run before you can walk."</p>
        </Greetings>
        <Greetings name="Steve" heroName="Captiain America">
          <p>
            "Even if everyone is telling you that something wrong is something
            right, even if the whole world is telling you to move, it is your
            duty to plant yourself like a tree, look them in the eye, and say,
            'No, you move.'
          </p>
        </Greetings>
        <Greetings name="Peter" heroName="Spiderman">
          <p>"My spider-sense is tingling."</p>
        </Greetings>
      </div>

      <div>
        <BigCats />
      </div>
    </>
  );
}

export default App;
