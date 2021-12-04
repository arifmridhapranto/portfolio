import React from "react";
import { Image, Col, Row, Container, Button } from "react-bootstrap";
import SectionTitle from "../SectionTitle/SectionTitle";
import { ExternalLink } from "react-external-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const AboutMe = () => {
  return (
    <Container
      fluid
      className=' py-5 text-white'
      style={{ background: "#1F2235" }}>
      <SectionTitle> About Me </SectionTitle>
      <Row className='container'>
        <Col
          xs={12}
          md={6}
          className='d-flex justify-content-center align-items-center'>
          <div>
            <Image
              src={
                "https://i.ibb.co/dGRfj3F/IMG-20211126-140429-removebg-preview.png"
              }
              rounded
              thumbnail
            />
          </div>
        </Col>
        <Col
          xs={12}
          md={6}
          className='d-flex justify-content-center align-items-center'>
          <div>
            <h4 className='my-5'>
              Hey! It's Arif Mridha Pranto and I'm a Frontend Web Developer
              located in Bangladesh. I've done some cool Projects with my small
              knowledge, and trying to collaborated with talented people to
              create digital products for both business and consumer use. Feel
              free to contact me here.
            </h4>
            <Row>
              <Col xs={12} lg={6}>
                <h5>
                  Name:
                  <br /> <span className='text-info'>Arif Mridha Pranto</span>
                </h5>
                <h5>
                  Date Of Birth: <br />
                  <span className='text-info'>Oct 15,2000</span>
                </h5>
                <h5>
                  Address: <br />
                  <span className='text-info'>Dhaka,Bangladesh</span>
                </h5>
              </Col>
              <Col xs={12} lg={6}>
                <h5>
                  Email:
                  <br />
                  <span className='text-info'>mridhapranto647@gmail.com</span>
                </h5>
                <h5>
                  Phone: <br />
                  <span className='text-info'>(+880) 1621461188</span>
                </h5>
              </Col>
              <ExternalLink href='https://docs.google.com/document/d/10rqC7dVd1F9PXDumOq3x8W4VRWdiLEtx7ncleQ-TIHo/edit?usp=sharing'>
                <Button size='lg' variant='info' className='mx-1 mt-5'>
                  Get Resume <FontAwesomeIcon className='' icon={faArrowDown} />
                </Button>
              </ExternalLink>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
