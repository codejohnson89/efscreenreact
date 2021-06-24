import React from 'react';
import { Row, Container, Col, Accordion, Card, Button } from 'react-bootstrap';

import '../../../styles/help.scss'


const Help = () => {
    return (
        <Container id="helpPage">
            <Row>
                <Col sm={12}><h1>Help & Support</h1></Col>
                <Col sm={9}><p>Our customers are very important to us, and we want to make sure you have everything you need. Learn more about our shop's policies and ordering info below. If you can't find what you are looking for or need immediate assistance, please contact us via phone or email and we'll be happy to help!</p></Col>
            </Row>
            <Row id="deliveryInfo">
                <Col sm={9}>
                    <Col sm={12} className="header"><h2>Policy Info</h2></Col>
                    <Accordion>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    What is your Delivery Area?
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>Our shop locally serves the following cities and surrounding areas:</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                    Do you deliver to local hospitals?
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>Yes we do! Here is a list of hospitals that we deliver to locally.<br></br>
If you do not see the hospital you are looking for, please give us a call at (818) 587-3650, we may be able to accommodate special requests.</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                    Can you deliver to a funeral home?
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="2">
                                <Card.Body>
                                Yes we can. We deliver to local funeral homes daily. Below is a list of the funeral homes that we deliver to.<br></br>
If you do not see the funeral home you are looking for, please give us a call at (818) 587-3650, we may be able to accommodate special requests.
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                                    Do you deliver to nursing homes?
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="3">
                                <Card.Body>
                                Yes, we do. Nothing brightens someone's day like flowers. Here is a list of local nursing homes that we deliver flowers to, daily.<br></br>

If you do not see the nursing home you are looking for, please give us a call at (818) 587-3650, we may be able to accommodate special requests.
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="4">
                                    Do you deliver to retirement communities?
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="4">
                                <Card.Body>
                                Of course we do! Below is a list that we deliver to.<br></br>

If you do not see the retirement community you are looking for, please give us a call at (818) 587-3650, we may be able to accommodate special requests.
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Col>
            </Row>
            <Row id="websiteInfo">
                <Col sm={9}>
                    <Col sm={12} className="header"><h2>Ordering Info</h2></Col>
                    <Accordion>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="5">
                                    I tried placing an order, but it didn't go through. What can I do?
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="5">
                                <Card.Body>OOh no! We apologize for the inconvenience. Please make sure you’re using the most recent version of your browser program. If not, you may need to download an update from the software maker’s website. If the problem persists, please call us at (818) 587-3650 and we are more than happy to help you over the phone.</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="6">
                                    How can I pay?
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="6">
                                <Card.Body>
                                    We accept the following payment types: Visa,MasterCard,Discover Network,American Express
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="7">
                                    What if my chosen flowers aren't available?
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="7">
                                <Card.Body>
                                Occasionally, substitutions may be necessary to create your bouquet due to the availability of certain flowers in various parts of the country. Care is taken to maintain the style, theme and color scheme of the arrangement, using flowers of equal value. Additionally, the substitution of certain keepsake items may be necessary due to increased demand, especially during major holidays. In single-flower arrangements, such as an all rose bouquet, or orchids, we will make every attempt to match the flower type, but may substitute with another color.
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Col>
            </Row>
            <Row id="paymentInfo">
                <Col sm={9}>
                    <Col sm={12} className="header"><h2>Ordering Info</h2></Col>
                    <Accordion>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="5">
                                    What is your Privacy Policy?
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="5">
                                <Card.Body>
                                <p>micah's test shop (“micah's test shop,” “we” or “us”) is committed to protecting the privacy and security of the information we collect and to being transparent about the ways in which we collect and process your information. This statement (the “Privacy Policy”) sets forth our policies and practices for handling the information we collect from or about you. It applies to the websites and online service that we operate and that link to this Privacy Policy (the “Services”).</p>
<p>&nbsp;</p>
<p><strong>I. COLLECTION OF INFORMATION</strong></p>
<p>&nbsp;</p>
<p>We collect the following categories of information when you use our Services (including when you download or launch our mobile applications) or when the application is running on your device in the background:</p>
<ul>
	<li><em>Information you provide directly to us.</em>
	<ul>
		<li><strong>Contact Information,</strong> including name, alias, maiden name, email address, telephone or mobile phone number, address;</li>
		<li><strong>Sign-In Information,</strong> including username and password, account name, account number;</li>
		<li><strong>Profile Information and Survey Responses,</strong> including your interests, preferences, physical characteristics or description, feedback, educational or professional information, employment, employment history, marital status, date of birth, age, significant dates such as birthdays, anniversaries and religious holidays you may observe;</li>
		<li><strong>Commercial information,</strong> including records of products or services purchased, obtained, or considered, or other purchasing or consuming histories or tendencies;</li>
		<li><strong>Information about other people,</strong> (for example, if you order a gift and want it sent directly to the recipient) including recipient's name, address, e-mail address, and telephone number;</li>
		<li><strong>Geolocation data;</strong></li>
		<li><strong>Transaction and Billing Data,</strong> including bank account and payment card details, (credit card number, expiration date, and credit card security code, where needed to complete a transaction), billing address, delivery address, signature, transaction history; and</li>
		<li><strong>Correspondence you send to us.</strong></li>
	</ul>
	</li>
</ul>

<p>&nbsp;</p>

<ul>
	<li><em>Information we collect automatically.</em> We collect internet, electronic activity, and other information automatically from the devices and browsers that you use, including your device type; Internet protocol (IP) address; device and advertising identifiers, probabilistic identifiers, and other unique personal or online identifiers; time zone setting and location; browser type and version; browser plug in types and versions; operating system and platform; Internet service provider; pages that you visit before and after using the Services, browsing history, and search history; the date and time of your visit; information about the links you click, pages you view, and advertising you interact with within the Services and other information about how you use the Services; the technology on the devices you use to access these Services; inferences used to create a profile about preferences, characteristics, psychological trends, predispositions, behavior, attitudes; and standard server log information. If you or your device experiences an error, we collect information about the error, the time the error occurred, the feature being used, the state of the application when the error occurred, and any communications or content provided at the time the error occurred. Consistent with your mobile device or app permissions, we also collect geolocation information including geolocation information derived from your GPS, WiFi and Bluetooth signals, IP address, and other device information, photos stored on your device, contacts from your mobile address book, audio recordings, and appointments from your calendar.</li>
</ul>

<p>&nbsp;</p>

<p>We also receive the categories of information described above from other sources, including from users of our Services, and third-party services and organizations. For example, if you access any social media or similar services through the Services to login or to share information about your experience on our Services with others, we may collect information from these third-party services.</p>

<p>Without this information, we are not able to provide you with all the requested services, and any differences in services are related to your information.</p>

<p>We may aggregate or de-identify the information described above. Aggregated or de-identified data is not subject to this Privacy Policy.</p>

<p>&nbsp;</p>

<p><strong>II. USE OF INFORMATION AND PURPOSE OF DATA PROCESSING</strong></p>

<p>&nbsp;</p>

<p>We use and otherwise process each of the categories of information identified above for the following business purposes:</p>

<p><strong>Purpose</strong></p>

<p>To provide you with the information, products and services that you request from us; to provide the products and services you have ordered to recipients, to allow you to participate in interactive features of our Services, when you choose to do so; to manage accounts; and to manage our relationship with you, including providing you with the&nbsp; information, products and services that you request from us, and notifying you about changes to our terms or privacy policy.</p>

<p>To make suggestions and recommendations to you about things that are similar to those that you have enquired about or may otherwise be of interest to you, or to send promotional materials from us or by our affiliates and trusted business partners.</p>

<p>To improve our Services and to ensure that content is presented in the most relevant and effective manner for you and for your device; to administer our Services, including troubleshooting, data analytics, testing, research, statistical and survey purposes; to keep our Services, business and users safe and secure; to comply with applicable laws and regulations; and to protect or exercise our legal rights or defend against legal claims.</p>

<p>Where we need to collect information by law, or under the terms of a contract we have with you and you fail to provide that data when requested, we may not be able to perform the contract we have or are trying to enter into with you (for example, to provide you with goods or services). In this case, we may cancel a product or service you have with us.</p>

<p>&nbsp;</p>

<p><strong>III. DISCLOSURE OF INFORMATION</strong></p>

<p>&nbsp;</p>

<p>We are committed to maintaining your trust, and we want you to understand when and with whom we may share the information we collect.</p>

<ul>
	<li><em>Authorized third-party vendors and service providers.</em> We share your information with third-party vendors and service providers that provide services to us for a variety of business purposes, such as billing, payment processing, customer service, email deployment, advertising and marketing (including counting ad impressions, verifying positioning and quality of ad impressions, ensuring compliance with industry standards and specifications, ad delivery, reporting, personalization, audience segmentation, and analytics), security and performance monitoring, maintaining or servicing accounts, processing or fulfilling orders and transactions, verifying customer information, research, data hosting, auditing, and data processing.</li>
	<li><em>Corporate affiliates.</em> We may share your information with our corporate affiliates.</li>
	<li><em>Business transfers.</em> We may share your information in connection with a substantial corporate transaction, such as the sale of a website, a merger, consolidation, asset sale, initial public offering, or in the unlikely event of bankruptcy.</li>
	<li><em>Legal purposes.</em> We may disclose information to respond to subpoenas, court orders, legal process, law enforcement requests, legal claims or government inquiries, and to protect and defend the rights, interests, safety, and security of micah's test shop, our affiliates, users, or the public.</li>
	<li><em>With your consent.</em> We may share information for any other purposes disclosed to you at the time we collect the information or pursuant to your consent.</li>
</ul>

<p>If you access third-party services -- such as social media services, third-party single-sign on tools, mobile platforms for in-app purchases -- through the Services, these third-party services may be able to collect information about you, including information about your activity on the Services, and they may notify your connections on the third-party services about your use of the Site, in accordance with their own privacy policies.</p>

<p>If you choose to engage in public activities on the Services, you should be aware that any information you share there can be read, collected, or used by other users of these areas. You should use caution in disclosing information while participating in these areas. We are not responsible for the information you choose to submit in these public areas.</p>

<p>micah's test shop does not, and will not without consent, sell your information to third parties. micah's test shop does permit third parties to collect the information described above through our Service and discloses such information with third parties for business purposes as described in this Privacy Policy, including but not limited to providing advertising on our Service and elsewhere based on users’ online activities over time and across different sites, services, and devices (so-called “interest-based advertising”). The information practices of these third parties are not covered by this Privacy Policy.</p>

<p>&nbsp;</p>

<p><strong>IV. ADVERTISING, COOKIES AND SIMILAR TECHNOLOGIES </strong></p>

<p>&nbsp;</p>

<p>When you use our Services, we and our third party advertising partners (including advertising networks and exchanges, Internet service providers, data analytics providers, operating systems and platforms, social networks, and entities that may sell data) use cookies, pixel tags, local storage, and other similar technologies (collectively, “cookies”) to collect information from your browser or device. By using the Services, you consent to our use of cookies and similar technologies.</p>

<p>The following types of cookies are used on our Services:</p>

<ul>
	<li>Essential cookies – These cookies enable you to use our Services. These cookies are essential to enable you to browse our Services and use certain features. Disabling them may prevent you from using certain parts of the Services. Without these cookies, certain services such as, recognizing you by name when you return to our Services or enabling you to use shopping charts with our Services, cannot be provided. These cookies also help keep our Services safe and secure.</li>
	<li>Preference cookies – These cookies store information such as your preferred country and language selection, login data and website preferences. Without these cookies, our Services may not be able to remember certain choices you've previously made (such as a saved country / language preference) or personalize your browsing experience by providing you with relevant information. These cookies can also be used to recognize your device so that you do not have to provide the same information more than once.</li>
	<li>Performance cookies – These cookies collect information about how you use our Services such as which pages you visit regularly. These cookies are used to provide you with a high-quality experience by doing things such as tracking page load, site response times, and error messages.</li>
	<li>Content / advertising cookies – These cookies gather information about your use of our Services so we may improve your experience and provide you with more relevant content and advertising on our Services and elsewhere online and across your devices. They are also used to gather feedback on customer satisfaction through surveys. They remember that you've visited our Services and help us understand usage of our Services. Some of these cookies are from third parties that collect information about your use of our Services in order to provide advertising (on our Services and elsewhere, across your different devices) based on your online activities (so-called "interest-based advertising") on our Services and elsewhere online, across your different devices. We do not control the privacy practices of these third parties, and their practices are not covered by this Privacy Policy.</li>
</ul>

<p><em>Do-Not-Track Signals and Similar Mechanisms.</em> Some mobile and web browsers transmit "do-not-track" signals. Because of differences in how web browsers incorporate and activate this feature, it is not always clear whether users intend for these signals to be transmitted, or whether they even are aware of them. We currently do not take action in response to these signals.</p>

<p>&nbsp;</p>

<p><strong>V. INTERNATIONAL TRANSFERS</strong></p>

<p>&nbsp;</p>

<p>By using the Services and providing us with information, you understand and agree that we may transfer and store your information on servers located outside your resident jurisdiction. To the extent you are a resident of a country other than the United States, you consent to the transfer of such data to the United States for processing by us in accordance with this Privacy Policy.</p>

<p>&nbsp;</p>

<p><strong>VI. CHILDREN </strong></p>

<p>&nbsp;</p>

<p>We do not knowingly collect or sell any information from children, as defined by applicable law, without parental consent or as otherwise permitted by applicable law.</p>

<p>&nbsp;</p>

<p><strong>VII. DATA RETENTION, SECURITY, AND INTEGRITY</strong></p>

<p>&nbsp;</p>

<p>Information will be retained only for so long as reasonably necessary for the purposes set out above, in accordance with applicable laws.</p>

<p>We maintain reasonable security measures to safeguard information from loss, theft interference, misuse, unauthorized access, disclosure, alteration, or destruction. We also maintain reasonable procedures to help ensure that such data is reliable for its intended use and is accurate, complete, and current. You should understand that no data storage system or transmission of data over the Internet or any other public network can be guaranteed to be 100 percent secure, accurate, complete, or current. Please note that information collected by third parties may not have the same security protections as information you submit to us, and we are not responsible for protecting the security of such information.</p>

<p>&nbsp;</p>

<p><strong>VIII. CHANGES TO THE PRIVACY POLICY</strong></p>

<p>&nbsp;</p>

<p>We may modify this Privacy Policy from time to time. When we update the Privacy Policy, we will revise the “Effective Date” date above and post the new Privacy Policy. We recommend that you review the Privacy Policy each time you visit the Services to stay informed of our privacy practices.</p>

<p>&nbsp;</p>

<p><strong>IX. CONTACT INFORMATION</strong></p>

<p>&nbsp;</p>

<p>If you have any questions about this Privacy Policy or our practices, please contact us at: (818) 587-3650.</p>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                     </Accordion>
                </Col>
            </Row>
       
             </Container>
    )
}


export default Help;