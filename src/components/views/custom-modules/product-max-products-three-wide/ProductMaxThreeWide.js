import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Products from '../../../modules/Products';

function ProductMaxThreeWide() {
    
    return (
        <Container>
        <Row>
            <Products col="4"/>
            <Products col="4"/>
            <Products col="4"/>
            <Products col="4"/>
            <Products col="4"/>
            <Products col="4"/>
            <Products col="4"/>
            <Products col="4"/>
            <Products col="4"/>
        </Row>
    </Container>
    )
}

export default ProductMaxThreeWide;