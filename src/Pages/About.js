import React from "react";
import AboutMe from "../Components/AboutMe/AboutMe";
import OtherBanner from "../Components/Banner/OtherBanner";
import Education from "../Components/Education/Education";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Skills from "../Components/Skills/Skills";

const About = () => {
  return (
    <div>
      <Header></Header>
      <OtherBanner>
        <h1>About Me</h1>
        <h5>Let Me introduce Myself</h5>
      </OtherBanner>
      <AboutMe></AboutMe>
      <Education></Education>
      <Skills></Skills>
      <Footer></Footer>
    </div>
  );
};

export default About;
