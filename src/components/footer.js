import React from "react";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";


class Footer extends React.Component {
    render() {
        return (
            <footer bg="dark" varient="dark" >
                <Container>
                    <Row>
                        <Col sm={6} md={6} lg={3} className="my-3">
                            <h3>Online Shopping</h3>
                            <p>we are providing you branded products in 45% off price. So, hurry up buy your favourite products</p>
                        </Col>
                        <Col sm={6} md={6} lg={3} className="my-3">
                            <h3>Response us</h3>
                            <form>
                                <input type="text" placeholder="enter your response" required />
                                <br />
                                <Button className="primary my-3">Submit</Button>
                            </form>
                        </Col>
                        <Col sm={6} md={6} lg={3} className="my-3">
                            <h3>Social Links</h3>
                            <div className="social-icons">
                                <FaInstagram className="icon" />
                                <FaFacebook className="icon" />
                                <FaLinkedin className="icon" />
                            </div>
                        </Col>
                        <Col sm={6} md={6} lg={3} className="my-3">
                            <h3>Contact Us</h3>
                            <div className="contacts">
                                <a href="#">03163180244</a>
                                <p>Railway Traffic Colony Hyderabad</p>
                                <p>for More Information please visit our office</p>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        )
    }
} export default Footer;