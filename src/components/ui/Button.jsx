/** @format */

import React from "react";

const Button = ({ title, className, onClick }) => {
  return (
    <button
      className={`font-semibold  rounded-full py-2.5 px-3 text-base ${className}`}
      onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
