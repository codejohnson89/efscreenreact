import React from 'react';
import { Container, Row } from 'react-bootstrap';

import Header from '../../modules/Header';
import CustomHeadersIntro from '../../modules/CustomHeadersIntro';
import CustomInfoPan from '../../modules/CustomInfoPan';


function CustomHeaders() {
    return (
        <div>
        <CustomHeadersIntro header="eFlorist | Custom Header Modules"/>
        <Container>
            <Row>
                <CustomInfoPan 
                    header="Header | Image/Text" 
                    linkPage="/ImageText" 
                    linkDoc="/ImageText/doc"
                    version="1.0"
                    text="An image or text that can be placed into the header of the page and changed out regularly."
                    />
                <CustomInfoPan
                    header="Header | Logo Centered"
                    linkPage="/LogoCenteredHeader"
                    linkDoc="/LogoCentered/doc"
                    version="v. 1.0"
                    text="A larger than average logo that can be centered in the header."
                    />
                <CustomInfoPan
                    header="Header | Logo Left"
                    linkPage="/LogoLeft"
                    linkDoc="/LogoLeft/doc"
                    version="v. 1.0"
                    text="A larger than average logo that can be left aligned in the header."
                    />
                <CustomInfoPan
                    header="Header | Logo Left Stacked"
                    linkPage="/LogoLeftStacked"
                    linkDoc="/LogoLeftStacked/doc"
                    version="v. 1.0"
                    text="A larger than average logo that can be left aligned in the header. All other elements are stacked on the right."
                    />
                <CustomInfoPan
                    header="Header | Colorbar"
                    linkPage="/Colorbar"
                    linkDoc="/Colorbar/doc"
                    version="v. 1.0"
                    text="A larger than average logo with a bar of color behind the navigation and at the top of the page."
                    />
                <CustomInfoPan
                    header="Header | Secondary Nav"
                    linkPage="/SecondaryNav"
                    linkDoc="/SecondaryNav/doc"
                    version="v. 1.0"
                    text="A header layout that allows a line of extra links in addition to the regular dropdown menu."
                    />
                <CustomInfoPan
                    header="Header | Text Logo"
                    linkPage="/TextLogo"
                    linkDoc="/TextLogo/doc"
                    version="v. 1.0"
                    text="A header layout that doesn't use an image."
                    />
            </Row>
        </Container>
        </div>
    )
}

export default CustomHeaders;