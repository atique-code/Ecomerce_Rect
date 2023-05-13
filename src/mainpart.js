import React from "react";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import shirt1 from "./products/shirt1.webp";
import shirt2 from "./products/shirt3.jpg";
import shirt3 from "./products/shirt4.jpg";
import shirt4 from "./products/shirt5.jpg";
import shoes1 from "./shoes/shoes1.jpg"
import shoes2 from "./shoes/shoes2.jfif"
import shoes3 from "./shoes/shoes3.jpg"
import shoes4 from "./shoes/shoes4.jpg"

class Mainpart extends React.Component {
    render() {
        return (
            <>
                <h1 style={{ textAlign: "center" }}>Men's Shirt</h1>
                <Container>
                    <Row>
                        <Col sm={12} md={4} lg={3} className="my-3">
                            <Image src={shirt1} Alt="shirt1" height={300} width={250} />
                        </Col>
                        <Col sm={12} md={4} lg={3} className="my-3">
                            <Image src={shirt2} Alt="shirt4" height={300} width={250}/>
                        </Col>
                        <Col sm={12} md={4} lg={3} className="my-3">
                            <Image src={shirt3} Alt="shirt3" height={300} width={250} />
                        </Col>
                        <Col sm={12} md={4} lg={3} className="my-3">
                            <Image src={shirt4} Alt="shirt2" height={300} width={250}/>
                        </Col>
                    </Row>
                </Container>

                <h1 style={{ textAlign: "center" }}>Shoes</h1>
                <Container>
                    <Row>
                        <Col sm={12} md={4} lg={3} className="my-3">
                            <Image src={shoes1} Alt="shirt1" height={300} width={250} />
                        </Col>
                        <Col sm={12} md={4} lg={3} className="my-3">
                            <Image src={shoes2} Alt="shirt4" height={300} width={250}/>
                        </Col>
                        <Col sm={12} md={4} lg={3} className="my-3">
                            <Image src={shoes3} Alt="shirt3" height={300} width={250} />
                        </Col>
                        <Col sm={12} md={4} lg={3} className="my-3">
                            <Image src={shoes4} Alt="shirt2" height={300} width={250}/>
                        </Col>
                    </Row>
                </Container>


            </>
        )
    }
}

export default Mainpart;