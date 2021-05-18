import React from 'react';
import SlideshowFull from '../../custom-modules/slideshowfull/SlideshowFull';
import MarketingBanner from '../../custom-modules/marketingBanner/MarketingBanner';
import HomepageTile from '../../custom-modules/HomepageTile/HomepageTile';
import { Row, Container, Col, Button } from 'react-bootstrap';
import ProductFiveWide from '../../custom-modules/product-five-wide/ProductFiveWide';
import { Link } from 'react-router-dom';
import Products from '../../../modules/Products';
import Footer from '../../global/global/Footer/footer';

function Immersion() {
    return (
        <>
            <SlideshowFull/>
            <ProductFiveWide/>
            <MarketingBanner/>
            <Container>
                <Row>
                    <Col sm={4} className="m-special-day">
                        <h2 className="header">Show you care when you cant be there</h2>
                        <p>Send Beautiful Flowers and Make Someone Smile</p>
                        <br></br>
                        <Button><Link to="/">Make Someone Smile</Link></Button>
                    </Col>
                    <Col sm={8} className="m-special-day-bouquets row">
                        <Products col={4}/>
                        <Products col={4}/>
                        <Products col={4}/>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <div class="m-homepage-middle-promo">
                        <p class="m-homepage-middle-promo-text text-center">For the best and freshest flowers in OKLAHOMA CITY, Micah 7 has exactly what you’re looking for!  Check out our wide selection of flower arrangements to make your next occasion memorable.</p>
                    </div>
                </Row>
            </Container>
            <HomepageTile />
            <ProductFiveWide/>
            <Footer />              
        </>
    )
}

export default Immersion;