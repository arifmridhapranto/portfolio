import React, { useState, useEffect } from "react";
import { Col, Image, Row, Spinner, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import OtherBanner from "../Banner/OtherBanner";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { ExternalLink } from "react-external-link";

const SingleProject = () => {
  const { id } = useParams();
  const [projectDetails, setProjectDetails] = useState([]);
  const [singleProject, setSingleProject] = useState({});

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjectDetails(data);
      });
  }, [id]);

  useEffect(() => {
    const project = projectDetails.find((el) => el.id == id);
    setSingleProject(project);
  }, [id, projectDetails]);

  return (
    <div>
      <Header></Header>
      <OtherBanner>
        <h1>Project {id}</h1>
        <h2>{singleProject?.name}</h2>
      </OtherBanner>
      <div className='py-3' style={{ background: "#1F2235" }}>
        {singleProject?.name ? (
          <div className='container'>
            <Row>
              {singleProject.image.map((img) => (
                <Col
                  xs={12}
                  md={4}
                  className='my-2'
                  key={img}
                  style={{
                    height: "500px",
                    overflow: "auto",
                  }}>
                  <Image thumbnail src={img} />
                </Col>
              ))}
            </Row>
            <div className='text-white'>
              <h1 className='text-white'>Project Overview - </h1>
              {singleProject.description.map((desc) => (
                <li>{desc}</li>
              ))}
            </div>
            <div className=''>
              <h2 className='text-white'>Tools Used - </h2>
              {singleProject.tools.map((tool) => (
                <Button variant='outline-info' className='m-2 ' key={tool}>
                  {tool}
                </Button>
              ))}
            </div>
            <div className=''>
              <h2 className='text-white'>Links -</h2>
              {singleProject.links.map((lnk) => (
                <ExternalLink href={lnk.link} key={lnk.id}>
                  <Button variant='info' className='m-2'>
                    {lnk.name}
                  </Button>
                </ExternalLink>
              ))}
            </div>
          </div>
        ) : (
          <div className='text-center' style={{ background: "#1F2235" }}>
            <Spinner animation='border' variant='info' />
          </div>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default SingleProject;
