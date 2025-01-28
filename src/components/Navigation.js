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
                    <div className='list-col'>
                      <Link className='menu-a men-a'>Services
                        <span className='arr-div'>
                          <svg viewBox="0 0 330 512" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"><path d="M305.913 197.085c0 2.266-1.133 4.815-2.833 6.514L171.087 335.593c-1.7 1.7-4.249 2.832-6.515 2.832s-4.815-1.133-6.515-2.832L26.064 203.599c-1.7-1.7-2.832-4.248-2.832-6.514s1.132-4.816 2.832-6.515l14.162-14.163c1.7-1.699 3.966-2.832 6.515-2.832 2.266 0 4.815 1.133 6.515 2.832l111.316 111.317 111.316-111.317c1.7-1.699 4.249-2.832 6.515-2.832s4.815 1.133 6.515 2.832l14.162 14.163c1.7 1.7 2.833 4.249 2.833 6.515z"></path></svg>
                          <div className="menu-down">
                            <Link to="/renewable" className='menu-b'>
                              <span className='menu-img'>
                                <img src={menu2} alt="menu1" />
                              </span>Renewable Energy</Link>
                            <div className='submenu'>
                              <Link to="/solarpv" className='menu-c'>SolarPv & Solar Batteries</Link>
                              <Link to="/airsource" className='menu-c'>Air Source Heat Pumps</Link>
                            </div>
                            <Link to="/insulation" className='menu-b'>
                              <span className='menu-img'>
                                <img src={menu1} alt="menu1" />
                              </span>Insulation</Link>
                            <div className='submenu'>
                              <Link to="/underfloor" className='menu-c'>Underfloor Insulation</Link>
                              <Link to="/wallinsulation" className='menu-c'>Wall Insulation</Link>
                              <Link to="/roofinsulation" className='menu-c'>Roof Insulation</Link>
                            </div>
                            <Link to="/heating" className='menu-b'>
                              <span className='menu-img'>
                                <img src={menu3} alt="menu1" />
                              </span>Heating And Other Energy Solutions</Link>
                            <div className='submenu'>
                              <Link to="/boiler" className='menu-c'>Boiler & Heater Controls</Link>
                              <Link to="/ventilation" className='menu-c'>Ventilation</Link>
                            </div>
                          </div>
                        </span>
                        <div className="menu-down">
                          <Link to="/renewable" className='menu-b'>
                            <span className='menu-img'>
                              <img src={menu2} alt="menu1" />
                            </span>Renewable Energy</Link>
                          <div className='submenu'>
                            <Link to="/solarpv" className='menu-c'>SolarPv & Solar Batteries</Link>
                            <Link to="/airsource" className='menu-c'>Air Source Heat Pumps</Link>
                          </div>
                          <Link to="/insulation" className='menu-b'>
                            <span className='menu-img'>
                              <img src={menu1} alt="menu1" />
                            </span>Insulation</Link>
                          <div className='submenu'>
                            <Link to="/underfloor" className='menu-c'>Underfloor Insulation</Link>
                            <Link to="/wallinsulation" className='menu-c'>Wall Insulation</Link>
                            <Link to="/roofinsulation" className='menu-c'>Roof Insulation</Link>
                          </div>
                          <Link to="/heating" className='menu-b'>
                            <span className='menu-img'>
                              <img src={menu3} alt="menu1" />
                            </span>Heating And Other Energy Solutions</Link>
                          <div className='submenu'>
                            <Link to="/boiler" className='menu-c'>Boiler & Heater Controls</Link>
                            <Link to="/ventilation" className='menu-c'>Ventilation</Link>
                          </div>
                        </div>
                      </Link>
                      <Link to="/aboutus" className='menu-a'>About us</Link>
                      <Link to="funding" className='menu-a'>Funding</Link>
                      <Link to="/job" className='menu-a'>Jobs</Link>
                      <Link to="/contact" className='menu-a'>Contactus</Link>
                      <Link to="/ventilation" className='menu-a'>Ventilation</Link>
                      <Link to="tel:+1234567890" className='menu-a'>Click to call:<b>+123 456 7890</b></Link>
                    </div>
                  </nav>
                </Col>
                <Col md={2} className='small-list1'>
                  <Link to="/funform" className=''>
                    <Button as="a" className="getfundbtn" variant="primary">
                      Get Funding
                    </Button>
                  </Link>
                </Col>
              </Row>
            </Col >
          </Row >
    );
};

export default Navigation;