/** @format */

import React, { useState } from "react";
import "../index.css";
import Header from "../components/ui/Header";
import Slide1 from "../assets/images/Slide1.jpg";
import Slide2 from "../assets/images/Slide2.jpg";
import Slide3 from "../assets/images/Slide3.jpg";
import Slide4 from "../assets/images/Slide4.jpg";
import Slide5 from "../assets/images/Slide5.jpg";
import Slide6 from "../assets/images/Slide6.jpg";
import { DropDown } from "../assets/icons/Icon";

const LandingPage = () => {
  return (
    <div className='w-full h-auto '>
      <section className='w-full h-auto  '>
        <Header />
        <div className='text-center absolute left-96 top-1/4 '>
          <h1 className='text-6xl font-semibold text[#111111]'>
            Get Your Next
          </h1>
          <h3 className='text-6xl font-semibold text-[#C28B00]'>
            weeknight Dinner Idea
          </h3>
          <div className='animate-bounce flex justify-center items-center ml-64 mt-44 w-12 h-12 text-center rounded-full  bg-[#C28B00] border'>
            <DropDown />
          </div>
        </div>
        <div className='flex justify-between mt-52 relative'>
          <div className='flex space-x-3.5'>
            <div className='w-12 h-80 rounded-r-2xl animate-wiggleSlow'>
              <img
                src={Slide1}
                alt='Slice1'
                className='h-full rounded-r-2xl object-cover '
              />
            </div>
            <div className='w-56 h-64  mt-36  rounded-2xl animate-wiggleMedium'>
              <img
                src={Slide2}
                alt='Slice2'
                className='h-full w-full rounded-2xl object-cover'
              />
            </div>
            <div className='w-56 h-52  mt-52  rounded-2xl animate-wiggleFast'>
              <img
                src={Slide3}
                alt='Slice3'
                className='h-full w-full rounded-2xl object-cover'
              />
            </div>
          </div>
          <div className='flex space-x-3.5'>
            <div className='w-56 h-52  mt-52 rounded-2xl animate-wiggleFastAfter'>
              <img
                src={Slide4}
                alt='Slice4'
                className='h-full w-full rounded-2xl object-cover'
              />
            </div>
            <div className='w-56 h-64  mt-36  rounded-2xl animate-wiggleMediumAfter'>
              <img
                src={Slide5}
                alt='Slice5'
                className='h-full w-full rounded-2xl object-cover'
              />
            </div>
            <div className='w-12 h-80  rounded-2xl  animate-wiggleSlowAfter'>
              <img
                src={Slide6}
                alt='Slice6'
                className='h-full w-full rounded-l-2xl object-cover'
              />
            </div>
          </div>
        </div>
      </section>
      <section
        id='watch'
        className='h-96 bg-[#fffd92] mt-0'></section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
    </div>
  );
};

export default LandingPage;
