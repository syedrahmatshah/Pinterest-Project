/** @format */

import React from "react";

const AppLayout = ({ children }) => {
  return (
    <div>
      <div>{children}</div>
      <div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default AppLayout;
