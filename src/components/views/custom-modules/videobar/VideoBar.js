import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import styles from './styles.scss';

function VideoBar() {
    return (
        <Container className="videobar-container">
            <h2>About Our Shop</h2>
            <Row>            
                <Col sm={6}>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/mmvAzYSTmaM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>
                <Col sm={6}>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/mmvAzYSTmaM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Col>
            </Row>
        </Container>
    )
}

export default VideoBar;