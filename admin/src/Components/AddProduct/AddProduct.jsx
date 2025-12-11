import React, { useState } from "react";
import "./AddProduct.css";
import upload_area from "../../assets/upload_area.svg";

const AddProduct = () => {
  const [images, setImages] = useState({
    image: null,
    image2: null,
    image3: null,
    image4: null,
  });

  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    image2: "",
    image3: "",
    image4: "",
    short_description: "",
    long_description: "",
    old_price: "",
    new_price: "",
  });

  const imageHandler = (e) => {
    const { name, files } = e.target;
    setImages((prev) => ({ ...prev, [name]: files[0] }));
  };

  const changeHandler = (e) => {
    setProductDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const Add_Product = async () => {
    if (!images.image || !images.image2 || !images.image3 || !images.image4) {
      alert("All 4 images are required.");
      return;
    }

    // create formdata for all images
    const formData = new FormData();
    formData.append("name", productDetails.name);
    formData.append("image", images.image);
    formData.append("image2", images.image2);
    formData.append("image3", images.image3);
    formData.append("image4", images.image4);

    let uploadResponse;

    try {
      const res = await fetch("http://localhost:4000/upload", {
        method: "POST",
        body: formData,
      });

      uploadResponse = await res.json();
    } catch (err) {
      console.error("Upload error:", err);
      alert("Image upload failed.");
      return;
    }

    if (!uploadResponse.success) {
      alert("Image upload failed.");
      return;
    }

    // assign uploaded URLs to product
    const product = {
      ...productDetails,
      image: uploadResponse.image,
      image2: uploadResponse.image2,
      image3: uploadResponse.image3,
      image4: uploadResponse.image4,
    };

    try {
      const res = await fetch("http://localhost:4000/addproduct", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      const data = await res.json();

      if (data.success) {
        alert("Product Added Successfully");
      } else {
        alert("Error in adding product");
      }
    } catch (err) {
      console.error("Add product error:", err);
      alert("Unexpected error adding product.");
    }
  };

  return (
    <div className="add-product">
      <div className="addproduct-itemfield">
        <p>Product Title</p>
        <input
          value={productDetails.name}
          onChange={changeHandler}
          type="text"
          name="name"
          placeholder="Enter product title"
        />
      </div>

      <div className="addproduct-itemfield">
        <p>Product Description</p>
        <input
          value={productDetails.short_description}
          onChange={changeHandler}
          type="text"
          name="short_description"
          placeholder="Enter short description"
        />
        <textarea
          value={productDetails.long_description}
          onChange={changeHandler}
          name="long_description"
          placeholder="Enter long description (Markdown supported)"
          rows="12"
          style={{ whiteSpace: "pre-wrap", width: "100%" }}
        />
      </div>

      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input
            value={productDetails.old_price}
            onChange={changeHandler}
            type="text"
            name="old_price"
            placeholder="Enter product price"
          />
        </div>
        <div className="addproduct-itemfield">
          <p>Offer Price</p>
          <input
            value={productDetails.new_price}
            onChange={changeHandler}
            type="text"
            name="new_price"
            placeholder="Enter product price"
          />
        </div>
      </div>

      {/* ---- IMAGE INPUTS ---- */}

      <div className="addproduct-itemfield">
        <p>Main Image</p>
        <label htmlFor="image">
          <img
            src={images.image ? URL.createObjectURL(images.image) : upload_area}
            className="addproduct-thumbnail-img"
          />
        </label>
        <input
          type="file"
          name="image"
          id="image"
          hidden
          onChange={imageHandler}
        />
      </div>

      <div className="addproduct-itemfield">
        <p>Additional Images (All Required)</p>

        <label htmlFor="image2">
          <img
            src={
              images.image2 ? URL.createObjectURL(images.image2) : upload_area
            }
            className="addproduct-thumbnail-img"
          />
        </label>
        <input
          type="file"
          name="image2"
          id="image2"
          hidden
          onChange={imageHandler}
        />

        <label htmlFor="image3">
          <img
            src={
              images.image3 ? URL.createObjectURL(images.image3) : upload_area
            }
            className="addproduct-thumbnail-img"
          />
        </label>
        <input
          type="file"
          name="image3"
          id="image3"
          hidden
          onChange={imageHandler}
        />

        <label htmlFor="image4">
          <img
            src={
              images.image4 ? URL.createObjectURL(images.image4) : upload_area
            }
            className="addproduct-thumbnail-img"
          />
        </label>
        <input
          type="file"
          name="image4"
          id="image4"
          hidden
          onChange={imageHandler}
        />
      </div>

      <button onClick={Add_Product} className="addproduct-btn">
        Add
      </button>
    </div>
  );
};

export default AddProduct;
