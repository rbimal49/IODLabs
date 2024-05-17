import React, { useState } from "react";
import "./Emoji.css";

function MoodChanger() {
  const [mood, setMood] = useState("😎");

  const NewMood = () => {
    setMood("😜");
  };
  return (
    <div>
      <h3>I am feeling...{mood}!</h3>
      <button onClick={NewMood}>Change Mood</button>
    </div>
  );
}

export default MoodChanger;
