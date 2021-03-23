import React from 'react';
import { Col, ButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CustomInfoPan(props) {
    return (
        <Col sm={12}>
            <h3>{props.header} </h3>
            <ButtonGroup>
                <Link className="btn btn-primary" to={props.linkPage}>View Page</Link>
                <Link className="btn btn-secondary" to={props.linkDoc}>Doc</Link>
            </ButtonGroup>
            <p>{props.version}<br/>{props.text}<br/>In order to use this component use the following code :   <code>{props.code}</code></p>
        </Col>
    )
}

export default CustomInfoPan;