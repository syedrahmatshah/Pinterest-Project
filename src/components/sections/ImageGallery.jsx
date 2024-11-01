/** @format */

import React from "react";
import Button from "../ui/Button";
import { SearchImages } from "../constant/Constant";

const ImageGallery = ({ title, description, url }) => {
  return (
    <div className='flex justify-between w-full'>
      <div className='w-2/4 h-96 border'>
        {SearchImages.map((image) => (
          <>
            <div>{image.url}</div>
            <p>{image.title}</p>
          </>
        ))}
      </div>
      <div className='w-2/4 text-center space-y-6 flex flex-col justify-center'>
        <h1 className='text-[#C31952] text-6xl font-bold'>{title}</h1>
        <p className='text-[#C31952] text-2xl font-normal px-36'>
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
