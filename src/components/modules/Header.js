import React from 'react';
import  {Navbar, Nav, NavDropdown, Container, Row}  from 'react-bootstrap';
import { Link } from 'react-router-dom';

/*
    export const Component allows me to use named exports so I can't
    accidentally rename a default export. I've seen some renaming of
    default exports and it's very confusing. There was a component
    imported as `style` when it was actually a component, and not style.

    It's mainly about readability and cognitive complexity. Let's make it
    easy on ourselves so we know exactly what we're looking at in this
    growing application. You don't need to go back and change every single
    one right now. Just as you work through the different files. Start making
    these changes. They will benefit you in the long run, and allow you to
    make better decisions down the road as this app gets huge.

    You should also start identifying base components you can use throughout many
    other components/views. There is a TON of specific components here that could
    be generalized either with the help of Bootstrap or a third-party like Chakra UI.
    You could also create your own generic components if it makes more sense to
    do so. But this component is a prime example of having generic components.
    You know that Nav.Link can only exist within a Nav component.
*/

export const Header = () => {
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
                                <NavDropdown.Item><Link to="/categories">Categories &amp; Search</Link></NavDropdown.Item>
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
