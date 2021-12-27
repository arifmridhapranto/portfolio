import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./Project.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div style={{ background: "#242638" }}>
      <SectionTitle>Show Case</SectionTitle>

      <Container className='scrollBar'>
        {projects.map((project) => (
          <Row
            className='py-4 scrollBar'
            style={{ overflow: "hidden" }}
            key={project.id}>
            <Col
              xs={12}
              md={6}
              className='project-image'
              style={{
                height: "300px",
                overflowY: "scroll",
                scrollbarWidth: "none",
              }}>
              <Image src={project.image} className='project-image' thumbnail />
            </Col>
            <Col
              xs={12}
              md={6}
              className='text-white mt-4 d-flex justify-content-center flex-column'>
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <Link to={`/singleproject/${project.id}`}>
                <Button variant='outline-info'>Case Study</Button>
              </Link>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
};

export default Projects;
