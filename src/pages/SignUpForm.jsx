/** @format */

import React from "react";
import { FaEye } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import InputField from "./InputField";
import Button from "./Button";
import { useState } from "react";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <InputField
        type='email'
        label='Email'
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        type='password'
        label='Password'
        placeholder='Create a password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className='relative'
      />
      <FaEye className='h-3 w-3 text-gray-600 absolute top-[39.5%] right-[22.5%] ' />
      <InputField
        type='date'
        label='Birthdate'
        // value={date}
        // onChange={(e) => setEmail(e.target.value)}
      />
      <Button
        className='font-semibold w-64 mb-1 rounded-full py-2.5 px-3 text-base bg-[#CC0000] hover:bg-[#b60000] text-[#FFFFFF] '
        title='Continue'
      />
      <p className='text-[#333333] font-bold text-sm'>OR</p>
      <div className='flex items-center border rounded-full w-64 px-3 mt-4'>
        <FcGoogle className='w-7 h-7' />
        <Button
          className='font-normal font-sans w-64 mb-1  py-2.5 px-3 text-sm text-center text-[#3c4043] '
          title='Continue with Google'
        />
      </div>
      <div className='w-64 text-center mt-4'>
        <p className='text-[#767676] text-xs font-normal w-64 px-2'>
          By continuing, you agree to Pinterest's
          <a
            href=''
            className='text-[#111111] font-semibold'>
            Term of Service
          </a>
          and acknowledge you've read our
          <a
            href=''
            className='text-[#111111] font-semibold'>
            &nbsp;Privacy Policy
          </a>
          <a
            href=''
            className='text-[#111111] font-semibold'>
            &nbsp;Notice at Collection
          </a>
        </p>
      </div>
      <div className='text-xs font-normal text-[#111111] my-6'>
        Already a member? <a href=''>Log in</a>
      </div>
      <div className='p-4 w-full rounded-b-3xl text-base text-[#111111] font-semibold text-center bg-[#E9E9E9]'>
        <a href=''>Create a free business account</a>
      </div>
    </div>
  );
};

export default SignUpForm;
