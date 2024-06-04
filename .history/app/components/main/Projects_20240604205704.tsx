import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Projects.css";

export default function Projects() {
  return (
    <Container className="projects">
      <Row>
        <Col xs={7} className="left-column">
          <span className="title">Projects</span>
          <p>Coming Soon...</p>
        </Col>
        <Col xs={5} className="right-column"></Col>
      </Row>
    </Container>
  );
}
