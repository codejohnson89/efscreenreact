import React from 'react';
import { Container, Row } from 'react-bootstrap';

import Header from '../../modules/Header';
import CustomHeadersIntro from '../../modules/CustomHeadersIntro';
import CustomInfoPan from '../../modules/CustomInfoPan';

/*
    All in all, you've obviously done a lot of work. It's hard to get here.
    Nice Job!

    There are lots of things you could make better, but this is a great start
    for parity.

    Some things that could help out the dev experience:
        Easy Wins:
            - ESLint
            - exporting named components via index.js file in large folder
            - Use Bootstrap to it's full ability by making it do the work for you.
            - Identify some components you can generalize.

        Need careful consideration, but highly recommended:
            - TypeScript
            - Ditching Bootstrap and switching to Chakra-UI
            - ejecting and using webpack instead for more control.

*/

function Wedding() {
    return (
        <div>
            <CustomHeadersIntro header="eFlorist | Custom Modules"/>
            <Container>
                <Row>
                    <CustomInfoPan
                        header="Wedding | Wedding Flower Colors"
                        linkPage="/weddingflowerscolors"
                        linkDoc="/weddingflowerscolors/doc"
                        version="v. 1.0"
                        text="Wedding Flower Colors"
                        />
                    <CustomInfoPan
                        header="Wedding | Wedding Gallery"
                        linkPage="/weddinggallery"
                        linkDoc="/weddinggallery/doc"
                        version="v. 1.0"
                        text="Wedding Gallery"
                        />
                    <CustomInfoPan
                        header="Wedding | Wedding Landing Page"
                        linkPage="/weddinglandingpage"
                        linkDoc="/weddinglandingpage/doc"
                        version="v. 1.0"
                        text="Wedding Landing Page"
                        />
                    <CustomInfoPan
                        header="Wedding | Wedding Shop Products"
                        linkPage="/weddingshopproducts"
                        linkDoc="/weddingshopproducts/doc"
                        version="v. 1.0"
                        text="Wedding Portfolio"
                        />
                    <CustomInfoPan
                        header="Wedding | Wedding Consultation Form"
                        linkPage="/weddingconsultationform"
                        linkDoc="/weddingconsultationform/doc"
                        version="v. 1.0"
                        text="Wedding Consultation Form"
                        />
                    <CustomInfoPan
                        header="Wedding | Wedding Consultation Form Success"
                        linkPage="/weddingconsultationformsuccess"
                        linkDoc="/weddingconsultationformsuccess/doc"
                        version="v. 1.0"
                        text="Wedding Consultation Form Success"
                        />
                    <CustomInfoPan
                        header="Wedding | Wedding Seasonal Flowers"
                        linkPage="/weddingseasonalflowers"
                        linkDoc="/weddingseasonalflowers/doc"
                        version="v. 1.0"
                        text="Wedding Seasonal Flowers"
                        />
                </Row>
            </Container>
        </div>
    )
}

export default Wedding;