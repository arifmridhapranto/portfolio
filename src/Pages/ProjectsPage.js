import React from "react";
import OtherBanner from "../Components/Banner/OtherBanner";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Projects from "../Components/Projects/Projects";

const ProjectsPage = () => {
  return (
    <div>
      <Header></Header>
      <OtherBanner>
        <h1>Projects</h1>
        <p>My projects makes use of latest technology tools.</p>
      </OtherBanner>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
};

export default ProjectsPage;
