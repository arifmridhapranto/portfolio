import React, { useRef, useState } from "react";
import {
  Col,
  Container,
  Form,
  Image,
  Row,
  Button,
  FloatingLabel,
  Modal,
} from "react-bootstrap";
import SectionTitle from "../SectionTitle/SectionTitle";
import emailjs from "emailjs-com";

const ContactMe = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(e);
    emailjs
      .sendForm(
        "service_bwfmjdj",
        "template_75s826s",
        form.current,
        "user_NNzJSg4Ev7cU2dpXEsVTb"
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            setShow(true);
          } else {
            console.log(result);
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div style={{ background: "#1F2235" }}>
      <SectionTitle>Contact Me</SectionTitle>
      <Container className='py-5'>
        <Row>
          <Col xs={12} md={6}>
            <h3 className='text-white'>
              Feel Free to Contact Me for Any type of Query...
            </h3>
            <Form className='text-white' ref={form} onSubmit={sendEmail}>
              <Form.Group className='mb-1' controlId='formBasicEmail'>
                <Form.Label>Your Full Name</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter Your Name'
                  name='name'
                />
              </Form.Group>

              <Form.Group className='mb-1' controlId='formBasicPassword'>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Enter Your Email'
                  name='email'
                />
                <Form.Text className='text-muted'>
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Your Subject</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Your Subject'
                  name='subject'
                />
              </Form.Group>
              <FloatingLabel
                className='text-black mb-2'
                controlId='floatingTextarea2'
                label='Your Message'>
                <Form.Control
                  as='textarea'
                  placeholder='Your Message'
                  name='message'
                  style={{ height: "200px" }}
                />
              </FloatingLabel>
              <Button variant='primary' type='submit' size='lg' value='message'>
                Submit
              </Button>
            </Form>
          </Col>
          <Col
            xs={12}
            md={6}
            className='d-flex justify-content-center align-items-center'>
            <Image
              src={
                "https://portfolio.smakosh.com/static/contact-801bb9dc1ce760be8ee3d84cd758a89a.svg"
              }
            />
          </Col>
        </Row>
      </Container>
      <>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop='static'
          keyboard={false}>
          <Modal.Header closeButton>
            <Modal.Title>Form Submit feedback</Modal.Title>
          </Modal.Header>
          <Modal.Body>"Message sent SuccessFully"</Modal.Body>
          <Modal.Footer>
            <Button variant='info' onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
};

export default ContactMe;
