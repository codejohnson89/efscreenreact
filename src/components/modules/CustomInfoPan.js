import React from "react";
import { Col, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

// Specifying our props like we do here is the first step
// to knowing what our component needs. Yes, you could do
// props.prop if you'd like, but that can lead to a bunch
// of extra props you don't need, or might be special use-cases.
// It's also the first step to typing your props to get ready
// for either PropTypes or TypeScript.

export const CustomInfoPan = ({
  header,
  linkPage,
  linkDoc,
  version,
  text,
  code,
}) => (
  <Col sm={12}>
    <h3>{header} </h3>
    <ButtonGroup>
      <Link className="btn btn-primary" to={linkPage}>
        View Page
      </Link>
      <Link className="btn btn-secondary" to={linkDoc}>
        Doc
      </Link>
    </ButtonGroup>
    <p>
      {version}
      <br />
      {text}
      <br />
      In order to use this component use the following code :{" "}
      <code>{code}</code>
    </p>
  </Col>
);
