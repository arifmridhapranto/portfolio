import React from "react";
import { Container, ProgressBar, Row, Col } from "react-bootstrap";
import SectionTitle from "../SectionTitle/SectionTitle";

const Skills = () => {
  return (
    <div className='py-5' style={{ background: "#1F2235" }}>
      <SectionTitle>My Skills</SectionTitle>
      <Container>
        <Row>
          <Col xs={12} md={6} lg={4}>
            <div className='py-2'>
              <h4 className='text-white'>HTML</h4>
              <ProgressBar animated now={90} label={`90%`} />
            </div>
            <div className='py-2'>
              <h4 className='text-white'>CSS</h4>
              <ProgressBar variant='info' animated now={90} label={`90%`} />
            </div>
            <div className='py-2'>
              <h4 className='text-white'>JavaScript</h4>
              <ProgressBar animated now={85} label={`85%`} />
            </div>
            <div className='py-2'>
              <h4 className='text-white'>BootStrap</h4>
              <ProgressBar variant='info' animated now={90} label={`90%`} />
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className='py-2'>
              <h4 className='text-white'>TailWind CSS</h4>
              <ProgressBar animated now={70} label={`70%`} />
            </div>
            <div className='py-2'>
              <h4 className='text-white'>Material UI</h4>
              <ProgressBar variant='info' animated now={75} label={`75%`} />
            </div>
            <div className='py-2'>
              <h4 className='text-white'>React Js</h4>
              <ProgressBar animated now={88} label={`88%`} />
            </div>
            <div className='py-2'>
              <h4 className='text-white'>Git/ Github</h4>
              <ProgressBar variant='info' animated now={65} label={`65%`} />
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className='py-2'>
              <h4 className='text-white'>Node JS</h4>
              <ProgressBar animated now={70} label={`70%`} />
            </div>
            <div className='py-2'>
              <h4 className='text-white'>Express JS</h4>
              <ProgressBar variant='info' animated now={60} label={`60%`} />
            </div>
            <div className='py-2'>
              <h4 className='text-white'>MongoDB</h4>
              <ProgressBar animated now={77} label={`77%`} />
            </div>
            <div className='py-2'>
              <h4 className='text-white'>Firebase</h4>
              <ProgressBar variant='info' animated now={75} label={`75%`} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Skills;
