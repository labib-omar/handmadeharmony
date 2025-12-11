import React, { useState } from "react";
import "./DescriptionBox.css";
import ReactMarkdown from "react-markdown";

const DescriptionBox = (props) => {
  const { product } = props;
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="descriptionbox">
      <div className="description-navigator">
        <div
          className={activeTab === "description" ? "active-tab" : ""}
          onClick={() => setActiveTab("description")}
        >
          Description
        </div>

        <div
          className={activeTab === "reviews" ? "active-tab" : ""}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews (122)
        </div>
      </div>

      <div className="descriptionbox-description">
        {activeTab === "description" && (
          <div className="description-markdown">
            <ReactMarkdown>{product.long_description}</ReactMarkdown>
          </div>
        )}

        {activeTab === "reviews" && (
          <>
            <p>⭐⭐⭐⭐⭐ Amazing product!</p>
            <p>⭐⭐⭐⭐ Good value!</p>
          </>
        )}
      </div>
    </div>
  );
};

export default DescriptionBox;
