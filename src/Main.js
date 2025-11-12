import './Main.css';
import './navbar.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home.js';
import Footer from './footer.js';
import About from './about.js';
import Services from './services.js';
import Resources from './resources.js';
import Contact from './contact.js';


function Main() {
  return (
    <div style={{overflowy:'hidden', maxwidth:'100vw'}}>
      <div className="background">
        <div className="page">
          <BrowserRouter>
            {/* Navigation */}
            <nav className="Navbar">
              <Link to="/" className="Navbar-Link">Home</Link>
              <Link to="/about" className="Navbar-Link">About</Link>
              <Link to="/services" className="Navbar-Link">Services</Link>
              <Link to="/resources" className="Navbar-Link">Resources For Engaged Couples</Link>
              <Link to="/contact" className="Navbar-Link">Contact</Link>
            </nav>

            {/* Routes */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Main;
