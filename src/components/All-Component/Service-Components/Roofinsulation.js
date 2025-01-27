import React from 'react';
import { Row, Col } from 'react-bootstrap';
import renewimage from '../../../assets/istock-480954618-m-loft11.jpg'

const Roofinsulation = () => {
    return (
        <div className='renew' style={{ "padding": "0px" }}>
            <div className='renewbg'>
                <div>
                    <h2>Insulation / Roof Insulation</h2>
                </div>
            </div>
            <Row className="justify-content-center">
                <Col md={12} className='renew-sub'>
                    <Row className='justify-content-center'>
                        <Col md={9} className='ren-whole'>
                            <Row>
                                <h3 className='renew-title'>Roof Insulation</h3>
                                <Col md={5} className='ren-sideimage'>
                                    <img src={renewimage} alt="roofinsulation"/>
                                </Col>
                                <Col md={7}>
                                    <h5 className='renew-title'><b>Roof Insulation</b></h5>
                                   <p>Loft insulation is like giving your home a cosy blanket to wear in the attic. Here's how it works:</p>
                                    <p><b>Warmth Keeper :</b> When your solar panels produce more electricity than your home needs, the surplus is sent to the battery instead of the grid.</p>
                                    <p><b>Heat Saver:</b>The battery stores this excess energy in chemical form, typically as DC electricity.</p>
                                    <p><b>Cool Friend:</b> When your energy demand exceeds what your solar panels are producing (e.g., at night or during cloudy days), the battery releases the stored energy as AC electricity for your home.</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default Roofinsulation;