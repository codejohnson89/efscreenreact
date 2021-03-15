import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Products from '../../../modules/Products';

function ProductFiveWide() {
    
    return (
        <Container className="m-homepage-five-products">
        <Row>
            <Col sm={12} className="m-homepage-five-products-title">
                <h2 className="header-wrap">here's what mom really wants</h2>
            </Col>
            <Col sm={1}></Col>
            <Products className="m-product" col="2"/>
            <Products className="m-product" col="2"/>
            <Products className="m-product" col="2"/>
            <Products className="m-product" col="2"/>
            <Products className="m-product" col="2"/>
            <Col sm={1}></Col>
            <Col className="m-homepage-three-products-btn" sm={12}><Button>Shop All Mother's Day Bouquets</Button></Col>
        </Row>
    </Container>
    )
}

export default ProductFiveWide;