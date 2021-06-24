import React from 'react';
import { Container, Row } from 'react-bootstrap';

import Header from '../../modules/Header';
import CustomHeadersIntro from '../../modules/CustomHeadersIntro';
import CustomInfoPan from '../../modules/CustomInfoPan';

function CustomModules() {
    return (
        <div>
            <CustomHeadersIntro header="eFlorist | Custom Modules"/>
            <Container>
                <Row>
                    {/* <CustomInfoPan
                        header="About Us | Three Wide"
                        linkPage="/AboutUsThreeWide"
                        linkDoc="/AboutUsThreeWide/doc"
                        version="v. 1.0"
                        text="A bar that contains three blocks of content often used to describe the shop, display store hours, or place widgets for rss feeds, etc..."
                        />
                    <CustomInfoPan
                        header="About Us | Four Wide"
                        linkPage="/AboutUsFourWide"
                        linkDoc="/AboutUsFourWide/doc"
                        version="v. 1.0"
                        text="A bar that contains four blocks of content often used to describe the shop, display store hours, or place widgets for rss feeds, etc..."
                        /> */}
                    <CustomInfoPan
                        header="Marketing Banner | Innard"
                        linkPage="/MarketingBanner"
                        linkDoc="/MarketingBanner/doc"
                        version="v. 1.0"
                        text="Marketing banner."
                        code="<MarketingBanner/>"
                        />
                    <CustomInfoPan
                        header="Mason Gallery | Innard"
                        linkPage="/MasonGallery"
                        linkDoc="/MasonGallery/doc"
                        version="v.1.0"
                        text="A Pinterest style photo block that allows for several photos to be automatically arranged."
                        code="<MasonGallery />"
                        />
                    <CustomInfoPan
                        header="Occasion Tiles | Three Wide"
                        linkPage="/OccasionTilesThree"
                        linkDoc="/OccasionTilesThree/doc"
                        version="v. 1.0"
                        text="A set of three images that can be placed side by side and link to certain occasions."
                        code="<OccasionTilesThree />"
                        />
                    <CustomInfoPan
                        header="Occasion Tiles | Four Wide"
                        linkPage="/OccasionTilesFour"
                        linkDoc="/OccasionTilesFour/doc"
                        version="v. 1.0"
                        text="A set of four images that can be placed side by side and link to certain occasions."
                        code="<OccasionTilesFour />"
                        />
                    <CustomInfoPan
                        header="Occasion Tiles | Six Wide"
                        linkPage="/OccasionTilesSix"
                        linkDoc="/OccasionTilesSix/doc"
                        version="v. 1.0"
                        text="A set of five images that can be placed side by side and link to certain occasions."
                        code="<OccasionTilesSix />"
                        />
                    <CustomInfoPan
                        header="Parallax | Innard"
                        linkPage="/Parallax"
                        linkDoc="/Parallax/doc"
                        version="v. 1.0"
                        text="A section of the page with a parallax background and an HTML block."
                        code="<Parallax />"
                        />
                    <CustomInfoPan
                        header="Product | Product Rotation"
                        linkPage="/ProductRotation"
                        linkDoc="/ProductRotation/doc"
                        version="v. 1.0"
                        text="A set of six large rotating product images."
                        code="<ProductRotation />"
                        />
                    <CustomInfoPan
                        header="Product | Product Grid"
                        linkPage="/ProductGrid"
                        linkDoc="/ProductGrid/doc"
                        version="v. 1.0"
                        text="A list of products with no containers, just products."
                        code="<ProductGrid />"
                        />
                    <CustomInfoPan
                        header="Product | Sliding Product Rows"
                        linkPage="/SlidingProudctRows"
                        linkDoc="/SlidingProductRows/doc"
                        version="v. 1.0"
                        text="A set of products that can be placed into a carousel and navigated through via left and right navigation arrows."
                        />
                    <CustomInfoPan
                        header="Product | Three Products Wide"
                        linkPage="/ThreeProductsWide"
                        linkDoc="/ThreeProductsWide/doc"
                        version="v. 1.0"
                        text="A homepage module that looks like the regular feature module except it is only three wide instead of five. It also has larger images."
                        code="<ProductThreeWide />"
                        />
                    <CustomInfoPan
                        header="Product | Max Products"
                        linkPage="/MaxProducts"
                        linkDoc="/MaxProducts/doc"
                        version="v. 1.0"
                        text="This is a max products module that displays five products."
                        code="<ProductMaxProducts />"
                        />
                    <CustomInfoPan
                        header="Product | Max Products Three Wide"
                        linkPage="/MaxProductsThreeWide"
                        linkDoc="/MaxProductsThreeWide/doc"
                        version="v. 1.0"
                        text="This is a max products module that displays three products wide instead of five."
                        code="<ProductMaxThreeWide />"
                        />
                    <CustomInfoPan
                        header="Quick Links | Category Bar"
                        linkPage="/QuickLinks"
                        linkDoc="/QuickLinks/doc"
                        version="v. 1.0"
                        text="A bar that contains a few links directly to categories that can be displayed on the homepage."
                        code="<QuickLinks/>"
                        />
                    <CustomInfoPan
                        header="Quick Links | Slideshow plus Category Bar"
                        linkPage="/SlideshowCategoryBar"
                        linkDoc="/SlideshowCategoryBar/doc"
                        version="v. 1.0"
                        text="A vertical version of the regular category bar on the left side, and a slideshow on the right that can hold any image."
                        code="<SlideshowCategoryBar />"
                        />
                    <CustomInfoPan
                        header="Slideshow | Full Screen"
                        linkPage="/SlideshowFull"
                        linkDoc="/SlideshowFull/doc"
                        version="v. 1.0"
                        text="A slideshow that any image can be placed in that stretches the full width of the page."
                        code="<SlideshowFull />"
                        />
                    <CustomInfoPan
                        header="Video | Double Bar"
                        linkPage="/VideoBar"
                        linkDoc="/VideoBar/doc"
                        version="v. 1.0"
                        text="A bar that can hold two videos side by side."
                        code="<VideoBar />"
                        />
                    {/* <CustomInfoPan
                        header="Video | Video Background"
                        linkPage="/VideoBackground"
                        linkDoc="/VideoBG/doc"
                        version="v. 1.0"
                        text="A section similar to the parallax except with a video background."
                        /> */}
                </Row>
            </Container>
        </div>
    )
}

export default CustomModules;