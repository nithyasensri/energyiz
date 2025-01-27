import React from 'react';
import { Row, Col } from 'react-bootstrap';
import renewimage from '../../../assets/Depositphotos_42192113_original.jpg'
import i1 from '../../../assets/iz-website-images.png'
import i2 from '../../../assets/iz-website-images-1.png'
import i3 from '../../../assets/istock-1648356736-m-heat-pump.jpg'
const RenewablePage = () => {
    return (
        <div className='renew' style={{ "padding": "0px" }}>
            <div className='renewbg'>
                <div>
                    <h2>Renewable Energy</h2>
                </div>
            </div>
            <Row className="justify-content-center">
                <Col md={12} className='renew-sub'>
                    <Row className='justify-content-center'>
                        <Col md={9} className='ren-whole'>
                            <Row>
                                <h3 className='renew-title'>Renewable Energy</h3>
                                <Col md={5} className='ren-sideimage'>
                                    <img src={renewimage} alt="renewable"/>
                                </Col>
                                <Col md={7}>
                                    <p>
                                        Welcome to a greener and more sustainable future with IZ Energy's renewable energy services. Our commitment to environmental responsibility is reflected in our renewable offerings, including Air Source Heat Pumps, Solar PV, and Solar Batteries. We empower you to reduce your carbon footprint while enjoying cost-effective and efficient energy solutions.
                                    </p>
                                    <p>
                                        Discover the benefits of clean energy for your home, click on the services below to learn more about how each renewable service can benefit your home. Join us in making a positive impact on the planet while enjoying the long-term advantages of sustainable living. Start your journey towards a renewable future today!
                                    </p>
                                </Col>
                            </Row>
                            <Row>
                                <h3 className='renew-title'>Find out more about our renewable services by clicking on each of the services below</h3>
                                <Col md={4} className='sub-ren'>
                                    <div className="new-rgn">
                                        <img src={i1} alt="renewable"/>
                                        <div style={{"display": "flex", "justifyContent": "center", "alignItems": "center", "marginBottom": "25px","paddingTop":"12px"}}>
                                            <button type="submit" class="theme_button ">
                                                <a href='/'>
                                                    solar Pv</a></button>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={4} className='sub-ren'>
                                    <div className="new-rgn">
                                        <img src={i2} alt="renewable"/>
                                        <div style={{"display": "flex", "justifyContent": "center", "alignItems": "center", "marginBottom": "25px","paddingTop":"12px"}}>
                                            <button type="submit" class="theme_button ">
                                                <a href="/">Solar Batteries</a></button>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={4} className='sub-ren'>
                                    <div className="new-rgn">
                                        <img src={i3} alt="renewable"/>
                                        <div style={{"display": "flex", "justifyContent": "center", "alignItems": "center", "marginBottom": "25px","paddingTop":"12px"}}>
                                            <button type="submit" class="theme_button ">
                                                <a href="/">Air Source Heat Pump</a>
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

export default RenewablePage;