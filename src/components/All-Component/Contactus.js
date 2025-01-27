import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Contactus = () => {
    return (
        <div>
            <Row>
                <Col md={12} className='contact-page'>
                    <Row className="justify-content-center">
                        <Col md={9} className="contact-details">
                            <h5>Connect with us</h5>
                            <h3>Our Contacts</h3>
                            <Row className="justify-content-center">
                                <Col xs={8} className='contact-form-list'>
                                    <h3>Let's Talk About How We Can Help You Reduce Your Energy Bills</h3>
                                    <Row>
                                        <Col xs="12" className='top-con'>
                                            <Row>
                                                <Col md={4}>
                                                    <div class="off-det">
                                                        <h3><FontAwesomeIcon icon={faLocationDot} /></h3>
                                                        <h3>HEAD OFFICE</h3>
                                                        <p>Unit 2 & 3, Muirhead Quay, Fresh Wharf Estate, Barking, Essex, London, IG11 7BG</p>
                                                    </div>
                                                </Col>
                                                <Col md={4}>
                                                    <div class="off-det">
                                                        <h3><FontAwesomeIcon icon={faPhone} /></h3>
                                                        <h3>CALL US</h3>
                                                        <p>0208 594 1117</p>
                                                    </div>
                                                </Col>
                                                <Col md={4}>
                                                    <div class="off-det">
                                                        <h3><FontAwesomeIcon icon={faEnvelope} /></h3>
                                                        <h3>EMAIL US</h3>
                                                        <p>sales@izenergy.co.uk</p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs="12" className='bot-con'>
                                            <h2>CONTACT FORM</h2>
                                            <div className='main-form'>
                                                <form>
                                                    <Row>
                                                        <Col md={12}>
                                                            <Row>
                                                                <Col md={6}>
                                                                    <input type="text" placeholder='Enter your Name' />
                                                                </Col>
                                                                <Col md={6}>
                                                                    <input type="email" placeholder='Enter your Email id' />
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col md={12}>
                                                            <input type="text" placeholder='Enter your subject' />
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col md={12}>
                                                            <textarea name="message" rows="4" cols="50"
                                                            />
                                                        </Col>
                                                    </Row>
                                                    <div style={{"position":"relative"}}>
                                                        <div style={{ "display": "flex", "justifyContent": "center", "alignItems": "center", "marginBottom": "50px" }}>
                                                            <button type="submit" class="theme_button ">Send Message</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col >
            </Row>
        </div>
    );
};

export default Contactus;