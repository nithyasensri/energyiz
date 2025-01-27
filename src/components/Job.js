import React from 'react';
import { Row, Col } from 'react-bootstrap';



const Job = () => {
    return (
        <div className='renew' style={{ "padding": "0px" }}>
            <div className='renewbg'>
                <div>
                    <h2>Jobs</h2>
                </div>
            </div>
            <Row className="justify-content-center">
                <Col md={12} className='renew-sub'>
                    <Row className='justify-content-center'>
                        <Col md={9} className='ren-whole'>
                            <Row className='justify-content-center'>
                                <h3 className='renew-title'>Jobs</h3>
                                <Col md={10}>
                                    <p>
                                        We are recruiting for some very exciting role within our organisation and would love to hear from you.  IZ Energy is rapidly expanding and we are on the lookout for dynamic professions to join us on our journey.
                                    </p>
                                    <p>
                                        If you are passionate about making a mark in the retrofit industry and thrive in a fast-paced, collaborative environment, then we want to hear from you.
                                    </p>

                                    <h5 className='renew-title'><b>Why join IZ Energy?</b></h5>
                                    <p>
                                        A track record of success with multiple contract wins
                                    </p>
                                    <p>
                                        A Opportunity to work on diverse and challenging projects
                                    </p>
                                    <p>
                                        Competitive compensation and benefits package
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default Job;