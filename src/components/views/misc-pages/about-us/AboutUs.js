import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function AboutUs() {
    return (
        <Container>
            <h1>About Us</h1>
            <Row>
                <Col md={3}>

                </Col>
                {/* <Col></Col> */}
                <Col md={9}>
                    <h2>Our Company</h2>
                    <p>Joseph's Flowers proudly serves the Oklahoma City area. We are family owned and operated. We are committed to offering only the finest floral arrangements and gifts, backed by service that is friendly and prompt. Because all of our customers are important, our professional staff is dedicated to making your experience a pleasant one. That is why we always go the extra mile to make your floral gift perfect.<br></br><br></br>Let Joseph's Flowers be your first choice for flowers.</p>
                    <Row>
                        <Col md={6}><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3247.9061191406417!2d-97.58746848445239!3d35.50659954713623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b21a9ebc5150d7%3A0x1c5b6033ff55d7b5!2s3737%20NW%2034th%20St%2C%20Oklahoma%20City%2C%20OK%2073112!5e0!3m2!1sen!2sus!4v1582637807260!5m2!1sen!2sus" width="100%" height="450" frameborder="0" allowfullscreen=""></iframe></Col>
                        <Col md={6}>
                        <div class="m-right-main-shop-location">  
                            <p class="bold">Josephs Flowers</p>
                            <p>3737 NW 34th St.</p>
                            <p>Oklahoma City, OK 73112</p>
                        </div>  
                        <hr></hr>
                        <div class="m-right-main-shop-hours">
                            <p class="bold">Store Hours:*</p>
                            <p class="store-hours" id="store-hours-1">
                                <span class="store-hours-day">Sunday</span>
                                <span class="store-hours-time">Closed</span>
                            </p>
                            <p class="store-hours" id="store-hours-2">
                                <span class="store-hours-day">Monday</span>
                                <span class="store-hours-time">8:00 AM to 6:00 PM</span>
                            </p>
                            <p class="store-hours" id="store-hours-3">
                                <span class="store-hours-day">Tuesday</span>
                                <span class="store-hours-time">8:00 AM to 6:00 PM</span>
                            </p>
                            <p class="store-hours" id="store-hours-4">
                                <span class="store-hours-day">Wednesday</span>
                                <span class="store-hours-time">8:00 AM to 6:00 PM</span>
                            </p>
                            <p class="store-hours" id="store-hours-5">
                                <span class="store-hours-day">Thursday</span>
                                <span class="store-hours-time">8:00 AM to 6:00 PM</span>
                            </p>
                            <p class="store-hours" id="store-hours-6">
                                <span class="store-hours-day">Friday</span>
                                <span class="store-hours-time">8:00 AM to 6:00 PM</span>
                            </p>
                            <p class="store-hours" id="store-hours-7">
                                <span class="store-hours-day">Saturday</span>
                                <span class="store-hours-time">9:00 AM to 4:00 PM</span>
                            </p>
                            <p>*Closed Christmas, Memorial Day, New Years Eve.</p>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default AboutUs;