/** @format */

import React from "react";

const InputField = ({ type, label, value, onChange, showToggle }) => {
  return (
    <div className='relative px-32 w-full'>
      <label className='block text-sm font-medium text-gray-700'>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className='border rounded-md p-2 w-full focus:border-blue-500 focus:outline-none'
        placeholder={label}
      />
    </div>
  );
};

export default InputField;
