import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
    return (
        <div>
            <Row>
                <Col md={12} className='footer'>
                    <Row className="justify-content-center">
                        <Col md={8} className="footer-content">
                            <Row>
                                <Col md={3}>
                                    <h5 className='footer-header'>Other Links </h5>
                                    <ul className='footer-menulist'>
                                        <li><a href='/'>Privacy Policy</a></li>
                                        <li><a href='/'>Disclaimer</a></li>
                                        <li><a href='/'>Cookie Policy</a></li>
                                        <li><a href='/'>Terms and Condition</a></li>
                                        <li><a href='/'>FAQ's</a></li>
                                    </ul>

                                </Col>
                                <Col md={5}>
                                    <h5 className='footer-header'>Services</h5>
                                    <ul className='footer-menulist'>
                                        <li className='top-foot-menu'>
                                            Renewable Energy
                                            <ul>
                                                <li><a href="/">Solar Pv & Solar Batteries</a></li>
                                                <li><a href="/">Air Source Heat Pumps</a></li>
                                            </ul>
                                        </li>
                                        <li className='top-foot-menu'>
                                            Insulation
                                            <ul>
                                                <li><a href="/">Underfloor Insulation</a></li>
                                                <li><a href="/">Wall Insulation</a></li>
                                                <li><a href="/">Roof Insulation</a></li>
                                            </ul>
                                        </li>
                                        <li className='top-foot-menu'>
                                            Heating And Other Energy Solutions
                                            <ul>
                                                <li><a href="/">Boiler & Heater Controls</a></li>
                                                <li><a href="/">Ventilation</a></li>
                                            </ul>
                                        </li>

                                    </ul>
                                </Col>
                                <Col md={4}>
                                    <Row>
                                        <div class="off-det">
                                            <Col md={10} xs={12}>
                                                <h5 className='footer-header'>Contact Information</h5>
                                                <Row className="justify-content-center">
                                                    <Col md={2}>
                                                        <h3><FontAwesomeIcon icon={faLocationDot} /></h3>
                                                    </Col>
                                                    <Col md={10}>
                                                        <p>Unit 2 & 3, Muirhead Quay, Fresh Wharf Estate, Barking, Essex, London, IG11 7BG</p>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </div>
                                    </Row>
                                    <div class="off-det">
                                        <Col md={8} xs={12}>
                                            <Row className="justify-content-center">
                                                <Col md={2}>
                                                    <h3><FontAwesomeIcon icon={faPhone} /></h3>
                                                </Col>
                                                <Col md={10}>
                                                    <p>0208 594 1117</p>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </div>
                                    <div class="off-det">
                                        <Col md={8} xs={12}>
                                            <Row className="justify-content-center">
                                                <Col md={2}>
                                                    <h3><FontAwesomeIcon icon={faEnvelope} /></h3>
                                                </Col>
                                                <Col md={10}>
                                                    <p>sales@izenergy.co.uk</p>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </div>
                                    <div class="off-det">
                                        <Col md={8} xs={12}>
                                            <Row className="justify-content-center">
                                                <ul className='social-icons'>
                                                    <li><a href="https://www.linkedin.com" >
                                                        <i class="fab fa-linkedin fa-2x"></i>
                                                    </a></li>
                                                    <li>
                                                        <a href="https://www.facebook.com"  >
                                                            <i class="fab fa-facebook fa-2x"></i>
                                                        </a></li>
                                                </ul>
                                            </Row>
                                        </Col>
                                    </div>
                                </Col>
                            </Row>
                            <Row className='justify-content-center'>
                                <Col md={8} style={{ "color": '#fff' }} className='copy'><p>Ⓒ Copyright IZEnergy 2025. All Right Reserved.</p></Col>
                            </Row>
                            
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default Footer;