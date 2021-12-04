import React from "react";
import AboutMe from "../Components/AboutMe/AboutMe";
import Banner from "../Components/Banner/Banner";
import ContactMe from "../Components/ContactMe/ContactMe";
import Education from "../Components/Education/Education";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Projects from "../Components/Projects/Projects";
import Skills from "../Components/Skills/Skills";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <AboutMe></AboutMe>
      <Education></Education>
      <Skills></Skills>
      <Projects></Projects>
      <ContactMe></ContactMe>
      <Footer></Footer>
    </div>
  );
};

export default Home;
