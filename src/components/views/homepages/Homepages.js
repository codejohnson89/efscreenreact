import React from 'react';
import { Container, Row } from 'react-bootstrap';

import Header from '../../modules/Header';
import CustomHeadersIntro from '../../modules/CustomHeadersIntro';
import CustomInfoPan from '../../modules/CustomInfoPan';


function Homepages() {
    return (
        <div>
        <Header/>
        <CustomHeadersIntro header="eFlorist | Homepages"/>
        <Container>
            <Row>
                <CustomInfoPan
                    header="Homepage | Feature"
                    linkPage="/feature"
                    linkDoc="/feature/doc"
                    version="v. 1.0"
                    text="Homepage with large promotional area at the top to highlight upcoming holidays or events. Additional banners below the featured area for secondary promotions along with a featured category option. Additional popular product merchandising available at the bottom of the homepage."
                    />
                <CustomInfoPan
                    header="Homepage | Hero"
                    linkPage="/hero"
                    linkDoc="/hero/doc"
                    version="v. 1.0"
                    text="Homepage with single item featured at the top to highlight upcoming holidays. Side carousel to scroll through merchandising from a featured category along with additional product merchandising. Homepage features an area to promote a florist through video, along with additional text at the bottom of the page."
                    />
                <CustomInfoPan
                    header="Homepage | Icon"
                    linkPage="/icon"
                    linkDoc="/icon/doc"
                    version="v. 1.0"
                    text="Homepage with a single featured item at the top of the page along with 4 florist value icons. These icons will promote the florist's brand by briefly outlining what makes them stand out or be unique. Below these icons we have additional product merchandising and promotional banner areas."
                    />
                <CustomInfoPan
                    header="Homepage | Billboard"
                    linkPage="/billboard"
                    linkDoc="/billboard/doc"
                    version="v. 1.0"
                    text="Homepage with a single featured item at the top of the page, along wide a promotional area for Deal of the Day. Additional text is available to the florist below the featured item, along with the popular product merchandising area."
                    />
                <CustomInfoPan
                    header="Homepage | Lineup"
                    linkPage="/lineup"
                    linkDoc="/lineup/doc"
                    version="v. 1.0"
                    text="Homepage features multiple areas to promote products in a grid that can easily expand. Each row of products will show 5 items, and additional rows are available allowing the florist to show dozens of products on the homepage."
                    />
                <CustomInfoPan
                    header="Homepage | Checkerboard"
                    linkPage="/checkerboard"
                    linkDoc="/checkerboard/doc"
                    version="v. 1.0"
                    text="Homepage with a featured item carousel along with a grid of 4 products to the right of the featured area. The video element allows the florist to highlight themselves and promote a video on the homepage, along with several banner areas at the bottom of the homepage."
                    />
                <CustomInfoPan
                    header="Homepage | Spotlight"
                    linkPage="/spotlight"
                    linkDoc="/spotlight/doc"
                    version="v. 1.0"
                    text="Homepage with a large product slider at the top."
                    />
                <CustomInfoPan
                    header="Homepage | Immersion"
                    linkPage="/immersion"
                    linkDoc="/immersion/doc"
                    version="v. 1.0"
                    text="Homepage with a full-width slider."
                    />
                <CustomInfoPan
                    header="Homepage | Carousel"
                    linkPage="/carousel"
                    linkDoc="/immersioncarousel/doc"
                    version="v. 1.0"
                    text="Homepage with a full-width slider with a product carousel underneath."
                    />
                <CustomInfoPan
                    header="Homepage | Showtime"
                    linkPage="/showtime"
                    linkDoc="/showtime/doc"
                    version="v. 1.0"
                    text="Homepage with featured video module above the fold. Then products under it."
                    />
            </Row>
        </Container>
        </div>
    )
}

export default Homepages;