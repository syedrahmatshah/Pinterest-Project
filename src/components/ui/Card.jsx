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
      <h3 className='text-base font-semibold text-[#111111]'>{title}</h3>
    </div>
  );
};

export default Card;
