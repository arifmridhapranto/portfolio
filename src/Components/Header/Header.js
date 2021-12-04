import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      sticky='top'
      expand='lg'
      variant='light'
      className='py-2'
      style={{ background: "#1F2235" }}>
      <Container>
        <Navbar.Brand>
          <Link to='/'>
            <img
              src='https://i.ibb.co/YydVtLY/pranto-logo.png'
              alt=''
              height='50px'
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ms-auto text-center'>
            <Link to='/' className='text-decoration-none mx-3 fs-4 text-light'>
              Home
            </Link>
            <Link to='/' className='text-decoration-none mx-3 fs-4 text-light'>
              Projects
            </Link>
            <Link
              to='/blogs'
              className='text-decoration-none mx-3 fs-4 text-light'>
              Blogs
            </Link>
            <Link
              to='/about'
              className='text-decoration-none mx-3 fs-4 text-light'>
              About Me
            </Link>
            <Link
              to='/contact'
              className='text-decoration-none mx-3 text-light'>
              <Button size='sm' className='fs-5 fw-bold' variant='info'>
                Contact Me <FontAwesomeIcon className='' icon={faArrowRight} />
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
