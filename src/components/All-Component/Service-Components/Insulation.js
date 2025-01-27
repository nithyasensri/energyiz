import React from 'react';
import { Row, Col } from 'react-bootstrap';
import renewimage from '../../../assets/Depositphotos_42192113_original.jpg'
import i1 from '../../../assets/istock-941965912-m-insulation.jpg'
import i2 from '../../../assets/istock-480954618-m-loft.jpg'
import i3 from '../../../assets/iz-website-images-4.png'

const Insulation = () => {
    return (
        <div className='renew' style={{ "padding": "0px" }}>
            <div className='renewbg'>
                <div>
                    <h2>Isnulation</h2>
                </div>
            </div>
            <Row className="justify-content-center">
                <Col md={12} className='renew-sub'>
                    <Row className='justify-content-center'>
                        <Col md={9} className='ren-whole'>
                            <Row>
                                <h3 className='renew-title'>Insulation</h3>
                                <Col md={5} className='ren-sideimage'>
                                    <img src={renewimage} alt="insulation" />
                                </Col>
                                <Col md={7}>
                                    <p>
                                        Wall insulation is a game-changer for homes, playing a crucial role in maintaining a comfortable and energy-efficient living environment. By preventing the escape of heat during the colder months and keeping the interior cool in warmer weather, wall insulation acts as a reliable shield against temperature extremes. This not only ensures a cozy atmosphere year-round but also significantly reduces the strain on heating and cooling systems, translating to lower energy bills. Beyond the financial benefits, proper wall insulation contributes to a more sustainable lifestyle by curbing energy waste and minimizing the carbon footprint of a household. Investing in quality wall insulation is a wise choice, providing both immediate comfort and long-term environmental advantages for homeowners.
                                    </p>
                                </Col>
                            </Row>
                            <Row>
                                <h3 className='renew-title'>Find out more about our Insulation services by clicking on each of the services below</h3>
                                <Col md={4} className='sub-ren'>
                                    <div className="new-rgn">
                                        <img src={i1} alt="insulation"/>
                                        <div style={{ "display": "flex", "justifyContent": "center", "alignItems": "center", "marginBottom": "25px", "paddingTop": "12px" }}>
                                            <button type="submit" class="theme_button ">
                                                <a href="/">Wall Insulation</a></button>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={4} className='sub-ren'>
                                    <div className="new-rgn">
                                        <img src={i2} alt="insulation"/>
                                        <div style={{ "display": "flex", "justifyContent": "center", "alignItems": "center", "marginBottom": "25px", "paddingTop": "12px" }}>
                                            <button type="submit" class="theme_button ">
                                                <a href="/">Roof Insulation</a></button>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={4} className='sub-ren'>
                                    <div className="new-rgn">
                                        <img src={i3} alt="insulation"/>
                                        <div style={{ "display": "flex", "justifyContent": "center", "alignItems": "center", "marginBottom": "25px", "paddingTop": "12px" }}>
                                            <button type="submit" class="theme_button ">
                                                <a href="/">Underfloor Insulation</a></button>
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

export default Insulation;