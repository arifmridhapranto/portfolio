import React from "react";
import OtherBanner from "../Components/Banner/OtherBanner";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

const Blogs = () => {
  return (
    <div>
      <Header></Header>
      <OtherBanner>
        <h1>Blogs</h1>
        <p>
          with love for developing cool stuff, i love to write and teach others
          what i have learnt.
        </p>
      </OtherBanner>
      <div className='text-center py-5' style={{ background: "#1F2235" }}>
        <h2 className='text-white'>Blogs Coming Soon</h2>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Blogs;
