/** @format */

import React, { useState } from "react";
import "../index.css";
import Header from "../components/ui/Header";
import { DropDown } from "../assets/icons/Icon";

const LandingPage = () => {
  return (
    <div className='w-full h-auto '>
      <section className='w-full h-screen  '>
        <Header />
        <div className='text-center absolute left-1/4 top-1/4 '>
          <h1 className='text-6xl font-semibold text[#111111]'>
            Get Your Next
          </h1>
          <h3 className='text-6xl font-semibold text-[#C28B00]'>
            weeknight Dinner Idea
          </h3>
          <div className='animate-bounce flex justify-center items-center mx-auto mt-44 w-12 h-12 text-center rounded-full  bg-[#C28B00] border'>
            <DropDown />
          </div>
        </div>
        <div className='flex justify-between mt-32 relative'>
          <div className='flex space-x-3.5'>
            <div className='w-12 h-80  bg-blue-500 rounded-r-2xl animate-spin '></div>
            <div className='w-56 h-80  translate-y-40 bg-blue-500 rounded-2xl'></div>
            <div className='w-56 h-80  translate-y-60 bg-blue-500 rounded-2xl t'></div>
          </div>
          <div className='flex space-x-3.5'>
            <div className='w-56 h-80  translate-y-60 bg-blue-500 rounded-2xl'></div>
            <div className='w-56 h-80  translate-y-40 bg-blue-500 rounded-2xl'></div>
            <div className='w-12 h-80  bg-blue-500 rounded-l-2xl'></div>
          </div>
        </div>
      </section>
      <section id='watch'></section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
    </div>
  );
};

export default LandingPage;
