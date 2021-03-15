import React from 'react';
import { Col, Card } from 'react-bootstrap';

import cat_bouq_07 from '../../../src/images/product/cat_bouq_07.png';
import { Link } from 'react-router-dom';

function Products(props) {
    return (
        <Col className="m-product-mini" sm={props.col}>
            <Link to="/">
                <Card>
                    <Card.Img variant="top" src={cat_bouq_07}/>
                    <Card.Body>
                        <Card.Title className="m-category-flower-link">Sincerely Yours Bouquet by Teleflora</Card.Title>
                        <Card.Text className="m-product-price">39.99</Card.Text>
                        <Card.Text className="m-product-buynow">Buy Now</Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </Col>

    )
}

export default Products