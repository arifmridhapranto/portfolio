import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ExternalLink } from "react-external-link";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Banner = () => {
  return (
    <div
      style={{ background: "#242638" }}
      className='container-fluid vh-100 pb-5 text-center d-flex justify-content-center align-items-center'>
      <div className='text-light text-left'>
        <h1>Hello,</h1>
        <h1 className='fw-bolder' style={{ fontSize: "50px" }}>
          <span className='text-info'>I'M</span> ARIF MRIDHA PRANTO.
        </h1>
        <h2>
          I'M <span>Front End Developer (React)</span>
        </h2>
        <h3>
          Every <span className='text-info'>master</span> was once a
          <span className='text-info'> beginner.</span>
        </h3>
        <div className='my-3'>
          <ExternalLink href='https://docs.google.com/document/d/10rqC7dVd1F9PXDumOq3x8W4VRWdiLEtx7ncleQ-TIHo/edit?usp=sharing'>
            <FontAwesomeIcon
              className='border border-info p-1 rounded-circle text-info fs-1 mx-3'
              icon={faFacebook}
            />
          </ExternalLink>
          <ExternalLink href='https://docs.google.com/document/d/10rqC7dVd1F9PXDumOq3x8W4VRWdiLEtx7ncleQ-TIHo/edit?usp=sharing'>
            <FontAwesomeIcon
              className='border border-info p-1 rounded-circle text-info fs-1 mx-3'
              icon={faLinkedin}
            />
          </ExternalLink>
          <ExternalLink href='https://docs.google.com/document/d/10rqC7dVd1F9PXDumOq3x8W4VRWdiLEtx7ncleQ-TIHo/edit?usp=sharing'>
            <FontAwesomeIcon
              className='border border-info p-1 rounded-circle text-info fs-1 mx-3'
              icon={faGithub}
            />
          </ExternalLink>
        </div>
        <div className='mt-5 mx-auto d-flex justify-content-center align-items-center'>
          <Link to='contact'>
            <Button className='mx-1' variant='outline-info' size='lg'>
              Contact Me <FontAwesomeIcon className='' icon={faArrowRight} />
            </Button>
          </Link>
          <ExternalLink href='https://docs.google.com/document/d/10rqC7dVd1F9PXDumOq3x8W4VRWdiLEtx7ncleQ-TIHo/edit?usp=sharing'>
            <Button size='lg' variant='info' className='mx-1'>
              Get Resume <FontAwesomeIcon className='' icon={faArrowRight} />
            </Button>
          </ExternalLink>
        </div>
      </div>
    </div>
  );
};

export default Banner;
