import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

function EnrollForm({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Enroll Now</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>
          <Form.Group controlId="formEmail" className="mt-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>
          <Form.Group controlId="formPhone" className="mt-3">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="tel" placeholder="Enter your phone number" />
          </Form.Group>
          <Form.Group controlId="formMessage" className="mt-3">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Your message" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={() => alert("Form submitted!")}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EnrollForm;
