/** @format */

import { Link } from "react-router-dom";
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

  const handleChange = (e) => {
    setIsInput(e.target.value);
  };
  return (
    <div className='fixed top-0 left-0 w-full bg-white z-20'>
      <div className='flex  py-5 px-4'>
        <div className='flex justify-between items-center space-x-2 pl-2'>
          <Link>
            <MainLogo />
          </Link>

          <Button
            className='bg-[#111111]  text-[#FFFFFF] py-3 px-4'
            title='Home'
          />
          <Link className='font-semibold text-[#111111] text-base'>Create</Link>
        </div>
        <div className='relative w-full px-4'>
          {!isFocused && (
            <IoSearch className='absolute left-8  top-1/2 transform -translate-y-1/2 text-[#767676] ' />
          )}
          <div className='absolute right-6  top-1/2 transform -translate-y-1/2 text-white hover:bg-gray-300 p-3 rounded-full'>
            {isFocused && (
              <RxCross2 className=' bg-black rounded-full cursor-pointer' />
            )}
          </div>
          {/* Input Field */}
          <input
            type='text'
            placeholder='Search'
            value={isInput}
            onChange={handleChange}
            className='w-full rounded-full bg-[#E1E1E1] focus:px-4 px-10 py-3 focus:outline focus:outline-4 focus:outline-[#7FC1FF]'
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          {isInput.length <= 1 && isFocused && (
            <div className='absolute top-10 left-0 w-full h-auto px-8 bg-white -z-10 rounded-b-2xl'>
              <h3 className='py-4'>Ideas for you</h3>
              <div className='flex gap-4 flex-wrap'>
                {CardData.map((item, index) => (
                  <React.Fragment key={index}>
                    <Card
                      imageUrl={item.imageUrl}
                      title={item.title}
                      stylesImage='w-72 h-28 rounded-2xl flex gap-4 items-center bg-[#F5F5F5] hover:bg-[#CFCFCF]'
                      className='w-28 h-28 rounded-l-2xl'
                    />

                    {index === 4 && (
                      <h2 className='new-header w-full flex self-start text-center'>
                        Popular on Pinterset
                      </h2>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}

          {isInput.length > 1 && (
            <div className='absolute top-10 left-0 w-full h-auto py-5 -z-10 bg-white rounded-b-2xl'>
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
        <div className='flex justify-between items-center space-x-4'>
          <Link>
            <NotificationIcon className='text-[#767676]' />
          </Link>
          <Link>
            <BsChatDotsFill className='text-[#767676] w-6 h-6' />
          </Link>
          <Link className='text-[#767676] border rounded-full border-black p-3'></Link>
          <Link>
            <DropDown className='text-[#767676] ' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthenticatdHeader;
