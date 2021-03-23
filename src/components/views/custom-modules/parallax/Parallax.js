import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';

function Parallax(props) {
    const { title, text, button, image = "http://localhost:3000/static/media/fall.b13529d5.jpg"} = props;
    const styleBG = {
        "backgroundAttachment": "fixed",        
        "backgroundImage": `url(${image})`,
        "backgroundRepeat": "no-repeat",
        "backgroundSize": "cover",
        "backgroundPosition": "center",
        "height": "50vh"
    }

    const styleContainer = {
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center",
        "justifyContent": "center",
        "height": "100%",
        "padding": "0"
    }

    const styleContent = {
    "width": "50%",
    "height": "50%",
    "display": "flex",
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "center",
    "backgroundColor": "rgba(255,255,255,.6)",
    "margin": "0 auto",
    "padding": "5em"
    }
    return (
        <Container style={styleBG}>
            <Row style={styleContainer}>
                <div className="content" style={styleContent}>
                    <h2>{title}</h2>
                    <p>{text}</p>
                    <Button>{button}</Button>
                </div>
            </Row>
        </Container>
    )
}

export default Parallax;