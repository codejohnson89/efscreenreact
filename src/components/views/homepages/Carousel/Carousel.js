import React from 'react';
import SlideshowFull from '../../custom-modules/slideshowfull/SlideshowFull';
import Footer from '../../global/footer/footer';
import NavigationBar from '../../global/header/nav/NavigationBar';
import { Col, Container, Row } from 'react-bootstrap';
import Products from '../../../modules/Products';
import GoogleMap from '../../custom-modules/google-map/googlemap';


const Carousel = () => {
    return (
        <div className="seasonal-summer">
            <NavigationBar />
                <SlideshowFull/>
                <Container >
                    <Row>
                        <Col sm={4}></Col>
                        <Col sm={8} className="row">
                            <Col sm={4}><Products/></Col>
                            <Col sm={4}><Products/></Col>
                            <Col sm={4}><Products/></Col>
                            <Col sm={4}><Products/></Col>
                            <Col sm={4}><Products/></Col>
                            <Col sm={4}><Products/></Col>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row className="m-homepage-middle-promo">
                            <p class="m-homepage-middle-promo-text text-center">Fo the best and freshest flowers in OKLAHOMA CITY, Micah 7 has exactly what you’re looking for!  Check out our wide selection of flower arrangements to make your next occasion memorable.</p>
                    </Row>
                </Container>
                <GoogleMap />
            <Footer/>
        </div>
    )
}


export default Carousel;