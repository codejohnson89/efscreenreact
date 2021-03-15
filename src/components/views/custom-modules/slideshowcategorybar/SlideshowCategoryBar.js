import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import SlideshowFull from '../slideshowfull/SlideshowFull';
import CategoryBar from '../categorybar/CategoryBar';

function SlideshowCategoryBar() {
    return (
        <Container>
            <Row>
                <Col md={2}><CategoryBar/></Col>
                <Col md={10}><SlideshowFull/></Col>
            </Row>
        </Container>
    )
}

export default SlideshowCategoryBar;