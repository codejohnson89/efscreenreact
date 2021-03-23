import React from 'react';
import { Container, Row, Carousel, Figure, Image, Col, Button } from 'react-bootstrap';

import product from '../../../../../src/images/product/product.jpg';
import product2 from '../../../../../src/images/product/cat_bouq_07.png';
import { Link } from 'react-router-dom';

function ProductRotation() {
    return (        
                <Carousel className="m-homepage-product-rotation" interval={3000}>
                    <Carousel.Item className="m-homepage-product-rotation-slide">
                        <Container>
                            <Row>
                                <Link to="/" className="pdplink row">
                                    <Col md={6} sm={12} className="m-homepage-product-rotation-img">
                                        <Figure><Image src={product} rounded/></Figure>
                                    </Col>
                                    <Col md={6} sm={12} className="m-homepage-product-rotation-text">
                                        <h2 class="m-homepage-product-title">Harvest Beauty</h2>
                                        <p class="m-homepage-product-description">Bright and light orange gerberas, bronze cushion spray chrysanthemums, red daisy spray chrysanthemums, huckleberry, yellow oak leaves and more fill a hand-painted ceramic pumpkin that can be used over and over again. In fact, this pretty pumpkin is destined to carve out a special place in someone's home for years to come!</p>
                                        <p class="m-homepage-product-price">$53.99</p>
                                        <Button href="/#" class="m-homepage-product-rotation-link btn">Shop Now</Button>
                                    </Col>
                                </Link>
                            </Row>
                        </Container>
                    </Carousel.Item>
                    <Carousel.Item className="m-homepage-product-rotation-slide">
                        <Container>
                            <Row>
                                <Link to="/" className="pdplink row">
                                    <Col md={6} sm={12} className="m-homepage-product-rotation-img">
                                        <Figure><Image src={product} rounded/></Figure>
                                    </Col>
                                    <Col md={6} sm={12} className="m-homepage-product-rotation-text">
                                        <h2 class="m-homepage-product-title">Harvest Beauty</h2>
                                        <p class="m-homepage-product-description">Bright and light orange gerberas, bronze cushion spray chrysanthemums, red daisy spray chrysanthemums, huckleberry, yellow oak leaves and more fill a hand-painted ceramic pumpkin that can be used over and over again. In fact, this pretty pumpkin is destined to carve out a special place in someone's home for years to come!</p>
                                        <p class="m-homepage-product-price">$53.99</p>
                                        <Button href="/#" class="m-homepage-product-rotation-link btn">Shop Now</Button>
                                    </Col>
                                </Link>
                            </Row>
                        </Container>
                    </Carousel.Item>
                    <Carousel.Item className="m-homepage-product-rotation-slide">
                        <Container>
                            <Row>
                                <Link to="/" className="pdplink row">
                                    <Col md={6} sm={12} className="m-homepage-product-rotation-img">
                                        <Figure><Image src={product} rounded/></Figure>
                                    </Col>
                                    <Col md={6} sm={12} className="m-homepage-product-rotation-text">
                                        <h2 class="m-homepage-product-title">Harvest Beauty</h2>
                                        <p class="m-homepage-product-description">Bright and light orange gerberas, bronze cushion spray chrysanthemums, red daisy spray chrysanthemums, huckleberry, yellow oak leaves and more fill a hand-painted ceramic pumpkin that can be used over and over again. In fact, this pretty pumpkin is destined to carve out a special place in someone's home for years to come!</p>
                                        <p class="m-homepage-product-price">$53.99</p>
                                        <Button href="/#" class="m-homepage-product-rotation-link btn">Shop Now</Button>
                                    </Col>
                                </Link>
                            </Row>
                        </Container>
                    </Carousel.Item>
                </Carousel>
    )
}

export default ProductRotation;