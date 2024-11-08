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
  onClick,
  icon,
}) => {
  return (
    <div className='px-24 w-full relative'>
      <label className='block text-sm font-normal text-[#111111]'>
        {label}
      </label>
      <div
        className={`rounded-xl mb-2 flex items-center justify-between focus-within:border-black border-gray-500  border w-full text-base font-normal text-[#111111]`}>
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          onClick={onClick}
          className={`py-2 px-2 rounded-xl w-full outline-none ${className}`}
        />
        {icon}
      </div>
    </div>
  );
};

export default InputField;
