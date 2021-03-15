import React from 'react';
import { Container, Row, Card, Col, CardGroup, Button } from 'react-bootstrap';
import beach from '../../../../images/occasion-tiles/beach.jpg';
import flower from '../../../../images/occasion-tiles/flower.jpg';
import tree from '../../../../images/occasion-tiles/tree.jpg';

function OccasionTilesThree() {
    return ( 
        <Container>
            <Row className="m-homepage-occasiontile-three">
            <Col sm={4} className="m-homepage-occasiontile">
                    <CardGroup>
                        <Card>
                            <Card.Img src={beach}></Card.Img>
                            <Card.Body className="m-homepage-occasiontile-content">
                                <Card.Title>Beach Category</Card.Title>
                                <Button>Shop Menu</Button>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Col>
                <Col sm={4} className="m-homepage-occasiontile">
                    <CardGroup>
                        <Card>
                            <Card.Img src={flower}></Card.Img>
                            <Card.Body className="m-homepage-occasiontile-content">
                                <Card.Title>Flower occasion</Card.Title>
                                <Button>Shop Menu</Button>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Col>
                <Col sm={4} className="m-homepage-occasiontile">
                    <CardGroup>
                        <Card>
                            <Card.Img src={tree}></Card.Img>
                            <Card.Body className="m-homepage-occasiontile-content">
                                <Card.Title>Plants Category</Card.Title>
                                <Button>Shop Menu</Button>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Col>
                
            </Row>
        </Container>
     )
}

export default OccasionTilesThree;