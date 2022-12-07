import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./ContactHero.css";

export default function ContactForm() {
  return (
    <>
      <div className="contact-us-section-container">
        <h1 className="contact-heading">Contact Us</h1>
      </div>

      <div className="col-lg-6-md-4 mt-5">
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Your Name"
            aria-label="Name"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Recipient's Middle Name"
            aria-label="Middle Name"
            aria-describedby="basic-addon2"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder=" Last Name"
            aria-label="Last Name"
            aria-describedby="basic-addon2"
          />
        </InputGroup>

        <Form.Label htmlFor="email">Your email Address</Form.Label>
        <InputGroup className="mb-3">
          <Form.Control
            id="email"
            aria-describedby="basic-addon3"
            placeholder="user123@gmail.com"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup className="mb-3">
            <DropdownButton
              variant="outline-secondary"
              title="Choose Language"
              id="input-group-dropdown-1"
            >
              <Dropdown.Item href="#">German</Dropdown.Item>
              <Dropdown.Item href="#">French</Dropdown.Item>
              <Dropdown.Item href="#">Arabic</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">More languages</Dropdown.Item>
            </DropdownButton>
            <Form.Control
              aria-label="Text input with dropdown button"
              placeholder="The Language that you're interested in"
            />
          </InputGroup>

          <Form.Control
            as="textarea"
            aria-label="With textarea"
            placeholder="Any Specific Query? Let us Help"
          />
        </InputGroup>
      </div>
    </>
  );
}
