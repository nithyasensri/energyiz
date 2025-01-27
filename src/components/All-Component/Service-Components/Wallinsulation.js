import React from 'react';
import { Row, Col } from 'react-bootstrap';
import renewimage1 from '../../../assets/post-install-26-carrington-2.png'
import renewimage2 from '../../../assets/istock-941965912-m-insulation.jpg'
import renewimage3 from '../../../assets/istock-1307978273-l-ewi.jpg'


const Wallinsulation = () => {
    return (
        <div className='renew' style={{ "padding": "0px" }}>
        <div className='renewbg'>
            <div>
                <h2>Insulation / Wall Insulation</h2>
            </div>
        </div>
        <Row className="justify-content-center">
            <Col md={12} className='renew-sub'>
                <Row className='justify-content-center'>
                    <Col md={9} className='ren-whole'>
                        <Row>
                            <h3 className='renew-title'>External Wall Insulation</h3>
                            <Col md={5} className='ren-sideimage'>
                                <img src={renewimage1} alt="roofinsulation"/>
                            </Col>
                            <Col md={7}>
                                <h5 className='renew-title'><b>External Wall Insulation</b></h5>
                                <p>External wall insulation is a home improvement technique that enhances energy efficiency and comfort. Here's how it works:</p>
                           
                                <p><b>Insulating Layer:</b> A layer of insulating material is applied to the external walls of your home. This material acts as a thermal barrier to prevent heat from escaping in cold weather and from entering in hot weather.</p>
                                <p><b>Protective Finish::</b>Over the insulation, a protective finish is added, which can be in the form of render (plaster), cladding, or other exterior treatments. This finish not only enhances the appearance of your home but also shields the insulation from weather and wear.</p>
                                <p><b>Energy Savings:</b>The insulation minimizes heat loss, keeping your home warmer in winter and cooler in summer. As a result, you reduce the energy needed for heating and cooling.</p>
                                <p><b>Comfort and Savings: </b>By enhancing your home's thermal performance, external wall insulation can make your living spaces more comfortable and lead to significant energy cost savings.</p>
                                <p>External wall insulation is an effective way to upgrade your home's energy efficiency while giving it a fresh, attractive look.</p>
                            </Col>
                        </Row>
                        <Row>
                            <h3 className='renew-title'>Internal Wall Insulation</h3>
                            <Col md={5} className='ren-sideimage'>
                                <img src={renewimage2} alt="roofinsulation"/>
                            </Col>
                            <Col md={7}>
                                <h5 className='renew-title'><b>Inter Wall Insulation</b></h5>
                                <p>Internal wall insulation is a method to enhance your home's energy efficiency and comfort. Here's how it works:</p>
                           
                                <p><b>Insulating Layer:</b> A layer of insulating material is applied to the external walls of your home. This material acts as a thermal barrier to prevent heat from escaping in cold weather and from entering in hot weather.</p>
                                <p><b>Wall Finish::</b>Over the insulation, a protective finish is added, which can be in the form of render (plaster), cladding, or other exterior treatments. This finish not only enhances the appearance of your home but also shields the insulation from weather and wear.</p>
                                <p><b>Improves Control:</b>The insulation minimizes heat loss, keeping your home warmer in winter and cooler in summer. As a result, you reduce the energy needed for heating and cooling.</p>
                                <p><b>Space Preservation:</b>By enhancing your home's thermal performance, external wall insulation can make your living spaces more comfortable and lead to significant energy cost savings.</p>
                                <p>Internal wall insulation is a practical way to upgrade your home's energy efficiency while preserving its external appearance.  Internal wall is a great option for properties where it is not possible to install external wall insulation, such as flats and properties in conservation areas.</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
        <Row className="justify-content-center">
            <Col md={12} className='renew-sub'>
                <Row className='justify-content-center'>
                    <Col md={9} className='ren-whole'>
                        <Row>
                            <h3 className='renew-title'>Cavity Wall Insulation</h3>
                            <Col md={5} className='ren-sideimage'>
                                <img src={renewimage3} alt="roofinsulation"/>
                            </Col>
                            <Col md={7}>
                                <h5 className='renew-title'><b>Cavity Wall Insulation</b></h5>
                                <p>Cavity wall insulation is a home improvement technique designed to make your home more energy-efficient. Here's how it works:</p>
                           
                                <p><b>Cavity Space Filling:</b> A layer of insulating material is applied to the external walls of your home. This material acts as a thermal barrier to prevent heat from escaping in cold weather and from entering in hot weather.</p>
                                <p><b>Thermal Barrier:</b>Over the insulation, a protective finish is added, which can be in the form of render (plaster), cladding, or other exterior treatments. This finish not only enhances the appearance of your home but also shields the insulation from weather and wear.</p>
                                <p><b>Energy Savings:</b>The insulation minimizes heat loss, keeping your home warmer in winter and cooler in summer. As a result, you reduce the energy needed for heating and cooling.</p>
                                <p><b>Quick and Non-disruptive: </b>By enhancing your home's thermal performance, external wall insulation can make your living spaces more comfortable and lead to significant energy cost savings.</p>
                                <p>Cavity wall insulation is a practical and effective way to enhance your home's energy efficiency, increase comfort, and reduce heating and cooling costs.</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    </div>
    );
};

export default Wallinsulation;