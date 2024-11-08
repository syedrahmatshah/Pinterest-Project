/** @format */

import React from "react";

import { MainLogo } from "../../assets/icons/Icon";

const Form = ({ description, children, onSubmit }) => {
  return (
    <form
      className='w-8/12 h-auto bg-white rounded-3xl '
      onSubmit={onSubmit}>
      <div className=' flex flex-col justify-center items-center mb-5 pt-8 '>
        <MainLogo />
        <h1 className='text-[32px] font-semibold text-[#211922] mt-2'>
          Welcome to Pinterest
        </h1>
        <p className='text-lg font-normal text-[#211922]'>{description}</p>
      </div>
      {children}
    </form>
  );
};

export default Form;
