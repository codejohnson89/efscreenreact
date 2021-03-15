import React from 'react';
import { Container, Row, Carousel } from 'react-bootstrap';
import corgi from '../../../../images/slideshows/corgi.jpg';
import fall from '../../../../images/slideshows/fall.jpg';
import flower from '../../../../images/slideshows/flower.jpg';


function SlideshowFull() {
    return (
        <Container className="m-homepage-rotation-full">
            <Row>
        <Carousel indicators={false}>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={corgi}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={fall}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={flower}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </Row>
        </Container>
    )
}

export default SlideshowFull;