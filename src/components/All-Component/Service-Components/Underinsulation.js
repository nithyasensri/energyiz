import React from 'react';
import { Row, Col } from 'react-bootstrap';
import renewimage1 from '../../../assets/iz-website-images-4.png'


const Underinsulation = () => {
    return (
        <div className='renew' style={{ "padding": "0px" }}>
        <div className='renewbg'>
            <div>
                <h2>Insulation / Underfloor Insulation</h2>
            </div>
        </div>
        <Row className="justify-content-center">
            <Col md={12} className='renew-sub'>
                <Row className='justify-content-center'>
                    <Col md={9} className='ren-whole'>
                        <Row>
                            <h3 className='renew-title'>Underfloor I sulation</h3>
                            <Col md={5} className='ren-sideimage'>
                                <img src={renewimage1} alt="roofinsulation"/>
                            </Col>
                            <Col md={7}>
                                <h5 className='renew-title'><b>What Is Underfloor Insulation?</b></h5>
                                <p>
                                Underfloor insulation is a layer of material placed beneath your home's floor, which helps to keep the indoor temperature comfortable and can save you money on energy bills.
                                </p>
                             
                                <h5 className='renew-title'><b>How Is It Installed?</b></h5>
                                <p><b>Lifting the Floor :</b> When your solar panels produce more electricity than your home needs, the surplus is sent to the battery instead of the grid.</p>
                                <p><b>Insulation Installation:</b>The battery stores this excess energy in chemical form, typically as DC electricity.</p>
                                <p><b>Replacing Floor:</b> When your energy demand exceeds what your solar panels are producing (e.g., at night or during cloudy days), the battery releases the stored energy as AC electricity for your home.</p>
                            </Col>
                        </Row>
                       
                    </Col>
                </Row>
            </Col>
        </Row>
    </div>
    );
};

export default Underinsulation;