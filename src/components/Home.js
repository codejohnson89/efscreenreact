import React from 'react';


import CustomHeadersIntro from './modules/CustomHeadersIntro';
import Header from './modules/Header';
import { Container, Row, Col } from 'react-bootstrap';

function Home () {
    return (
        <div>
            <Header/>
            <CustomHeadersIntro header="eFlorist | Site Guide" additional="The eFlorist Redesign"/>
        <Container>           
            <Row>
                <Col  sm={12} id="about" className="page-header">
                    <h1> What is this for? <small> Describing the guide</small></h1>
                </Col>
                <Col sm={12}>
                    <p>
      Below you will find brief decriptions of the sections within this site and their use within the whole of eFlorist.  There is also an explanation of the frameworks and technologies used in this project.
    </p></Col>
                <br/><br/>
                <Col sm={12}><h2>Dependencies. <small>Frameworks and technology</small></h2></Col>
                <Col sm={12}><p><a href="https://www.ruby-lang.org">Ruby</a> - A dynamic, open source programming language with a focus on simplicity and productivity.</p></Col>
                <Col sm={12}><p><a href="http://get-serve.com">Serve</a> - A ruby framework for fast template development.</p></Col>
                <Col sm={12}><p><a href="http://jquery.com">jQuery</a> - Javascript Library.</p></Col>
                <Col sm={12}><p><a href="http://sass-lang.com/">SASS</a> - Professional grade CSS extension language.</p></Col>
                <Col sm={12}><p><a href="http://modernizr.com/">Modernizr</a> - A Javascript libary to detect and optimize HTML5 &amp; CSS3 features.  We're also using Modernizr's .load function to lazy load content that isn't immediately necessary.</p></Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <h2>Pattern Library. <small>Base site styles</small></h2>
                    <p>The pattern library contains things like text and form styles as well as small scale components such as buttons and the grid system.</p>
                </Col>
                <Col sm={12}>
                    <h2>Global Modules. <small>Utility modules used throughout the site.</small></h2>
                    <p>This includes the site wide header and footer navigations as well as key components of the site.</p>
                </Col>
                <Col sm={12}>
                    <h2>Layouts. <small>Various page layouts and content wrappers.</small></h2>
                </Col>
                <Col sm={12}>
                    <h2>Modules. <small>Various modules used in the site.</small></h2>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default Home;