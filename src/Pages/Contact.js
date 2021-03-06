import React from "react";
import OtherBanner from "../Components/Banner/OtherBanner";
import ContactMe from "../Components/ContactMe/ContactMe";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

const Contact = () => {
  return (
    <div>
      <Header></Header>
      <OtherBanner>
        <h1>Contact Me</h1>
        <p>Feel free to Contact for any Type of Query</p>
      </OtherBanner>
      <ContactMe></ContactMe>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
