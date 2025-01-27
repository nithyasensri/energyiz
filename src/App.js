import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Funding from './components/Funding';
import Job from './components/Job';
// import Contactus from './components/Contactus';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import Footer from './components/All-Component/Footer';
import RenewablePage from './components/All-Component/Service-Components/RenewablePage';
import Insulation from './components/All-Component/Service-Components/Insulation';
import Heating from './components/All-Component/Service-Components/Heating';
import Solarpv from './components/All-Component/Service-Components/Solarpv';
import Airsource from './components/All-Component/Service-Components/Airsource';
import Underinsulation from './components/All-Component/Service-Components/Underinsulation';
import Roofinsulation from './components/All-Component/Service-Components/Roofinsulation';
import Wallinsulation from './components/All-Component/Service-Components/Wallinsulation';
import Boiler from './components/All-Component/Service-Components/Boiler';
import Ventilation from './components/All-Component/Service-Components/Ventilation';
import Contactus from './components/All-Component/Contactus';
import Fundingform from './components/Fundingform';
function App() {
  return (
    <Container fluid style={{"padding":"0px"}}>
      <Row>
        <Col sm={12}>
          <Router>
            <div>
              <Navigation />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/renewable" element={<RenewablePage />} />
                <Route path="/solarpv" element={<Solarpv/>} />
                <Route path="/airsource" element={<Airsource/>} />
                
                <Route path="/insulation" element={<Insulation/>}/>
                <Route path="/underfloor" element={<Underinsulation/>}/>
                <Route path="/wallinsulation" element={<Wallinsulation/>}/>
                <Route path="/roofinsulation" element={<Roofinsulation/>}/>

                <Route path="/heating" element={<Heating/>}/>
                <Route path="/boiler" element={<Boiler/>}/>
                <Route path="/ventilation" element={<Ventilation/>}/>

                <Route path="/aboutus" element={<About />} />
                <Route path="/funding" element={<Funding />} />
                <Route path="/job" element={<Job />} />
                <Route path="/contact" element={<Contactus />} />
                <Route path="/funform" element={<Fundingform />} />
              </Routes>
            </div>
          </Router>
          <Footer/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
