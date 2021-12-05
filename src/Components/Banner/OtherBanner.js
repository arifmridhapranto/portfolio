import React from "react";

const OtherBanner = ({ children }) => {
  return (
    <div
      className='text-white h-100 text-center py-5'
      style={{ background: "#242638" }}>
      {children}
    </div>
  );
};

export default OtherBanner;
