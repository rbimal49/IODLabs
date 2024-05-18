import React, { useState } from "react";
import "./AddCatForm.css";

function AddCatForm({ onAddBigCat }) {
  const [name, setName] = useState("");
  const [latinName, setlatinName] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddBigCat({ name, latinName, image });
  };

  const addBigCatName = (e) => {
    setName(e.target.value);
  };

  const addBigCatLatinName = (e) => {
    setlatinName(e.target.value);
  };

  const addBigCatImage = (e) => {
    console.log(e.target.files[0].name);
    const imageHolder = `../img/${e.target.files[0].name}`;
    setImage(imageHolder);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-items">
          <label>Bigcat Name:</label>
          <input
            name="name"
            value={name}
            onChange={addBigCatName}
            type="text"
          />
        </div>
        <div className="form-items">
          <label>Latin Name:</label>
          <input
            name="latinName"
            value={latinName}
            onChange={addBigCatLatinName}
            type="text"
          />
        </div>
        <input onChange={addBigCatImage} type="file" className="image-input" />
        <button type="submit">Add Bigcat</button>
      </form>
    </div>
  );
}
export default AddCatForm;
