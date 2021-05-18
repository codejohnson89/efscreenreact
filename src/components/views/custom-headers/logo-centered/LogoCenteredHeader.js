import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function LogoCenteredHeader() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/"><img src="//assets.eflorist.com/site/43003900/Logo/logo.png"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="Occasions" id="occasionDropDown">
                        <Container>
                            <Row>
                                <Col sm={3}>Column 1</Col>
                                <Col sm={6}>Column 2</Col>
                                <Col sm={3}>Column 3</Col>
                            </Row>
                        </Container>
                    </NavDropdown>
                    <Nav.Link>Spring Bouquets</Nav.Link>
                    <NavDropdown title="Flowers" id="flowersDropDown"></NavDropdown>
                    <Nav.Link>About Us</Nav.Link>
                    <Nav.Link>Help</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}


export default LogoCenteredHeader;