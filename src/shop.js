import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Shirt1 from "../src/Gallery/shirt1.jpg";
import Shirt2 from "../src/Gallery/shirt2.jpg";
import Shirt3 from "../src/Gallery/shirt3.jpg";
import Shirt4 from "../src/Gallery/shirt4.jpg";
import "./App.css";


class Shop extends React.Component {
    render() {
        return (
            <>
                <h1 style={{textAlign: "center"}}>Gallery</h1>
                <Container>
                    <Row>
                        <Col sm={12} md={6} lg={3}>
                            <Card className="my-5 card" style={{ boxShadow: "0 0 30px rgb(65, 62, 62)", overflow: "hidden", borderRadius: "15px" }}>
                                <Card.Img  variant="top" src={Shirt1} height={250} />
                                <Card.Body>
                                    <Card.Title style={{textAlign: "center"}}>Fancy Shirt</Card.Title>
                                   
                                    <Button style={{display:"block",margin:"auto"}} variant="primary"  className="btn-buy" >Buy Now</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        
                        <Col sm={12} md={6} lg={3}>
                        <Card className="my-5" style={{ boxShadow: "0 0 30px rgb(65, 62, 62)", overflow: "hidden", borderRadius: "15px" }}>
                                <Card.Img variant="top" src={Shirt2} height={250} />
                                <Card.Body>
                                    <Card.Title style={{textAlign: "center"}}>Casual Shirt</Card.Title>
                                   
                                    <Button style={{display:"block",margin:"auto"}} variant="primary" className="btn-buy">Buy Now</Button>
                                </Card.Body>
                        </Card>
                        </Col>
                        <Col sm={12} md={6} lg={3}>
                        <Card className="my-5" style={{ boxShadow: "0 0 30px rgb(65, 62, 62)", overflow: "hidden", borderRadius: "15px" }}>
                                <Card.Img  variant="top" src={Shirt3} height={250} />
                                <Card.Body>
                                    <Card.Title style={{textAlign: "center"}}>Brended Shirt</Card.Title>
                                    
                                    <Button style={{display:"block",margin:"auto"}} variant="primary" className="btn-buy">Buy Now</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={3}>
                        <Card className="my-5" style={{ boxShadow: "0 0 30px rgb(65, 62, 62)", overflow: "hidden", borderRadius: "15px" }}>
                                <Card.Img  variant="top" src={Shirt4} height={250} />
                                <Card.Body>
                                    <Card.Title style={{textAlign: "center"}}>Blue Shirt</Card.Title>
                                  
                                    <Button style={{display:"block",margin:"auto"}} variant="primary" className="btn-buy">Buy Now</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    {/* second row  */}
                    <Row>
                        <Col sm={12} md={6} lg={3}>
                            <Card className="my-5 card" style={{ boxShadow: "0 0 30px rgb(65, 62, 62)", overflow: "hidden", borderRadius: "15px" }}>
                                <Card.Img  variant="top" src={Shirt1} height={250} />
                                <Card.Body>
                                    <Card.Title style={{textAlign: "center"}}>Fancy Shirt</Card.Title>
                                   
                                    <Button style={{display:"block",margin:"auto"}} variant="primary"  className="btn-buy" >Buy Now</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        
                        <Col sm={12} md={6} lg={3}>
                        <Card className="my-5" style={{ boxShadow: "0 0 30px rgb(65, 62, 62)", overflow: "hidden", borderRadius: "15px" }}>
                                <Card.Img variant="top" src={Shirt2} height={250} />
                                <Card.Body>
                                    <Card.Title style={{textAlign: "center"}}>Casual Shirt</Card.Title>
                                   
                                    <Button style={{display:"block",margin:"auto"}} variant="primary" className="btn-buy">Buy Now</Button>
                                </Card.Body>
                        </Card>
                        </Col>
                        <Col sm={12} md={6} lg={3}>
                        <Card className="my-5" style={{ boxShadow: "0 0 30px rgb(65, 62, 62)", overflow: "hidden", borderRadius: "15px" }}>
                                <Card.Img  variant="top" src={Shirt3} height={250} />
                                <Card.Body>
                                    <Card.Title style={{textAlign: "center"}}>Brended Shirt</Card.Title>
                                    
                                    <Button style={{display:"block",margin:"auto"}} variant="primary" className="btn-buy">Buy Now</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={3}>
                        <Card className="my-5" style={{ boxShadow: "0 0 30px rgb(65, 62, 62)", overflow: "hidden", borderRadius: "15px" }}>
                                <Card.Img  variant="top" src={Shirt4} height={250} />
                                <Card.Body>
                                    <Card.Title style={{textAlign: "center"}}>Blue Shirt</Card.Title>
                                  
                                    <Button style={{display:"block",margin:"auto"}} variant="primary" className="btn-buy">Buy Now</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    {/* third row  */}
                    <Row>
                        <Col sm={12} md={6} lg={3}>
                            <Card className="my-5 card" style={{ boxShadow: "0 0 30px rgb(65, 62, 62)", overflow: "hidden", borderRadius: "15px" }}>
                                <Card.Img  variant="top" src={Shirt1} height={250} />
                                <Card.Body>
                                    <Card.Title style={{textAlign: "center"}}>Fancy Shirt</Card.Title>
                                   
                                    <Button style={{display:"block",margin:"auto"}} variant="primary"  className="btn-buy text-center" >Buy Now</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        
                        <Col sm={12} md={6} lg={3}>
                        <Card className="my-5" style={{ boxShadow: "0 0 30px rgb(65, 62, 62)", overflow: "hidden", borderRadius: "15px" }}>
                                <Card.Img variant="top" src={Shirt2} height={250} />
                                <Card.Body>
                                    <Card.Title style={{textAlign: "center"}}>Casual Shirt</Card.Title>
                                   
                                    <Button style={{display:"block",margin:"auto"}} variant="primary" className="btn-buy">Buy Now</Button>
                                </Card.Body>
                        </Card>
                        </Col>
                        <Col sm={12} md={6} lg={3}>
                        <Card className="my-5" style={{ boxShadow: "0 0 30px rgb(65, 62, 62)", overflow: "hidden", borderRadius: "15px" }}>
                                <Card.Img  variant="top" src={Shirt3} height={250} />
                                <Card.Body>
                                    <Card.Title style={{textAlign: "center"}}>Brended Shirt</Card.Title>
                                    
                                    <Button style={{display:"block",margin:"auto"}} variant="primary" className="btn-buy">Buy Now</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={12} md={6} lg={3}>
                        <Card className="my-5" style={{ boxShadow: "0 0 30px rgb(65, 62, 62)", overflow: "hidden", borderRadius: "15px" }}>
                                <Card.Img  variant="top" src={Shirt4} height={250} />
                                <Card.Body>
                                    <Card.Title style={{textAlign: "center"}}>Blue Shirt</Card.Title>
                                  
                                    <Button style={{display:"block",margin:"auto"}} variant="primary" className="btn-buy">Buy Now</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default Shop;