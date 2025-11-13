import './Main.css';
import './desktop/navbar.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './desktop/home.js';
import Footer from './desktop/footer.js';
import About from './desktop/about.js';
import Services from './desktop/services.js';
import Resources from './desktop/resources.js';
import Contact from './desktop/contact.js';

import FooterMobile from './mobile/footer-mobile.js'
import HomeMobile from './mobile/home-mobile.js'


function Main() {
  const isDesktop = window.innerWidth > 500
  const navbarClass = isDesktop ? "Navbar" : "Navbar-mobile"
  return (
    <div style={{overflowy:'hidden', maxwidth:'100vw'}}>
      <div className="background">
        <div className="page">
          <BrowserRouter>
            {/* Navigation */}
            <nav className={navbarClass}>
              <Link to="/" className="Navbar-Link">Home</Link>
              <Link to="/about" className="Navbar-Link">About</Link>
              <Link to="/services" className="Navbar-Link">Services</Link>
              <Link to="/resources" className="Navbar-Link">Resources For Engaged Couples</Link>
              <Link to="/contact" className="Navbar-Link">Contact</Link>
            </nav>

            {/* Routes */}
            <Routes>
              <Route path="/" element={isDesktop? <Home /> : <HomeMobile/>} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
      {isDesktop? <Footer /> : <FooterMobile />}
    </div>
  );
}

export default Main;
