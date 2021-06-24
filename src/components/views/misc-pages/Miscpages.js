import React from 'react';
import { Container, Row } from 'react-bootstrap';

import Header from '../../modules/Header';
import CustomHeadersIntro from '../../modules/CustomHeadersIntro';
import CustomInfoPan from '../../modules/CustomInfoPan';

function Miscpages() {
    return (
        <div>
            <CustomHeadersIntro header="eFlorist | Custom Modules"/>
            <Container>
                <Row>
                    <CustomInfoPan
                        header="General | About Us"
                        linkPage="/aboutus"
                        linkDoc="/aboutus/doc"
                        version="v. 1.0"
                        text="About Us page for the florist to provide information about their business."
                        />
                    <CustomInfoPan
                        header="General | Help"
                        linkPage="/help"
                        linkDoc="/help/doc"
                        version="v. 1.0"
                        text="Help page for users who are having problems with their order or the site."
                        />
                    <CustomInfoPan
                        header="General | 404"
                        linkPage="/error404"
                        linkDoc="/error404/doc"
                        version="v. 1.0"
                        text="404 Error page when a page cannot be found."
                        />
                    <CustomInfoPan
                        header="General | Cancelled"
                        linkPage="/cancelled"
                        linkDoc="/cancelled/doc"
                        version="v. 1.0"
                        text="This is a page that is shown when the site is completely down. (Can't even hit the 404)."
                        />
                    <CustomInfoPan
                        header="General | Site map"
                        linkPage="/sitemap"
                        linkDoc="/sitemap/doc"
                        version="v. 1.0"
                        text="Site map displaying the primary categories available on the site."
                        />
                    <CustomInfoPan
                        header="General | Sympathy & funeral"
                        linkPage="/sympathyfuneral"
                        linkDoc="/sympathyfuneral/doc"
                        version="v. 1.0"
                        text="Sympathy landing page to display various sympathy and funeral related categories and information."
                        />
                    <CustomInfoPan
                        header="General | Forms"
                        linkPage="/forms"
                        linkDoc="/forms/doc"
                        version="v. 1.0"
                        text="Standard form fields for use with form generation tool."
                        />
                    <CustomInfoPan
                        header="General | Forms Success"
                        linkPage="/formssuccess"
                        linkDoc="/formssuccess/doc"
                        version="v. 1.0"
                        text="Success page for form submissions."
                        />
                    <CustomInfoPan
                        header="General | Floral App"
                        linkPage="/floralapp"
                        linkDoc="/floralapp/doc"
                        version="v. 1.0"
                        text="Floral App landing page for use with shops who are part of the Floral App program."
                        />
                    <CustomInfoPan
                        header="General | Bonus Blooms Entry Form"
                        linkPage="/bonusbloomsentryform"
                        linkDoc="/bonusbloomsentryform/doc"
                        version="v. 1.0"
                        text="Bonus Blooms contest entry page for use with shops utilizing the Bonus Blooms program."
                        />
                    <CustomInfoPan
                        header="General | Bonus Blooms Winner"
                        linkPage="/bonusbloomswinner"
                        linkDoc="/bonusbloomswinner/doc"
                        version="v. 1.0"
                        text="Success page for submitting a Bonus Blooms entry with a winning number."
                        />
                    <CustomInfoPan
                        header="General | Bonus Blooms Non-Winner"
                        linkPage="/bonusbloomsnonwinner"
                        linkDoc="/bonusbloomsnonwinner/doc"
                        version="v. 1.0"
                        text="Success page for submitting a Bonus Blooms entry with a losing number."
                        />
                    <CustomInfoPan
                        header="General | Bonus Blooms Form Success"
                        linkPage="/bonusbloomsformsuccess"
                        linkDoc="/bonusbloomsformsuccess/doc"
                        version="v. 1.0"
                        text="Success page for email signup and winner info Bonus Blooms form submissions."
                        />
                    <CustomInfoPan
                        header="General | Cancelled Site"
                        linkPage="/cancelledsite"
                        linkDoc="/cancelledsite/doc"
                        version="v. 1.0"
                        text="Cancelled page for shops no longer with Teleflora or other generic errors."
                        />
                    <CustomInfoPan
                        header="General | eSat Controlled Modal Demo"
                        linkPage=""
                        linkDoc=""
                        version="v. 1.0"
                        text="A demo of modals controlled through the eSat tool."
                        />
                </Row>
            </Container>
        </div>
    )
}

export default Miscpages;