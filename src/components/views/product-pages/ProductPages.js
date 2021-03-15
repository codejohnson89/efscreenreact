import React from 'react';
import { Container, Row } from 'react-bootstrap';

import Header from '../../modules/Header';
import CustomHeadersIntro from '../../modules/CustomHeadersIntro';
import CustomInfoPan from '../../modules/CustomInfoPan';

function ProductPages() {
    return (
        <div>
            <Header/>
            <CustomHeadersIntro header="eFlorist | Custom Modules"/>
            <Container>
                <Row>
                    <CustomInfoPan
                        header="PDP | Standard PDP"
                        linkPage="/standardpdp"
                        linkDoc="/standardpadp/doc"
                        version="v. 1.0"
                        text="Default product page showing various elements and modules of the PDP."
                        />
                    <CustomInfoPan
                        header="PDP | Logged In"
                        linkPage="/loggedin"
                        linkDoc="/loggedin/doc"
                        version="v. 1.0"
                        text="Logged in treatment for the PDP showing recipient selection instead of a zip code field."
                        />
                    <CustomInfoPan
                        header="PDP | Browse Only Product"
                        linkPage="/browseonly"
                        linkDoc="/browseonly/doc"
                        version="v. 1.0"
                        text="Product page for items that are not currently available for sale on the site."
                        />
                    <CustomInfoPan
                        header="PDP | Deal of the Day"
                        linkPage="/dealoftheday"
                        linkDoc="/dealoftheday/doc"
                        version="v. 1.0"
                        text="Deal of the Day treatment for the product page."
                        />
                    <CustomInfoPan
                        header="PDP | Deal of the Day Logged In Version"
                        linkPage="/dealofthedealloggedin"
                        linkDoc="/dealofthedealloggedin/doc"
                        version="v. 1.0"
                        text="Logged in treatment for the Deal of the Day page showing recipient selection instead of a zip code field."
                        />
                    <CustomInfoPan
                        header="PDP | Subscriptions"
                        linkPage="/subscriptions"
                        linkDoc="/subscriptions/doc"
                        version="v. 1.0"
                        text="Subscription functionality and layout for the product page."
                        />
                    <CustomInfoPan
                        header="PDP | Drop Shipping"
                        linkPage="/dropshipping"
                        linkDoc="/dropshipping/doc"
                        version="v. 1.0"
                        text="PDP page built for drop shipped products."
                        />
                    <CustomInfoPan
                        header="PDP | Holiday Calendar"
                        linkPage="/holidaycalendar"
                        linkDoc="/holidaycalendar/doc"
                        version="v. 1.0"
                        text="PDP page with holiday pricing calendar."
                        />
                </Row>
            </Container>
        </div>
    )
}

export default ProductPages;