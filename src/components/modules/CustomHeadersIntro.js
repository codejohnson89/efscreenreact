import React from "react";
import { Row, Col, Container, Jumbotron } from "react-bootstrap";

export const CustomHeadersIntro = ({ header, additional }) => {
  return (
    <Jumbotron id="eFloristHeader">
      <Container>
        <Row>
          <Col>
            <h1>{header}</h1>
            <h2>{additional}</h2>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}
