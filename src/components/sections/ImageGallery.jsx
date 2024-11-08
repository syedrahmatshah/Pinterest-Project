/** @format */

import React from "react";
import Button from "../ui/Button";

const ImageGallery = ({
  title,
  description,
  images,
  reverse,
  titleStyle,
  textStyle,
  backgroundStyle,
}) => {
  return (
    <div className={`flex justify-between   ${reverse && "flex-row-reverse"}`}>
      <div className={`w-2/4  relative ${backgroundStyle}`}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${image.customStyle}`}>
            <img
              src={image.url}
              alt={image.title}
              className={`${image.customHeight} `}
            />
            <p className={`absolute  text-white ${image.textStyle} `}>
              {image.title}
            </p>
          </div>
        ))}
      </div>
      <div className='w-2/4 h-screen text-center space-y-6 flex flex-col  justify-center'>
        <h1 className={` text-6xl font-bold ${titleStyle}`}>{title}</h1>
        <p className={` text-2xl font-normal px-36 ${titleStyle}`}>
          {description}
        </p>
        <Button
          title='Explore'
          className='bg-[#CC0000] hover:bg-[#b60000] text-[#FFFFFF] w-20 mx-auto'
        />
      </div>
    </div>
  );
};

export default ImageGallery;
