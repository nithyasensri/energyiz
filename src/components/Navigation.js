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
                        <Link to="/" className=''>
                            <img src={logo} alt="logo" />
                        </Link>
                    </Col>
                    <Col sm={12} md={7}>
                        <nav className='menu'>
                            <ul className='list-col'>
                                <Link className='menu-a men-a'>Services</Link>
                                <ul className="dropdown-menu">
                                    <Link to="/renewable" className='menu-b'>Renewable Energy</Link>
                                    <ul className='submenu'>
                                        <Link to="/solarpv" className='menu-c'>SolarPv & Solar Batteries</Link>
                                        <Link to="/airsource" className='menu-c'>Air Source Heat Pumps</Link>
                                    </ul>
                                    <Link to="/insulation" className='menu-b'>Insulation</Link>
                                    <ul className='submenu'>
                                        <Link to="/underfloor" className='menu-c'>Underfloor Insulation</Link>
                                        <Link to="/wallinsulation" className='menu-c'>Wall Insulation</Link>
                                        <Link to="/roofinsulation" className='menu-c'>Roof Insulation</Link>
                                    </ul>
                                    <Link to="/heating" className='menu-a'>Heating And Other Energy Solutions</Link>
                                    <ul className='submenu'>
                                        <Link to="/boiler" className='menu-b'>Boiler & Heater Controls</Link>
                                        <Link to="/ventilation" className='menu-b'>Ventilation</Link>
                                    </ul>
                                </ul>
                                <Link to="/aboutus" className='menu-a'>Aboutus</Link>
                                <Link to="funding" className='menu-a'>Funding</Link>
                                <Link to="/job" className='menu-a'>Jobs</Link>
                                <Link to="/contact" className='menu-a'>Contactus</Link>
                                <Link to="/ventilation" className='menu-a'>Ventilation</Link>
                                <Link to="tel:+1234567890" className='menu-a'>Click to call:<b>+123 456 7890</b></Link>
                            </ul>
                        </nav>
                    </Col>
                    <Col md={2} className='small-list'>
                        <Link to="/funform" className='funding men-d'>Get Funding</Link>
                    </Col>
                </Row>
            </Col >
        </Row >
    );
};

export default Navigation;