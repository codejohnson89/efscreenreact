import React from 'react';
import { Container, Row } from 'react-bootstrap';

import Header from '../../modules/Header';
import CustomHeadersIntro from '../../modules/CustomHeadersIntro';
import CustomInfoPan from '../../modules/CustomInfoPan';

function Categories() {
    return (
        <div>
            <Header/>
            <CustomHeadersIntro header="eFlorist | Custom Modules"/>
            <Container>
                <Row>
                    <CustomInfoPan
                        header="Category | Category Layout"
                        linkPage="/categorylayout"
                        linkDoc="/categorylayout/doc"
                        version="v. 1.0"
                        text="Primary category template showing the bouquets within featured occasions."
                        />
                    <CustomInfoPan
                        header="Category | Subcategory Layout"
                        linkPage="/subcategorylayout"
                        linkDoc="/categorylayout/doc"
                        version="v. 1.0"
                        text="Subcategory page that shows the product grid within a specific subcategory page."
                        />
                    <CustomInfoPan
                        header="Category | Subcategory with Promos"
                        linkPage="/subcategorylayoutpromos"
                        linkDoc="/subcategorylayoutpromos/doc"
                        version="v. 1.0"
                        text="Modified subcategory page featuring promotional areas within the product grid."
                        />
                    <CustomInfoPan
                        header="Category | Subcategory Layout - Three Wide"
                        linkPage="/subcategorylayoutthree"
                        linkDoc="/subcategorylayoutthree/doc"
                        version="v. 1.0"
                        text="Subcategory page that shows the product grid within a specific subcategory page. Uses three images wide instead of four."
                        />
                    <CustomInfoPan
                        header="Category | Collections Layout"
                        linkPage="/collectionslayout"
                        linkDoc="/collectionslayout/doc"
                        version="v. 1.0"
                        text="Collections landing page showing available collections on the site."
                        />
                    <CustomInfoPan
                        header="Category | Individual Collection Page"
                        linkPage="/individualcategorylayout"
                        linkDoc="/individualcategorylayout/doc"
                        version="v. 1.0"
                        text="Individual collection page showing the available products within a collection."
                        />
                    <CustomInfoPan
                        header="Search | Search Results Page"
                        linkPage="/searchresults"
                        linkDoc="/searchresults/doc"
                        version="v. 1.0"
                        text="Search Results page displaying the product grid of items that meet the search criteria."
                        />
                    <CustomInfoPan
                        header="Search | No Search Results"
                        linkPage="/nosearchresults"
                        linkDoc="/nosearchresults/doc"
                        version="v. 1.0"
                        text="No Results found landing page showing 'Did you mean' functionality along with recommended bouquets."
                        />
                </Row>
            </Container>
        </div>
    )
}

export default Categories;