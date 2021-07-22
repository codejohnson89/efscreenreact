import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './styles';

function AboutUs() {
    return (
        <Container className="m-about" style={styles.container}>
            <h1 className="m-about-page-header"  style={styles.aboutPageHeader}>About Us</h1>
            <Row style={{...styles.row, "padding-left": "1em"}}>
                <Col md={8} sm={12} style={styles.row} className="company-info row">
                    <Col sm={12} className="m-about-content section-1" style={styles.mAboutContent}>
                        <h2 className="m-about-content-header" style={styles.h2}>about our company</h2>
                        <p style={styles.p}>
                         Micah 7 proudly serves the OKLAHOMA CITY area. We are committed to providing great customer service, the finest floral arrangements, beautiful floral designs, as well as gift baskets and much more. Our customers are important to us and our friendly staff is dedicated to making your experience a pleasant one. We will always go the extra mile to make your floral gift perfect!<br></br><br></br> You can expect great customer service, fresh flower arrangements, beautiful floral designs, plants, gift baskets and much more. <br></br><br></br> Make Micah 7 your first choice for flowers.
                         </p>
                    </Col>
                    <Col sm={12} md={6} className="m-about-content left-content" style={styles.mAboutContent}>
                        <img className="img-fluid" src="https://via.placeholder.com/365x286" />
                    </Col>
                    <Col sm={12} md={6} className="m-about-content right-content" style={{...styles.mAboutContent, ...styles.rightContent}}>
                        <div className="m-right-main-shop-location">
                            <p><b>test</b></p>
                            <p>3100 northwest expressway oklahoma city</p>
                            <p>oklahoma city,OK 73112</p>
                        </div>
                        <hr></hr>
                        <div className="m-right-main-shop-hours">
                            <p class="bold"><b>Store Hours:</b></p>
                            <p>Our shop is open:<br></br>
                                XX:00 a.m. to XX:00 p.m., Monday through Friday<br></br>
                                XX:00 a.m. to XX:00 p.m. on Saturday.<br></br><br></br>
                                We are closed on Sundays.
                            </p>
                        </div>
                    </Col>
                    <hr></hr>
                    <Col sm={12} className="services">
                        <h2 className="m-about-content-header" id="Specialty Services" style={styles.h2}>Specialty Services</h2>
                        <p className="m-about-content">We specialize in the following services:</p>    
                        <ul>
                            <li> Large inventory of fresh flowers for any occasion</li>
                            <li> Weddings / Wedding Flowers</li>
                            <li> Sympathy and Funeral flowers</li>
                            <li> Birthday Flowers, Get Well Flowers, Anniversary Flowers</li>
                            <li> Plants</li>
                            <li> European/dish gardens</li>
                            <li> Modern and traditional flower arrangements</li>
                            <li> High-style floral arrangements</li>
                            <li> Silk flower arrangements</li>
                            <li> Dried floral arrangements</li>
                            <li> Extensive gift line</li>
                            <li> Gourmet fruit baskets</li>
                            <li> Gift baskets</li>
                            <li> Greeting cards</li>
                        </ul>
                    </Col>
                    <hr></hr>
                    <Col sm={12} className="delivery-policy">
                        <h2 className="m-about-content-header" id="Delivery Policy">Delivery Policy</h2>
                        <p>A local delivery fee of $0.00 will be added to each order, for each address. (For deliveries outside our local delivery area, this fee may vary.)<br></br><br></br> U.S. orders must be received before 1:00 p.m. in the recipient's time zone to assure same-day delivery. Orders received after that time will be delivered the following day.<br></br><br></br> We will do our best to accommodate deliveries at specific times of day, but we cannot guarantee it.<br></br><br></br> We are unable to make deliveries on Sundays. Deliveries requested on this day will be delivered the following business day.<br></br><br></br> Delivery of orders to rural route addresses or cemeteries cannot be guaranteed.<br></br><br></br> We will be happy to accept your international orders if you call our shop directly. We are unable to accept international orders over the Internet.<br></br><br></br> <strong>Holiday Deliveries</strong><br></br> To help assure on-time delivery during the busy holiday season, place your order at least 1 day prior to the following major holidays: Thanksgiving Day, Christmas Day, New Year's Day, Valentine's Day, Easter, Administrative Professionals Week, Mother's Day, Memorial Day, Father's Day, Independence Day and Labor Day.<br></br><br></br> Our shop will always be closed on the following holidays: Thanksgiving Day, Christmas Day, New Year's Day, Easter, Mother's Day, Memorial Day, Father's Day, Independence Day and Labor Day.</p>
                    </Col>
                </Col>
                <Col md={4} className="d-none d-md-block m-sidebar-contact-us-container">
                    <div className="m-sidebar-contact-us">
                        <h5 className="m-sidebar-contact-us-header">Contact Us</h5>
                        <div className="m-sidebar-contact-us-content">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                            </svg>
                            <div className="m-sidebar-contact-us-content-text">
                                <a href="tel:(405) 255-7470" class="phoneNo">(405) 255-7470</a>
                            </div>
                        </div>
                        <div className="m-sidebar-contact-us-content">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                            </svg>
                            <div className="m-sidebar-contact-us-content-text">
                                <a href="mailto:info@micahjjohnson.com">Email Customer Service</a>
                            </div>
                        </div>
                        <div className="m-sidebar-contact-us-content">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pin-map" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"/>
                                <path fill-rule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"/>
                            </svg>
                        <div className="m-sidebar-contact-us-content-text">
                        3100 northwest expressway<br></br>
                        624<br></br>
                        Oklahoma City, Ok 73112
                        </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default AboutUs;