import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/esm/Container";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Strategy from "./services/strategy.jfif";
import Brend from "./services/brend.jpg";
import Development from "./services/development2.jpg";
import Payment from "./services/payment.jfif";
import Social from "./services/social media.jfif";
import Ecomerce from "./services/ecomerce.jfif"

class Blog extends React.Component {
    render() {
        return (
            <>
                <Container className="my-5">
                    <Row >
                        <Col sm={12} md={6} lg={4} data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" >
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={Strategy} style={{ height: 250 }} />
                                <Card.Body>
                                    <Card.Title className="heading">Strategy</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button style={{display:"block",margin:"auto"}} variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={4} data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={Brend} style={{ height: 250 }} />
                                <Card.Body>
                                    <Card.Title className="heading">Brend</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button style={{display:"block",margin:"auto"}} variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={4} data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={Development} style={{ height: 250 }} />
                                <Card.Body>
                                    <Card.Title className="heading">Development</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button style={{display:"block",margin:"auto"}} variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="my-5">
                        <Col sm={12} md={6} lg={4} data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">>
                            <Card style={{ width: '18rem' }} className="my-5" >
                                <Card.Img variant="top" src={Payment} style={{ height: 250 }} />
                                <Card.Body>
                                    <Card.Title className="heading">Payment</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button style={{display:"block",margin:"auto"}} variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={4} data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">>
                            <Card style={{ width: '18rem' }} className="my-5">
                                <Card.Img variant="top" src={Social} style={{ height: 250 }} />
                                <Card.Body>
                                    <Card.Title className="heading">Social</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button style={{display:"block",margin:"auto"}} variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={4} data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">>
                            <Card style={{ width: '18rem' }} className="my-5">
                                <Card.Img variant="top" src={Ecomerce} style={{ height: 250 }} />
                                <Card.Body>
                                    <Card.Title className="heading" >Ecomerce</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button style={{display:"block",margin:"auto"}} variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default Blog;