import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const footerParentStyles = {
  backgroundColor: '#F7F7F7',
  paddingTop: '2.5em',
  paddingBottom: '3em',
  zIndex: '3'
}

const footerTopHalfStyle = {
  paddingBottom: '1.3em',
  marginBottom: '1.3em',
  borderBottom: '1px solid rgb(204, 204, 204)'
}

const styleH5 = {
  color: '#484848',
    fontWeight: '900',
    textTransform: 'capitalize',
    fontSize: '1.07692em'
}

const formEmailContainer = {
  height: '3.045em',
    marginTop: '.5em',
    marginBottom: '2em'
}

const formInput = {
  lineHeight: '1em',
    borderRadius: '0px',
    backgroundColor: '#fff',
    color: '#484848',
    fontSize: '14px',
    fontFamily: '"OpenSans-Regular",Helvetica,sans-serif',
    borderColor: '#959595',
    boxShadow: '0 1px 2px rgb(71 69 56 / 30%) inset',
    width: '70%',
    borderTopRightRadius: '0 !important',
    borderBottomRightRadius: '0 !important',
    height: '78%'
}

const inputBtn = {
  width: '20%',
    borderTopLeftRadius: '0px !important',
    borderBottomLeftRadius: '0px !important',
    borderWidth: '1px 1px 1px',
    borderStyle: 'solid solid solid',
    borderColor: 'rgb(204, 204, 204) rgb(204, 204, 204) rgb(204, 204, 204)',
    borderImage: 'initial',
    borderLeft: '0px !important'
}

const footerStylePTag = {
    fontSize: '14px',
    lineHeight: '1em'
}

const footerLinkList = {
  margin: '0 0 1.92308em',
  padding: '0',
  listStyle: 'none',
  color: '#fff'
}

const Footer = () => {
  const { email, setEmail } = useState('')

    return(
        <footer className="m-footer" style={footerParentStyles}>
          <Container className="clearfix m-footer-top-half" style={footerTopHalfStyle}>
            <Row>
              <Col sm={4} className="minHeightApplied">
                <h5 style={styleH5}>Sign up for special offers!</h5>
                <form style={formEmailContainer} method="GET" autocomplete="off" name="loginfileFormSubscription" action="/account/externalUserSubscriptions.jsp" id="loginfileFormSubscription" class="m-footer-email">
                <input name="_dyncharset" type="hidden" value="UTF-8"/>
                <input name="_dynSessConf" type="hidden" value="6222233416348706294"/>
                <input style={formInput} size="15" autocomplete="off" name="optinEmailAddress" id="optinEmailAddress" maxsize="100" title="Email Sign up" type="email" value={email} class="m-footer-email-input clear-margin-bottom float-left full-height" placeholder="Enter E-Mail Address" aria-label="Email Sign up" />
                <input name="_D:optinEmailAddress" type="hidden" value=" "/>
                <input name="/atg/userprofiling/ProfileFormHandler.createSuccessURL" type="hidden" value="/account/externalUserSubscriptions.jsp"/>
                <input name="_D:/atg/userprofiling/ProfileFormHandler.createSuccessURL" type="hidden" value=" " />
                <input name="errorurl" type="hidden" value="/account/externalUserSubscriptions.jsp" />
                <input name="_D:errorurl" type="hidden" value=" " />
                <input style={inputBtn} name="/atg/userprofiling/ProfileFormHandler.logEmailPreference" id="emailOptinBtn" title="Go" type="submit" value="Go" class="btn m-footer-email-btn clear-margin-bottom float-left full-height" aria-label="Go"/>
                <input name="_D:/atg/userprofiling/ProfileFormHandler.logEmailPreference" type="hidden" value=" "/>
                <input name="_DARGS" type="hidden" value="/WEB-INF/fragments/common/efloristFooterCommon.jspf.loginfileFormSubscription"/>
                </form>
              </Col>
              <Col sm={4} className="text-center">
                <h5 className="text-center"  style={styleH5}>Micah's Store</h5>
                <div itemprop="address" itemscope="" itemtype="http://schema.org/PostalAddress">
	                <p style={footerStylePTag} itemprop="streetAddress">3100 northwest expressway&nbsp;624</p>
	                <p style={footerStylePTag} >
	                	<span itemprop="addressLocality">OKLAHOMA CITY</span>, <span itemprop="addressRegion">OK</span>&nbsp; <span itemprop="postalCode">73112</span></p>
	                    <p style={footerStylePTag} >
	                   
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
                <h5 style={styleH5}>Learn More About</h5>
                <ul class="link-list" style={footerLinkList}> 
                  <li><a href="/about-us">About Us</a></li> 
                  <li><a href="/faq#Privacy Policy / Security">Safe Shopping</a></li> 
                  <li><a href="/faq#Privacy Policy / Security">Privacy</a></li> 
                  <li><a href="/about-us#Delivery Policy">Delivery</a></li> 
                  <li><a href="/faq#Policy Info">Substitutions</a></li> 
                  <li><a href="/sitemap">Site Map</a></li> 
                </ul>
              </Col>
              <Col md={3} sm={6}>
                <h5 style={styleH5}>Shop</h5>
                <ul class="link-list" style={footerLinkList}>
                  <li><a href="/graduation/cat4360001">Graduation</a></li>
                  <li><a href="/prom/cat1100003">Prom</a></li>
                  <li><a href="/anniversary/cat1000016">Anniversary</a></li>
                  <li><a href="/birthday/cat1000017">Birthday</a></li>
                  <li><a href="/get-well/cat1000018">Get Well</a></li>
                </ul>
              </Col>
              <Col md={3} sm={6}>
                <h5 style={styleH5}>Customer Service</h5>
                <ul class="link-list" style={footerLinkList}>
	                <li><a href="/faq">Help/FAQs</a></li>
                </ul>
              </Col>
              <Col md={3} sm={6}>
                <h5 style={styleH5}>Proud Member of the</h5>
              </Col>
            </Row>
          </Container>
        </footer>
    )
}

export default Footer;