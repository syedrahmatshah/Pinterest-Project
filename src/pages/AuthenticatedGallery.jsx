/** @format */

import React from "react";
import imageGallery1 from "../assets/images/imageGallery1.jpg";
import imageGallery2 from "../assets/images/imageGallery2.jpg";
import imageGallery3 from "../assets/images/imageGallery3.jpg";
import imageGallery4 from "../assets/images/imageGallery4.jpg";
import imageGallery5 from "../assets/images/imageGallery5.jpg";
import imageGallery6 from "../assets/images/imageGallery6.jpg";
import imageGallery7 from "../assets/images/imageGallery7.jpg";
import imageGallery8 from "../assets/images/imageGallery8.jpg";
import imageGallery9 from "../assets/images/imageGallery9.jpg";
import imageGallery10 from "../assets/images/imageGallery10.jpg";
import imageGallery11 from "../assets/images/imageGallery11.jpg";
import imageGallery12 from "../assets/images/imageGallery12.jpg";
import imageGallery13 from "../assets/images/imageGallery13.jpg";
import imageGallery14 from "../assets/images/imageGallery14.jpg";
import imageGallery15 from "../assets/images/imageGallery15.jpg";
import AuthenticatedHeader from "../components/layout/AuthenticatedHeader";
import { imageGallery } from "../components/constant/Constant";
import Button from "../components/ui/Button";

const AuthenticatedGallery = () => {
  return (
    <div>
      <AuthenticatedHeader />
      <div className='w-64 h-64 absolute top-24 z-30 hover:bg-red-900 opacity-40 rounded-xl'>
        <Button
          title='Save'
          className='bg-red-900'
        />
      </div>
      <div className='grid grid-cols-5 gap-4 mt-24 px-4'>
        <div className='space-y-5'>
          <div>
            <img
              className='h-auto w-full rounded-lg object-cover object-center relative'
              src={imageGallery1}
              alt='gallery-photo'
            />
          </div>
          <div>
            <img
              className='h-auto w-full rounded-lg object-cover object-center '
              src={imageGallery2}
              alt='gallery-photo'
            />
          </div>
          <div>
            <img
              className='h-auto w-full rounded-lg object-cover object-center'
              src={imageGallery3}
              alt='gallery-photo'
            />
          </div>
        </div>
        <div className='space-y-5'>
          <div>
            <img
              className='h-auto w-full rounded-lg object-cover object-center'
              src={imageGallery4}
              alt='gallery-photo'
            />
          </div>
          <div>
            <img
              className='h-56 w-full rounded-lg object-cover object-center'
              src={imageGallery5}
              alt='gallery-photo'
            />
          </div>
          <div>
            <img
              className='h-auto w-full rounded-lg object-cover object-center '
              src={imageGallery6}
              alt='gallery-photo'
            />
          </div>
        </div>
        <div className='space-y-5'>
          <div>
            <img
              className='h-56 w-full rounded-lg object-cover object-center'
              src={imageGallery7}
              alt='gallery-photo'
            />
          </div>
          <div>
            <img
              className='h-auto w-full rounded-lg object-cover object-center '
              src={imageGallery8}
              alt='gallery-photo'
            />
          </div>
          <div>
            <img
              className='h-auto w-full rounded-lg object-cover object-center'
              src={imageGallery9}
              alt='gallery-photo'
            />
          </div>
        </div>
        <div className='space-y-5'>
          <div>
            <img
              className='h-auto w-full rounded-lg object-cover object-center'
              src={imageGallery10}
              alt='gallery-photo'
            />
          </div>
          <div>
            <img
              className='h-auto w-full rounded-lg object-cover object-center'
              src={imageGallery11}
              alt='gallery-photo'
            />
          </div>
          <div>
            <img
              className='h-56 w-full rounded-lg object-cover object-center'
              src={imageGallery12}
              alt='gallery-photo'
            />
          </div>
        </div>
        <div className='space-y-5'>
          <div>
            <img
              className='h-56 w-full rounded-lg object-cover object-center '
              src={imageGallery13}
              alt='gallery-photo'
            />
          </div>
          <div>
            <img
              className='h-auto w-full rounded-lg object-cover object-center'
              src={imageGallery14}
              alt='gallery-photo'
            />
          </div>
          <div>
            <img
              className='h-auto w-full rounded-lg object-cover object-center'
              src={imageGallery15}
              alt='gallery-photo'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthenticatedGallery;
