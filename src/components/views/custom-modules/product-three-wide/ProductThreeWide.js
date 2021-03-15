import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Products from '../../../modules/Products';

function ProductThreeWide() {
    
    return (
        <Container className="m-homepage-three-products">
        <Row>
            <Col sm={12} className="m-homepage-three-products-title">
                <h2 className="header-wrap">here's what mom really wants</h2>
            </Col>
            <Products className="m-product" col="4"/>
            <Products className="m-product" col="4"/>
            <Products className="m-product" col="4"/>
            <Col className="m-homepage-three-products-btn" sm={12}><Button>Shop All Mother's Day Bouquets</Button></Col>
        </Row>
    </Container>
    )
}

export default ProductThreeWide;