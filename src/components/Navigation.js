import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import '../App.css';
import logo from '../assets/IZ-Logo.svg'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <Row className="justify-content-center top-nav">
            <Col sm={12} md={11} className="text-center">
                <Row>
                    <Col sm={12} md={3} className='logo'>
                        <a href="/">
                            <img src={logo} alt="logo" />
                        </a>
                    </Col>
                    <Col sm={12} md={7}>
                        <nav className='menu'>
                            <ul className='list-col'>
                                <Link className=''>Renewable Energy</Link>
                                <ul className="dropdown-menu">
                                    <Link to="/renewable" className=''>Renewable Energy</Link>
                                    <ul className='submenu'>
                                        <Link to="/solarpv" className=''>SolarPv & Solar Batteries</Link>
                                        <Link to="/airsource" className=''>Air Source Heat Pumps</Link>
                                    </ul>
                                    <Link to="/insulation" className=''>Insulation</Link>
                                    <ul className='submenu'>
                                        <Link to="/underfloor" className=''>Underfloor Insulation</Link>
                                        <Link to="/wallinsulation" className=''>Wall Insulation</Link>
                                        <Link to="/roofinsulation" className=''>Roof Insulation</Link>
                                    </ul>
                                    <Link to="/heating" className=''>Heating And Other Energy Solutions</Link>
                                    <ul className='submenu'>
                                        <Link to="/boiler" className=''>Boiler & Heater Controls</Link>
                                        <Link to="/ventilation" className=''>Ventilation</Link>
                                    </ul>
                                </ul>
                                <Link to="/aboutus" className=''>Aboutus</Link>
                                <Link to="funding" className=''>Funding</Link>
                                <Link to="/job" className=''>Jobs</Link>
                                <Link to="/contact" className=''>Contactus</Link>
                                <Link to="/ventilation" className=''>Ventilation</Link>
                                <Link to="tel:+1234567890" className=''>Click to call:<b>+123 456 7890</b></Link>
                            </ul>
                        </nav>
                    </Col>
                    <Col md={2} className='small-list'>
                        <Link to="/funform" className='funding'>Get Funding</Link>
                    </Col>
                </Row>
            </Col >
        </Row >
    );
};

export default Navigation;