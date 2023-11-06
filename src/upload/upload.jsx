import React, { useState } from "react";
import axios from "axios";

function ImageUploadForm() {
  const [selectedImages, setSelectedImages] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [thumb, setThumb] = useState();
  const [description, setDescription] = useState("");

  const handleImageChange = (event) => {
    const files = event.target.files;
    const imagesArray = Array.from(files);
    setSelectedImages(imagesArray);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleThumbChange = (event) => {
    setThumb(event.target.files[0]);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("productName", name);
    formData.append("productDescription", description);
    formData.append("images", thumb);
    for (let i = 0; i < selectedImages.length; i++) {
      formData.append("images", selectedImages[i]);
    }
    formData.append("price", price);

    try {
      const response = await axios.post(
        "https://zkls2z-8003.csb.app/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );
      console.log(response.data);
      // Handle the response from the server
    } catch (error) {
      console.error("error from the server", error);
      // Handle the error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={handleDescriptionChange}
        />
      </div>
      <div>
        <label htmlFor="price">price:</label>
        <input id="price" value={price} onChange={handlePriceChange} />
      </div>
      <div>
        <label htmlFor="thumbnail">Thumbnail:</label>
        <input type="file" id="thumb" multiple onChange={handleThumbChange} />
      </div>
      <div>
        <label htmlFor="images">Detail Images:</label>
        <input type="file" id="images" multiple onChange={handleImageChange} />
      </div>
      <button type="submit">Upload</button>
    </form>
  );
}

export default ImageUploadForm;
