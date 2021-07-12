import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './styles'

const GoogleMap = () => {
    return (
        <Container>
            <Row style={styles.row}>
                <Col sm={3} style={styles.paddingNone}>
                <div className="shop-info-container text-center" style={styles.container}>
                    <h2 className="shop-name">salsa power super sayian</h2>
                    <div className="shop-address-container" style={styles.shopAddressContainer}>
                        <i className="fas fa-map-marker-alt"></i>
                        <div className="shop-address" style={styles.shopAddressContainer.shopAddress}>
                            <p className="shop-address-street" style={styles.shopAddressContainer.shopAddress.text}>3100 northwest expressway,624</p>
                                <p className="shop-address-city" style={styles.shopAddressContainer.shopAddress.text}>
                                <span itemprop="addressLocality">OKLAHOMA CITY</span>, <span itemprop="addressRegion">OK</span>
                                        <span itemprop="postalCode">73112</span>
                                    </p>
                        </div>
                    </div>
                    <div className="shop-phone-container" style={styles.shopPhoneContainer}>
                        <i className="fas fa-phone-alt"></i>
                        <div className="shop-phone" style={styles.shopPhoneContainer.shopPhone}>
                            <p className="phone">
                                <a href="tel:(405) 255-7470" id="tel4" className="phoneNo">(405) 255-7470</a>
                            </p>
                        </div>
                    </div>
                    <div className="shop-email-container" style={styles.shopEmailContainer}>
                        <i className="far fa-envelope"></i>
                        <div className="shop-email" style={styles.shopEmailContainer.shopEmail}>
                           <Link href="mailto:info@micahjjohnson.com">Email Customer Service</Link>
                        </div>
                    </div>
                    <div className="shop-social-icons-container">
                    </div>
                </div>
                </Col>
                <Col sm={9} style={styles.paddingNone}>
                <iframe style={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3247.9030170792116!2d-97.58729448445236!3d35.50667624713201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b21a9eafa617af%3A0xfea624ecf83116c1!2sTeleflora!5e0!3m2!1sen!2sus!4v1626055927762!5m2!1sen!2sus" width="100%" height="330" allowfullscreen="" loading="lazy" title="Google Map"></iframe>
                </Col>
            </Row>
        </Container>
    )
}

export default GoogleMap;