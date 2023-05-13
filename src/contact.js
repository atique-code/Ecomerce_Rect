import React from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Hyderabad from "./map/maphyd.PNG";
// import {withFormik} from "formik";
class Contact extends React.Component {
    render() {
        
            // const formInitialValue = {
            //         name: "",
            //         Email: "",
            //         password: ""
        
            // }
        
            // const formik = withFormik({
            //     initialValues: formInitialValue,
            //     onSubmit: (values)=>{
            //         console.log(values)
            //     }
        
            // });
        return (
            <>
                <Container className="my-5" >
                    <Row>
                        <Col sm={12} md={6} lg={6}>
                            <form  /*onSubmit={formik.handleSubmit}*/>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">
                                        Enter Name:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        // onChange={formik.handleChange}
                                        // value={formik.values.name}
                                    />
                                    
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">
                                        Enter Email:
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="Email"
                                        // onChange={formik.handleChange}
                                        // value={formik.values.Email}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="" className="form-label">
                                        Enter Password:
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        // onChange={formik.handleChange}
                                        // value={formik.values.password}
                                    />
                                </div>

                                
                                <button type="submit" className="btn btn-primary">
                                    Submit
                                </button>
                            </form>

                        </Col>
                        <Col sm={12} md={6} lg={6}>
                        {/* <img src={Hyderabad} alt="xyz" style={{ width: '100%', height: 'auto', marginTop: '20px' }} /> */}
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115348.16999636701!2d68.28450352688269!3d25.38370364924801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c70f6d444f3c3%3A0xc00bbc183d41e285!2sHyderabad%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1683980559824!5m2!1sen!2s" style={{ width: '100%', height: '100%', marginTop: '20px' }}   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default Contact;

