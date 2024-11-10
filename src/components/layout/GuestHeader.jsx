/** @format */

import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MainLogo } from "../../assets/icons/Icon";
import Button from "../ui/Button";
import SignUpModal from "../modals/SignUpModal";
import LogInForm from "../modals/LogInForm";
import { AuthContext } from "../../context/authContext";

const GuestHeader = () => {
  const { isAuthenticated, isLoading, error } = useContext(AuthContext);
  const [isOpenSignUpModal, setIsOpenSignUpModal] = useState(false);
  const [isOpenLogInModal, setIsOpenOpenLogInModal] = useState(false);

  return (
    <div className='fixed top-0 left-0 w-full bg-white z-20'>
      <div className='flex justify-between py-5 px-4'>
        <div className='flex justify-between items-center space-x-9 pl-2'>
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
        {isAuthenticated ? (
          <div className='flex justify-between items-center space-x-10'>
            <div className='space-x-2 flex items-center'>
              <Button
                className='  text-black'
                title='Home'
              />
              <Button
                className='text-[#111111] text-base '
                title='Create'
              />
              <div className='w-5 h-5 border rounded-full bg-slate-500'></div>
            </div>
          </div>
        ) : (
          <div className='flex justify-between items-center space-x-10'>
            <Link className='font-semibold text-[#111111] text-base hover:underline decoration-[#111111]'>
              About
            </Link>
            <Link className='font-semibold text-[#111111] text-base hover:underline decoration-[#111111]'>
              Business
            </Link>
            <Link className='font-semibold text-[#111111] text-base hover:underline decoration-[#111111]'>
              Blog
            </Link>
            <div className='space-x-2'>
              <Button
                className='bg-[#CC0000] hover:bg-[#b60000] text-[#FFFFFF]'
                title='Log in'
                onClick={() => setIsOpenOpenLogInModal(true)}
              />
              <Button
                className='text-[#111111] text-base bg-[#E2E2E2] hover:bg-[#e2e2e2a8]'
                title='Sign up'
                onClick={() => setIsOpenSignUpModal(true)}
              />
            </div>
          </div>
        )}
      </div>
      <SignUpModal
        openModal={isOpenSignUpModal}
        closeModal={() => setIsOpenSignUpModal(false)}
      />
      <LogInForm
        openModal={isOpenLogInModal}
        closeModal={() => setIsOpenOpenLogInModal(false)}
      />
    </div>
  );
};

export default GuestHeader;
