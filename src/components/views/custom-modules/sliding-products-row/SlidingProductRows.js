import React from 'react';
import { Carousel, Container, Row } from 'react-bootstrap';
import Products from '../../../modules/Products';


function SlidingProductRows() {

    return (
        <Container>
            <Row>
                <div className="slidingProductRows">
                   <div className="slidingProduct">
                        <Products/>
                    </div>
                   <div className="slidingProduct">
                        <Products/>
                    </div>
                   <div className="slidingProduct">
                        <Products/>
                    </div>
                   <div className="slidingProduct">
                        <Products/>
                    </div>
                   <div className="slidingProduct">
                        <Products/>
                    </div>
                   <div className="slidingProduct">
                        <Products/>
                    </div>
                   <div className="slidingProduct">
                        <Products/>
                    </div>
                </div>
            </Row>
        </Container>
    )
}


export default SlidingProductRows;