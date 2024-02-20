import React, { useState } from "react";

function ImageForm({ onAddImage }) {
  const [imageUrl, setImageUrl] = useState("");
  const [caption, setCaption] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!imageUrl.startsWith("http://") && !imageUrl.startsWith("https://")) {
      alert("Image URL must start with http:// or https://");
      return;
    }
    if (!caption.trim()) {
      alert("Please enter a caption");
      return;
    }
    onAddImage({ imageUrl, caption });
    setImageUrl("");
    setCaption("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        id="image-url"
      />
      <input
        type="text"
        placeholder="Enter caption"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        id="image-caption"
      />
      <button type="submit">Add Image</button>
    </form>
  );
}

export default ImageForm;
