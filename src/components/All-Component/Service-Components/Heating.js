import React from 'react';
import { Row, Col } from 'react-bootstrap';
import renewimage from '../../../assets/Depositphotos_42192113_original.jpg'
import i1 from '../../../assets/iz-website-images-2.png'
import i2 from '../../../assets/istock-489945884-m-boiler.jpg'
import i3 from '../../../assets/iz-website-images-3.png'
const Heating = () => {
    return (
        <div className='renew' style={{ "padding": "0px" }}>
            <div className='renewbg'>
                <div>
                    <h2>Heating and Other Energy Solutions</h2>
                </div>
            </div>
            <Row className="justify-content-center">
                <Col md={12} className='renew-sub'>
                    <Row className='justify-content-center'>
                        <Col md={9} className='ren-whole'>
                            <Row>
                                <h3 className='renew-title'>Heating and Other Energy Solutions</h3>
                                <Col md={5} className='ren-sideimage'>
                                    <img src={renewimage} alt="heating"/>
                                </Col>
                                <Col md={7}>
                                    <p>
                                        Our expertise extends to a wide range of heating and other energy solutions, including Boiler Upgrades, Heating Controls, Smart Heating Controls, and Ventilation. Upgrading your boiler not only enhances performance but also reduces energy consumption, while our advanced heating controls provide tailored solutions for optimal comfort and efficiency. With smart heating controls, you gain the convenience of managing your home's temperature remotely, ensuring both comfort and energy savings.
                                    </p>

                                </Col>
                            </Row>
                            <Row>
                                <h3 className='renew-title'>Find out more about our renewable services by clicking on each of the services below</h3>
                                <Col md={4} className='sub-ren'>
                                    <div className="new-rgn">
                                        <img src={i1} alt="heating"/>
                                        <div style={{ "display": "flex", "justifyContent": "center", "alignItems": "center", "marginBottom": "25px", "paddingTop": "12px" }}>
                                            <button type="submit" class="theme_button ">
                                                <a href='/'>
                                                    Boiler Upgrade
                                                </a></button>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={4} className='sub-ren'>
                                    <div className="new-rgn">
                                        <img src={i2} alt="heating"/>
                                        <div style={{ "display": "flex", "justifyContent": "center", "alignItems": "center", "marginBottom": "25px", "paddingTop": "12px" }}>
                                            <button type="submit" class="theme_button ">
                                                <a href="/">Boilers and Heater Controls</a></button>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={4} className='sub-ren'>
                                    <div className="new-rgn">
                                        <img src={i3} alt="heating"/>
                                        <div style={{ "display": "flex", "justifyContent": "center", "alignItems": "center", "marginBottom": "25px", "paddingTop": "12px" }}>
                                            <button type="submit" class="theme_button ">
                                                <a href="/">Ventilation</a>
                                            </button>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default Heating;