import React from 'react';
import  {Navbar, Nav, NavDropdown, Container, Row}  from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header () {
    return (
        <Container className="clearfix">
            <Row>
                <Navbar bg="light" variant="light" fixed="top" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link><Link to="/">Home</Link></Nav.Link>
                            <Nav.Link><Link to="/styles-guide">Style Guides</Link></Nav.Link>
                            <Nav.Link href="#link">Global Modules</Nav.Link>
                            <NavDropdown title="Custom" id="basic-nav-dropdown">
                            <NavDropdown.Item><Link to='/custom-headers'>Custom Headers</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to='/custom-modules'>Custom Modules</Link></NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Layouts" id="basic-nav-dropdown">
                                <NavDropdown.Item><Link to="/homepages">Homepages</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/categories">Categories & Search</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/productpages">Product Pages</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/my-account">My Account</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/checkout">Checkout</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/miscpages">Misc Pages</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/wedding">Wedding Pages</Link></NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Row>
        </Container>
    )
}

export default Header;