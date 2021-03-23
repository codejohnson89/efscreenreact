import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function QuickLinks() {
    return (
        <Container>
            <Row>
            <Col className="text-center" sm={12}><h2>Select An Occasion</h2></Col>
                <Col sm={2}><Link to="/"><li>Birthday</li></Link></Col>
                <Col sm={2}><Link to="/"><li>Romance</li></Link></Col>
                <Col sm={2}><Link to="/"><li>New Baby</li></Link></Col>
                <Col sm={2}><Link to="/"><li>Mother's Day</li></Link></Col>
                <Col sm={2}><Link to="/"><li>Weddings</li></Link></Col>
                <Col sm={2}><Link to="/"><li>Funeral</li></Link></Col>
            </Row>
        </Container>
    )
}


export default QuickLinks;