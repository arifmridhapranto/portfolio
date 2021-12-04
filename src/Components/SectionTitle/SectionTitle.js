import React from "react";

const SectionTitle = ({ children }) => {
  return (
    <div className='text-center py-3'>
      <h1
        className='fs-1 fw-bolder text-white'
        style={{
          textDecoration: "underline ",
          textDecorationColor: "#15CCF0",
          textDecorationThickness: "5px",
        }}>
        {children}
      </h1>
    </div>
  );
};

export default SectionTitle;
