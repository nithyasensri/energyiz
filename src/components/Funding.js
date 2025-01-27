import React from 'react';
import { Row, Col } from 'react-bootstrap';
import renewimage from '../assets/home-grey-section.svg'


const Funding = () => {
    return (
        <div className='renew' style={{ "padding": "0px" }}>
            <div className='renewbg'>
                <div>
                    <h2>Grants & Fundings</h2>
                </div>
            </div>
            <Row className="justify-content-center">
                <Col md={12} className='renew-sub'>
                    <Row className='justify-content-center'>
                        <Col md={9} className='ren-whole'>
                            <Row>
                                <h3 className='renew-title'>Grants & Fundings</h3>
                                <Col md={5} className='ren-sideimage'>
                                    <img src={renewimage} alt="roofinsulation" />
                                </Col>
                                <Col md={7}>
                                    <h5 className='renew-title'><b>Fundings</b></h5>
                                    <p>
                                        At IZ Energy, we understand that making your home more energy-efficient can come with a significant price tag. We offer support in the form of grants and funding to help you make these improvements without straining your budget. It's important to note that these grants are available to those who meet specific eligibility criteria.
                                    </p>
                                </Col>
                            </Row>
                            <Row>  <Col md={12}>
                                <h2>ECO 4 Grants</h2>
                                <p>The Energy Company Obligation (ECO) is a British government energy efficiency scheme to help reduce carbon emissions and tackle fuel poverty.</p>
                                <p>It is a grant scheme designed for householders to reduce bills, keep warm and reduce our impact on the environment.  Currently our customers can apply for the ECO grant, a grant that helps low-income and vulnerable households install energy efficient solution to their homes.</p>
                                <p>We can help you through this journey from assessing your eligibility for ECO funding through to installation.</p>
                            </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default Funding;