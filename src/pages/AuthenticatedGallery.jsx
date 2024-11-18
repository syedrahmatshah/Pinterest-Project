/** @format */

import React from "react";

import { BsThreeDots } from "react-icons/bs";
import { HiOutlineArrowUpTray } from "react-icons/hi2";
import AuthenticatedHeader from "../components/layout/AuthenticatedHeader";
import { imageGallery } from "../components/constant/Constant";
import Button from "../components/ui/Button";

const AuthenticatedGallery = () => {
  // const randomImageHeight = imageGallery.map(
  //   () => Math.floor(Math.random() * (300 - 200 + 1)) + 200
  // );
  return (
    <div>
      <AuthenticatedHeader />
      <div className='columns-5 gap-3 mt-24 px-4'>
        {imageGallery.map((item, i) => (
          <div
            key={i}
            className='mb-3 relative group'>
            <img
              src={item.src}
              alt='images'
              className={`w-full h-full rounded-xl `}
            />
            <div className='absolute inset-0  cursor-pointer hover:bg-black opacity-10  group-hover:opacity-50 transition-opacity rounded-xl'>
              <Button
                className='absolute group-hover:opacity-100 right-3 top-3 opacity-0 transition-opacity bg-[#B60000] text-white '
                title='Save'
              />
              <div className='absolute group-hover:opacity-100 bottom-2 flex gap-1 right-3  opacity-0 transition-opacity '>
                <div className='bg-white rounded-full p-4'>
                  <HiOutlineArrowUpTray />
                </div>
                <div className='bg-white rounded-full p-4'>
                  <BsThreeDots />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AuthenticatedGallery;
