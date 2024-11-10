/** @format */

import React from "react";

const Card = ({ imageUrl, title, description, stylesImage, className }) => {
  return (
    <div className={`${stylesImage}`}>
      {imageUrl && (
        <img
          src={imageUrl}
          alt='images'
          className={`${className}`}
        />
      )}
      <h3>{title}</h3>
    </div>
  );
};

export default Card;
