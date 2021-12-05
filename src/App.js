import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Blogs from "./Pages/Blogs";
import ProjectsPage from "./Pages/ProjectsPage";
import SingleProject from "./Components/SingleProject/SingleProject";

function App() {
  return (
    <div className=''>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/singleproject/:id' element={<SingleProject />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
