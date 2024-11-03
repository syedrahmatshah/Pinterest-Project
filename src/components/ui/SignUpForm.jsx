/** @format */

import React, { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";
import { MainLogo } from "../../assets/icons/Icon";
import { FaEye } from "react-icons/fa";

const SignUpForm = ({ description }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form className='w-3/4 h-auto bg-white flex flex-col items-center rounded-3xl'>
      <div className=' flex flex-col justify-center items-center'>
        <MainLogo />
        <h1>Welcome to Pinterest</h1>
        <p>{description}</p>
      </div>
      <InputField
        type='email'
        label='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className='mb-6'
      />
      <InputField
        type={showPassword ? "text" : "password"}
        label='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className='mb-6'
        // showToggle={
        //   showToggle && (
        //     <button
        //       type='button'
        //       onClick={showToggle.toggle}
        //       className='absolute right-2 top-2'
        //       aria-label={
        //         showToggle.isVisible ? "Hide password" : "Show password"
        //       }>
        //       {showToggle.isVisible ? (
        //         <FaEye className='h-5 w-5 text-gray-600' />
        //       ) : (
        //         <FaEye className='h-5 w-5 text-gray-600' />
        //       )}
        //     </button>
        //   )
        // }
      />
      <InputField
        type='email'
        label='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className='mb-6'
      />
      <Button
        className='font-semibold w-64 mb-3 rounded-full py-2.5 px-3 text-base bg-[#CC0000] hover:bg-[#b60000] text-[#FFFFFF] '
        title='Continue'
      />
    </form>
  );
};

export default SignUpForm;
