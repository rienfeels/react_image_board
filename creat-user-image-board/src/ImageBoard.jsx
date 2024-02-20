import React, { useState } from "react";
import ImageForm from "./ImageForm";
import ImageList from "./ImageList";

function ImageBoard() {
  const [images, setImages] = useState([]);

  const handleAddImage = (newImage) => {
    setImages([...images, newImage]);
  };

  return (
    <div>
      <h1>User Image Board</h1>
      <ImageForm onAddImage={handleAddImage} />
      <ImageList images={images} />
    </div>
  );
}

export default ImageBoard;
