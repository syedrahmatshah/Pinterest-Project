/** @format */

import "../index.css";
import GuestHeader from "../components/layout/GuestHeader";
import Slide1 from "../assets/images/Slide1.jpg";
import Slide2 from "../assets/images/Slide2.jpg";
import Slide3 from "../assets/images/Slide3.jpg";
import Slide4 from "../assets/images/Slide4.jpg";
import Slide5 from "../assets/images/Slide5.jpg";
import Slide6 from "../assets/images/Slide6.jpg";
import contactBg from "../assets/images/contactBg.jpg";
import { DropDown } from "../assets/icons/Icon";
import ImageGallery from "../components/sections/ImageGallery";
import { IoSearch } from "react-icons/io5";
import Footer from "../components/layout/Footer";
import {
  SearchImages,
  HomeImages,
  AvatarImages,
} from "../components/constant/Constant";
import SignUpForm from "./SignUpForm";
import React, { useRef, useState } from "react";
import AuthenticatdHeader from "../components/layout/AuthenticatedHeader";

const LandingPage = () => {
  return (
    <>
      <div className='w-full h-auto  scrollbar-hide'>
        {/* <<<<<<<<<<<< Section 1: Header and Hero Area >>>>>>>>>>>>>> */}

        <section className='w-full h-auto relative'>
          {/* Gradient overlay for the bottom part of the hero section */}
          <div className='w-full h-[150px] absolute z-10 bottom-[63px] bg-gradient-to-t from-white to-transparent'></div>

          {/* Main authenticated header component */}
          <AuthenticatdHeader />

          {/* Hero text and Call to Action */}
          <div className='text-center absolute left-96 z-10 top-1/4 '>
            <h1 className='text-6xl font-semibold text[#111111]'>
              Get Your Next
            </h1>
            <h3 className='text-6xl font-semibold text-[#C28B00]'>
              weeknight Dinner Idea
            </h3>

            {/* Scroll-down indicator button */}
            <div className='absolute z-200 flex justify-center items-center ml-64 mt-52 w-12 h-12 text-center cursor-pointer rounded-full animate-bouncingDropDown bg-[#C28B00] border'>
              <a href='#watch'>
                <DropDown className='text-white' />
              </a>
            </div>
          </div>

          {/* Image Slides on both sides of the hero section */}
          <div className='flex justify-between mt-60 relative'>
            {/* <<<<<<<<<<<< Left Image Slide Animation >>>>>>>>>>>>>> */}
            <div className='flex space-x-3.5 '>
              <div className='w-12 h-80 rounded-r-2xl animate-wiggleSlow'>
                <img
                  src={Slide1}
                  alt='Slide1'
                  className='h-full rounded-r-2xl object-cover '
                />
              </div>
              <div className='w-56 h-64 mt-36 rounded-2xl animate-wiggleMedium'>
                <img
                  src={Slide2}
                  alt='Slide2'
                  className='h-full w-full rounded-2xl object-cover'
                />
              </div>
              <div className='w-56 h-52 mt-52 rounded-2xl animate-wiggleFast'>
                <img
                  src={Slide3}
                  alt='Slide3'
                  className='h-full w-full rounded-2xl object-cover'
                />
              </div>
            </div>

            {/* <<<<<<<<<<<< Right Image Slide Animation >>>>>>>>>>>>>> */}
            <div className='flex space-x-3.5'>
              <div className='w-56 h-52 mt-52 rounded-2xl animate-wiggleFastAfter'>
                <img
                  src={Slide4}
                  alt='Slide4'
                  className='h-full w-full rounded-2xl object-cover'
                />
              </div>
              <div className='w-56 h-64 mt-36 rounded-2xl animate-wiggleMediumAfter'>
                <img
                  src={Slide5}
                  alt='Slide5'
                  className='h-full w-full rounded-2xl object-cover'
                />
              </div>
              <div className='w-12 h-80 rounded-2xl animate-wiggleSlowAfter'>
                <img
                  src={Slide6}
                  alt='Slide6'
                  className='h-full w-full rounded-l-2xl object-cover'
                />
              </div>
            </div>
          </div>
        </section>

        {/* <<<<<<<<<<<< Section 2: "How It Works" Section with Dropdown >>>>>>>>>>>>>> */}
        <section
          id='watch'
          className='h-[700px] bg-[#fffd92] relative left-0 w-full -mt-28 z-10 '>
          <div className='flex justify-center items-center py-6'>
            <a
              href='#watch'
              className='flex items-center gap-1 text-base font-semibold text-[#111111]'>
              Here's how it works
              <DropDown />
            </a>
          </div>

          {/* <<<<<<<<<<<< Search Image Gallery >>>>>>>>>>>>>> */}
          <div className='relative'>
            <ImageGallery
              title='Search for an idea'
              description='What do you want to try next? Think of something you’re into—like “easy chicken dinner”—and see what you find.'
              images={SearchImages}
              titleStyle='text-[#C31952]'
            />

            {/* Example search suggestion */}
            <a
              href=''
              className='text-[#6E0F3C] text-2xl font-bold w-[340px] absolute top-60 left-40 z-30 bg-white p-10 rounded-full flex items-center space-x-1'>
              <span>
                <IoSearch className='font-bold text-2xl' />
              </span>
              easy chicken dinner
            </a>
          </div>
        </section>

        {/* <<<<<<<<<<<< Section 3: Save Ideas Section >>>>>>>>>>>>>> */}
        <section className='h-[640px] bg-[#DAFFF6] '>
          <div>
            <div className='relative'>
              <ImageGallery
                title='Save ideas you like'
                description='Collect your favorites so you can get back to them later'
                images={HomeImages}
                reverse={true}
                titleStyle='text-[#006b6c]'
              />
            </div>
          </div>
        </section>

        {/* <<<<<<<<<<<< Section 4: Discover Ideas Section >>>>>>>>>>>>>> */}
        <section className='h-[700px] bg-[#FFE2EB] relative'>
          <div className='relative '>
            <ImageGallery
              title='See it, make it, try it, do it'
              description='The best part of Pinterest is discovering new things and ideas from people around the world.'
              images={AvatarImages}
              reverse={false}
              titleStyle='text-[#C32F00] px-32'
              backgroundStyle='bg-[#CEA98C] h-[700px]'
            />
          </div>
        </section>

        {/* <<<<<<<<<<<< Section 5: Sign-Up Call-to-Action Section >>>>>>>>>>>>>> */}
        <section
          className='h-[700px] bg-cover bg-center'
          style={{ backgroundImage: `url(${contactBg})` }}>
          <div className='w-full h-full bg-black bg-opacity-60'>
            <div className='relative flex justify-between items-center'>
              <div className='w-2/4 h-screen flex flex-col justify-center items-center'>
                <h1 className='text-6xl font-bold text-white px-44 leading-relaxed'>
                  Sign up to get your ideas
                </h1>
              </div>
              <div className='w-2/4'>
                <SignUpForm description='Find new ideas to try' />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* <<<<<<<<<<<< Footer Section >>>>>>>>>>>>>> */}
      <div className='py-2'>
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
