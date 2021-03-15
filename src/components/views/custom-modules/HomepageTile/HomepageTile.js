import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';

function HomepageTile() {
    return (
        <Container className="m-features">
            <Row>
                <Col sm={6} className="m-features-bottom">
                    <figure>
                        <img className="img-fluid" src="http://assets.eflorist.com/images/homepage/tiles/homepage_tile_get_well.jpg"/>
                        <figcaption><h3>Get well flowers</h3><p>Send Get Well Flowers</p></figcaption>
                    </figure>
                </Col>
                <Col sm={6} className="m-features-bottom">
                    <figure>
                        <img className="img-fluid" src="http://assets.eflorist.com/images/homepage/tiles/homepage_tile_get_well.jpg"/>
                        <figcaption><h3>Get well flowers</h3><p>Send Get Well Flowers</p></figcaption>
                    </figure>
                </Col>
            </Row>
        </Container>
    )
}

export default HomepageTile;