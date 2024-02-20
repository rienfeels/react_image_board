// src/ImageList.jsx
import React from "react";

function ImageList({ images }) {
  console.log(images);
  return (
    <ul>
      {images.map((image, index) => (
        <li key={index}>
          <img src={image.imageUrl} alt={image.caption} />
          <p>{image.caption}</p>
        </li>
      ))}
    </ul>
  );
}

export default ImageList;
