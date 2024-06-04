import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <Container className="about-me">
      <Row>
        <Col xs={7} className="left-column">
          <span className="title">About Me</span>
          <p>Placeholder</p>
          <p>Placeholder</p>
          <p>Placeholder</p>
          <p>Placeholder</p>
          <p>Placeholder</p>
          <p>Placeholder</p>
        </Col>
        <Col xs={5} className="right-column"></Col>
      </Row>
    </Container>
  );
}
