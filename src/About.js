import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Button from "react-bootstrap/esm/Button";
import Sidepic from "./About us/About.jpg"

class About extends React.Component {
    render() {
        return (
            <>
                <Container className="my-5">
                    <Row>
                        <Col sm={12} md={6} lg={6}>
                            <div className="container my-5">
                                <div className="heading-secting">
                                    <h1 style={{ textAlign: "center" }}>About Us</h1>
                                </div>
                                <div className="explaination" data-aos="fade-up">
                                    <p>In 2020, I was nominated for the top Sales Person in Europe award, and made it to the final of the Best Women in Sales Europe (check here). In addition to this, I was nominated and won Best Sales Person in EMEA for the American Forbes 100 company I work for. One quick way to make your About Us page easy to read is by including plenty of headings and subheadings. People quickly scanning the page will still be able to get the gist, and people actually reading the page will appreciate that the content is broken up into organized chunks.</p>
                                </div>
                                <div className="btn-section">
                                    <Button variant="primary">Read More</Button>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={6}>
                            <div className="image my-5" data-aos="fade-down">
                                <img src={Sidepic} alt="image" width={400} height={300} />
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={12} md={6} lg={6}>
                            <div className="image my-5" data-aos="fade-down">
                                <img src={Sidepic} alt="image" width={400} height={300} />
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={6}>
                            <div className="container my-5">
                                
                                <div className="explaination" data-aos="fade-up">
                                    <p>In 2020, I was nominated for the top Sales Person in Europe award, and made it to the final of the Best Women in Sales Europe (check here). In addition to this, I was nominated and won Best Sales Person in EMEA for the American Forbes 100 company I work for. One quick way to make your About Us page easy to read is by including plenty of headings and subheadings. People quickly scanning the page will still be able to get the gist, and people actually reading the page will appreciate that the content is broken up into organized chunks.</p>
                                </div>
                                <div className="btn-section">
                                    <Button variant="primary">Read More</Button>
                                </div>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </>
        )
    }
}

export default About;