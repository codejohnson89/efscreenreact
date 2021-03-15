import React from 'react';
import { Row, Col, Container, Jumbotron } from 'react-bootstrap';

function CustomHeadersIntro (props) {
    return (
        <Jumbotron id="eFloristHeader">
        <Container>
            <Row>
                <Col>
                    <h1>{props.header}</h1>
                    <h2>{props.additional}</h2>
                </Col>
            </Row>
            </Container>
        </Jumbotron>

    )
}

export default CustomHeadersIntro;