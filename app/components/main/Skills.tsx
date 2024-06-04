import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Skills.css";

export default function Skills() {
  return (
    <Container className="skills">
      <Row>
        <Col xs={7} className="left-column">
          <span className="title">Skills</span>
          <p>Coming Soon...</p>
        </Col>
        <Col xs={5} className="right-column"></Col>
      </Row>
    </Container>
  );
}
