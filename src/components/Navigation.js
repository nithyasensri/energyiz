import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import '../App.css';
import logo from '../assets/IZ-Logo.svg'

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
                                <li>
                                    Services
                                    <ul className="dropdown-menu">
                                        <li><a href='/renewable'>Renewable Energy</a></li>
                                        <ul className='submenu'>
                                            <li><a href="/solarpv">SolarPv & Solar Batteries</a></li>
                                            <li><a href="/airsource">Air Source Heat Pumps</a></li>
                                        </ul>
                                        <li><a href='/insulation'>Insulation</a></li>
                                        <ul className='submenu'>
                                            <li><a href="/underfloor">Underfloor Insulation</a></li>
                                            <li><a href="/wallinsulation">Wall Insulation</a></li>
                                            <li><a href="/roofinsulation">Roof Insulation</a></li>
                                        </ul>
                                        <li><a href='/heating'>Heating And Other Energy Solutions
                                        </a></li>
                                        <ul className='submenu'>
                                            <li><a href="/boiler">Boiler & Heater Controls</a></li>
                                            <li><a href="/ventilation">Ventilation</a></li>
                                        </ul>
                                    </ul>
                                </li>
                                <li>
                                    <a href="/aboutus">Aboutus</a>
                                </li>
                                <li>
                                    <a href="/funding">Funding</a>
                                </li>
                                <li>
                                    <a href="/job">Jobs</a>
                                </li>
                                <li>
                                    <a href="/contact">Contactus</a>
                                </li>
                                <li>
                                    Click to call: <a href="tel:+1234567890"><b>+123 456 7890</b></a>
                                </li>
                            </ul>
                        </nav>
                    </Col>
                    <Col md={2} className='small-list'>
                        <li className='funding'>
                            <a href="/funform"> Get Funding</a>
                        </li>
                    </Col>
                </Row>
            </Col >
        </Row >
    );
};

export default Navigation;