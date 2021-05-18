import React from 'react';
import { Container, Row } from 'react-bootstrap';
import image from '../../../../images/occasion-tiles/banner.jpg';

function MarketingBanner() {
    return (
        <Container className="marketingBanner">
            <Row>
                <figure>
                    <img className="img-fluid" src={image}/>
                </figure>
            </Row>
        </Container>
    )
}

export default MarketingBanner;