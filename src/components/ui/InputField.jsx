/** @format */

import React from "react";

const InputField = ({
  type,
  label,
  value,
  onChange,
  showToggle,
  placeholder,
  className,
}) => {
  return (
    <div className='px-32 w-full'>
      <label className='block text-sm font-normal text-[#111111]'>
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`border rounded-xl mb-2 p-2 w-full focus:border-[#E9E9E9] hover:border-[#928e8e]  text-base font-normal text-[#111111] ${className}`}
      />
    </div>
  );
};

export default InputField;
