import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Gallery from 'react-photo-masonry';

import {photos} from './photos';


function MasonGallery() {
    return (
        <Container>
            <Row>
                <h2>This uses the react mason gallery package</h2>
                <Gallery photos={photos} />
            </Row>
        </Container>
    );
}

export default MasonGallery;