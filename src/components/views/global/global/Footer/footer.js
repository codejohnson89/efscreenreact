import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return(
        <footer className="m-footer">
          <Container className="clearfix m-footer-top-half">
            <Row>
              <Col sm={4} className="minHeightApplied">
                <h5>Sign up for special offers!</h5>
                <form method="GET" autocomplete="off" name="loginfileFormSubscription" action="/account/externalUserSubscriptions.jsp" id="loginfileFormSubscription" class="m-footer-email">
                <input name="_dyncharset" type="hidden" value="UTF-8"/>
                <input name="_dynSessConf" type="hidden" value="6222233416348706294"/>
                <input size="15" autocomplete="off" name="optinEmailAddress" id="optinEmailAddress" maxsize="100" title="Email Sign up" type="email" value="" class="m-footer-email-input clear-margin-bottom float-left full-height" placeholder="Enter E-Mail Address" aria-label="Email Sign up" />
                <input name="_D:optinEmailAddress" type="hidden" value=" "/>
                <input name="/atg/userprofiling/ProfileFormHandler.createSuccessURL" type="hidden" value="/account/externalUserSubscriptions.jsp"/>
                <input name="_D:/atg/userprofiling/ProfileFormHandler.createSuccessURL" type="hidden" value=" " />
                <input name="errorurl" type="hidden" value="/account/externalUserSubscriptions.jsp" />
                <input name="_D:errorurl" type="hidden" value=" " />
                <input name="/atg/userprofiling/ProfileFormHandler.logEmailPreference" id="emailOptinBtn" title="Go" type="submit" value="Go" class="btn m-footer-email-btn clear-margin-bottom float-left full-height" aria-label="Go"/>
                <input name="_D:/atg/userprofiling/ProfileFormHandler.logEmailPreference" type="hidden" value=" "/>
                <input name="_DARGS" type="hidden" value="/WEB-INF/fragments/common/efloristFooterCommon.jspf.loginfileFormSubscription"/>
                </form>
              </Col>
              <Col sm={4}>
                <h5>Micah's Store</h5>
                <div itemprop="address" itemscope="" itemtype="http://schema.org/PostalAddress">
	                <p class="clear-margin-bottom font-size-13px centered" itemprop="streetAddress">3100 northwest expressway&nbsp;624</p>
	                <p class="clear-margin-bottom font-size-13px centered">
	                	<span itemprop="addressLocality">OKLAHOMA CITY</span>, <span itemprop="addressRegion">OK</span>&nbsp; <span itemprop="postalCode">73112</span></p>
	                    <p class="clear-margin-bottom font-size-13px centered">
	                   
                 <span itemprop="telephone" class="tel"><a href="tel:(405) 255-7470">(405) 255-7470</a></span>                                   
                                      <span class="csnTel no-mobile"></span><span itemprop="telephone" class="tel"><a href="tel:(405) 255-7470">(405) 255-7470</a></span>                                   
                                      </p></div>
              </Col>
              <Col sm={4}></Col>
            </Row>
          </Container>
          <Container className="m-footer-bottom-half">
            <Row>
              <Col md={3} sm={6}>
                <h5>Learn More About</h5>
                <ul class="link-list"> 
                  <li><a href="/about-us">About Us</a></li> 
                  <li><a href="/faq#Privacy Policy / Security">Safe Shopping</a></li> 
                  <li><a href="/faq#Privacy Policy / Security">Privacy</a></li> 
                  <li><a href="/about-us#Delivery Policy">Delivery</a></li> 
                  <li><a href="/faq#Policy Info">Substitutions</a></li> 
                  <li><a href="/sitemap">Site Map</a></li> 
                </ul>
              </Col>
              <Col md={3} sm={6}>
                <h5>Shop</h5>
                <ul class="link-list">
                  <li><a href="/graduation/cat4360001">Graduation</a></li>
                  <li><a href="/prom/cat1100003">Prom</a></li>
                  <li><a href="/anniversary/cat1000016">Anniversary</a></li>
                  <li><a href="/birthday/cat1000017">Birthday</a></li>
                  <li><a href="/get-well/cat1000018">Get Well</a></li>
                </ul>
              </Col>
              <Col md={3} sm={6}>
                <h5>Customer Service</h5>
                <ul class="link-list">
	                <li><a href="/faq">Help/FAQs</a></li>
                </ul>
              </Col>
              <Col md={3} sm={6}>
                <h5>Proud Member of the</h5>
              </Col>
            </Row>
          </Container>
        </footer>
    )
}

export default Footer;