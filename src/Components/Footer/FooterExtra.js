import React from "react";
import { Container } from "react-bootstrap";

const FooterExtra = () => {
  return (
    <Container
      fluid
      className='text-center py-5'
      style={{ background: "#23263A" }}>
      <div className='row'>
        <div className='col-12 col-md-4'>
          <img
            src={"https://i.ibb.co/YydVtLY/pranto-logo.png"}
            alt=''
            height='100px'
            className='thumbnail'
          />
        </div>
        <div className='text-white col-12 col-md-6'>
          <h1 className='text-info'>Arif Mridha Pranto</h1>
          <p>
            Hey! It's Arif Mridha Pranto and I'm a Frontend Web Developer
            located in Bangladesh. I've done some cool Projects with my small
            knowledge, and trying to collaborated with talented people to create
            digital products for both business and consumer use. Feel free to
            contact me here.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default FooterExtra;
