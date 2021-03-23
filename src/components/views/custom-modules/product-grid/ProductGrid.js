import React from 'react';
import { Row } from 'react-bootstrap';
import Products from '../../../modules/Products';
import Parallax from '../parallax/Parallax';


function ProductGrid() {
    return (
        <section className="product-grid container-fluid">
            <Row>
                <Products />
                <Products />
                <Products />
                <Products />
                <Products />
                <Products />
            </Row>
        </section>
    )
}


export default ProductGrid;