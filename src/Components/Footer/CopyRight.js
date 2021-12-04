import React from "react";

const CopyRight = () => {
  return (
    <div className='container-fluid py-3' style={{ background: "#1F2235" }}>
      <h4 className='text-white text-center'>
        Copyright © 2020 | {}
        <a
          href='https://www.facebook.com/arifmridha.pranto.1/'
          className='text-info text-decoration-none'>
          Arif Mridha Pranto
        </a>
        . All Rights Reserved.
      </h4>
    </div>
  );
};

export default CopyRight;
