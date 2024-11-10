/** @format */

import { Link } from "react-router-dom";
import { MainLogo } from "../../assets/icons/Icon";
import Button from "../ui/Button";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { IoIosNotifications } from "react-icons/io";
import { BsChatDotsFill } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";

const AuthenticatdHeader = () => {
  const [isFocused, setIsFocused] = useState(false);
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
            <IoSearch className='absolute left-8  top-1/2 transform -translate-y-1/2 text-[#767676] w-5 h-5' />
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
            className='w-full rounded-full bg-[#E1E1E1] focus:px-4 px-10 py-3 focus:outline focus:outline-4 focus:outline-[#7FC1FF]'
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </div>
        <div className='flex justify-between items-center space-x-4'>
          <Link>
            <IoIosNotifications className='text-[#767676] w-8 h-8' />
          </Link>
          <Link>
            <BsChatDotsFill className='text-[#767676] w-6 h-6' />
          </Link>
          <Link className='text-[#767676] border rounded-full border-black p-3'></Link>
          <Link>
            <RiArrowDropDownLine className='text-[#767676] w-10 h-10' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthenticatdHeader;
