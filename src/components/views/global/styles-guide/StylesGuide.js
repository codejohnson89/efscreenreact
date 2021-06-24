import React from 'react';
import { Container, Row, Col, Jumbotron, Button } from 'react-bootstrap';

import Header from '../../../modules/Header';
import CustomHeadersIntro from '../../../modules/CustomHeadersIntro';

function StylesGuide() {
    return (
        <div>
            <CustomHeadersIntro header="eFlorist | Styles Guide"/>
            <Container>
                <Row>
                    <Col sm={6}></Col>
                    <Col sm={6}>
                        <h6>Typography</h6>
                        <Col sm={12}><h1>Here's An Example Of A H1 Tag</h1></Col>
                        <Col sm={12}><h2>Here's An Example Of A H2 Tag</h2></Col>
                        <Col sm={12}><h3>Here's An Example Of A H3 Tag</h3></Col>
                        <Col sm={12}><h4>Here's An Example Of A H4 Tag</h4></Col>
                        <Col sm={12}><h5>Here's An Example Of A H5 Tag</h5></Col>
                        <Col sm={12}><h6>Here's An Example Of A H6 Tag</h6></Col>
                        <br></br>
                        <p>This is an example of a paragraph.<br></br><br></br>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, repellat, mollitia beatae eos debitis odio illum earum incidunt quae pariatur repellendus ullam omnis dolores eveniet non dolore quis sunt dignissimos! Ab voluptatum cumque maxime sunt eaque! Atque, labore, numquam repellat voluptas maiores optio sunt quis.</p>
                        <a href="/#" className="cta">This is an example of a Call to Action Link</a><br></br>
                        <a href="/#" className="cta no-underline">This is an example of a Call to Action Link w/o underline</a><br></br>
                        <label>This is a label tag</label><br></br>
                        <p className="uppercase">Paragraph tag uppercase</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default StylesGuide;