import React, { useEffect } from 'react';
import { Form, Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../../../../../Redux/auth/authLoginSlice';
import logo from '../../../../../images/headerLogo/logo.png';
import { FormControl } from 'react-bootstrap';
import '../../../../styles/navbarStyles/standard/standard.scss';

const NavigationBar = () => {
    const loggedIn = useSelector(state => state.authLogin.value)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(loggedIn)
    })
    return (
        <>
        <Container>
            <Navbar expand="lg" className="standard">
            <Navbar.Brand><img className="d-block" src={logo} alt="test logo" width="125px"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form className="searchBar">
                        <FormControl type="search" placeholder="Search" class="mr-2" aria-label="Search"></FormControl>
                    </Form>
                    <Nav activeKey="/home" className="mr-auto">
                        <Nav.Item>
                            <Nav.Link href="/home">Spring Flowers</Nav.Link>
                        </Nav.Item>
                        <NavDropdown title="Occasions">
                            <NavDropdown.Item>BirthDay</NavDropdown.Item>
                            <NavDropdown.Item>Anniversary</NavDropdown.Item>
                            <NavDropdown.Item>Wedding</NavDropdown.Item>
                            <NavDropdown.Item>Thank You</NavDropdown.Item>
                            <NavDropdown.Item>Sympathy</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Flowers">
                            <NavDropdown.Item>Spring Bouquets</NavDropdown.Item>
                            <NavDropdown.Item>Plants</NavDropdown.Item>
                            <NavDropdown.Item>Roses</NavDropdown.Item>
                            <NavDropdown.Item>Modern</NavDropdown.Item>
                            <NavDropdown.Item>Lavish</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">About Us</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2">Help</Nav.Link>
                        </Nav.Item>                    
                    </Nav>
                    <Nav className="right-nav">
                    <Nav.Item><Nav.Link href="tel:4052557470">405-255-7470</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="tel:4052557470">405-255-1234</Nav.Link></Nav.Item>
                        <Nav.Item>
                            {!loggedIn ? <Nav.Link onClick={() => dispatch(login())}>Login</Nav.Link> : <Nav.Link onClick={() => dispatch(logout())}>Logout</Nav.Link>}
                        </Nav.Item>
                        <Nav.Item><Nav.Link>Cart</Nav.Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </Container>
        </>
    )
};


export default NavigationBar;