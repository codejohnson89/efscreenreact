import React from 'react';
import { Container, Row } from 'react-bootstrap';

function MarketingBanner() {
    return (
        <Container className="marketingBanner">
            <Row>
                <figure>
                    <img className="img-fluid" src="https://assets.eflorist.com/images/campaigns/mothers_day/homepage_banner_mothers_day_video.jpg"/>
                </figure>
            </Row>
        </Container>
    )
}

export default MarketingBanner;