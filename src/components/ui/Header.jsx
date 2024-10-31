/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { MainLogo } from "../../assets/icons/Icon";

const Header = () => {
  return (
    <div className='font-Segoe'>
      <div className='flex justify-between  py-5 px-4'>
        <div className='flex justify-between items-center space-x-9  pl-2'>
          <div className='flex justify-center items-center gap-x-1'>
            <Link>
              <MainLogo />
            </Link>
            <h1 className='text-xl font-semibold text-[#CC0000]'>Pinterset</h1>
          </div>
          <Link
            to='#Watch'
            className='font-semibold text-[#111111] text-base'>
            Watch
          </Link>
          <Link className='font-semibold text-[#111111] text-base'>
            Explore
          </Link>
        </div>
        <div className='  flex justify-between items-center space-x-10 '>
          <Link className='font-semibold text-[#111111] text-base hover:underline decoration-[#111111]'>
            About
          </Link>
          <Link className='font-semibold text-[#111111] text-base  hover:underline decoration-[#111111]'>
            Buisness
          </Link>
          <Link className='font-semibold text-[#111111] text-base  hover:underline decoration-[#111111]'>
            Blog
          </Link>
          <div className='space-x-2'>
            <Link className='font-semibold text-[#FFFFFF] bg-[#CC0000] hover:bg-[#b60000] rounded-full py-2.5 px-3 text-base'>
              Log in
            </Link>
            <Link className='font-semibold text-[#111111] text-base bg-[#E2E2E2] py-2.5 px-3 rounded-full'>
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
