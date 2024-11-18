/** @format */

import { Link, NavLink } from "react-router-dom";
import { MainLogo } from "../../assets/icons/Icon";
import Button from "../ui/Button";
import { IoSearch } from "../../assets/icons/Icon";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { NotificationIcon } from "../../assets/icons/Icon";
import { BsChatDotsFill } from "react-icons/bs";
import { DropDown } from "../../assets/icons/Icon";
import { CardData } from "../constant/Constant";
import Card from "../ui/Card";

const AuthenticatdHeader = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isInput, setIsInput] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setIsInput(e.target.value);
  };

  return (
    <div className='fixed top-0 left-0 w-full bg-white z-20'>
      {/* Header Section */}
      <div className='flex py-5 px-4'>
        {/* Logo and Navigation Links */}
        <div className='flex justify-between items-center space-x-2 pl-2'>
          {/* Logo that redirects to home */}
          <Link to='/'>
            <MainLogo />
          </Link>

          {/* Navigation link to Home with active state styles */}
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-[#111111] py-3 px-4 rounded-full text-[#FFFFFF]"
                : "font-semibold text-[#111111] text-base"
            }
            to='/'
            title='Home'>
            Home
          </NavLink>

          {/* Navigation link to Create with active state styles */}
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-[#111111] py-3 px-4 rounded-full text-[#FFFFFF]"
                : "font-semibold text-[#111111] text-base"
            }
            to='/create-tool'>
            Create
          </NavLink>
        </div>

        {/* Search Input Section */}
        <div className='relative w-full px-4'>
          {/* Display search icon only when input is not focused */}
          {!isFocused && (
            <IoSearch className='absolute left-8  top-1/2 transform -translate-y-1/2 text-[#767676]' />
          )}

          {/* Close icon displayed when input is focused */}
          <div className='absolute right-6 top-1/2 transform -translate-y-1/2 text-white hover:bg-gray-300 p-3 rounded-full'>
            {isFocused && (
              <RxCross2 className=' bg-black rounded-full cursor-pointer' />
            )}
          </div>

          {/* Search input field */}
          <input
            type='text'
            placeholder='Search'
            value={isInput}
            onChange={handleChange}
            className='w-full rounded-full bg-[#E1E1E1] focus:px-4 px-10 py-3 focus:outline focus:outline-4 focus:outline-[#7FC1FF]'
            onFocus={() => setIsFocused(true)} // Set input focus
            onBlur={() => setIsFocused(false)} // Set input blur
          />

          {/* Suggestion dropdown shown when input is focused and empty */}
          {isInput.length <= 1 && isFocused && (
            <div className='absolute top-10 left-0 w-full h-[530px] overflow-auto hide-scrollbar pl-10 bg-white -z-10 rounded-b-2xl'>
              <h3 className='pt-7 pb-3 text-base font-semibold text-[#111111]'>
                Ideas for you
              </h3>
              <div className='flex gap-2 flex-wrap'>
                {/* Map over CardData and display cards */}
                {CardData.map((item, index) => (
                  <React.Fragment key={index}>
                    <Card
                      imageUrl={item.imageUrl}
                      title={item.title}
                      stylesImage='w-72 h-28 rounded-2xl flex gap-4 items-center bg-[#F5F5F5] hover:bg-[#CFCFCF]'
                      className='w-28 h-28 rounded-l-2xl '
                    />

                    {/* Display a section heading after the 4th item */}
                    {index === 4 && (
                      <h2 className='w-full pt-5 pb-2 text-base font-semibold text-[#111111]'>
                        Popular on Pinterest
                      </h2>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}

          {/* Display search results dropdown when there's input */}
          {isInput.length > 0 && (
            <div className='absolute top-10 left-0 w-full h-auto py-5 -z-10 bg-white rounded-b-2xl'>
              {/* Mock search result items */}
              <div className='w-full flex items-center px-8 py-2 gap-4 hover:bg-[#CFCFCF]'>
                <IoSearch />
                <p className=''>hi how are you</p>
              </div>
              <div className='w-full flex items-center px-8 py-2 gap-4 hover:bg-[#CFCFCF]'>
                <IoSearch />
                <p className=''>hi how are you</p>
              </div>
              <div className='w-full flex items-center px-8 py-2 gap-4 hover:bg-[#CFCFCF]'>
                <IoSearch />
                <p className=''>hi how are you</p>
              </div>
            </div>
          )}
        </div>

        {/* Icons and Profile section */}
        <div className='flex justify-between items-center gap-x-6'>
          {/* Notification icon */}
          <Link>
            <NotificationIcon className='text-[#767676]' />
          </Link>

          {/* Chat icon */}
          <Link>
            <BsChatDotsFill className='text-[#767676] w-6 h-6' />
          </Link>

          {/* User profile icon (empty for now) */}
          <Link className='text-[#767676] border rounded-full border-black p-3'></Link>

          {/* Dropdown menu icon */}
          <Link>
            <DropDown className='text-[#767676]' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthenticatdHeader;
