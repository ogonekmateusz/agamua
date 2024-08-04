import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeNavbar = () => {
    setNavbarOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-sm  " >
      <div className="navbar-line"></div>
      <div className="container">
        {/* <Link to="/" className="navbar-brand">agamua.</Link> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample04"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navbarsExample04" className={`collapse navbar-collapse ${navbarOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto d-flex">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={closeNavbar}>Home</Link>
            </li>
            <li className="nav-item">
            <HashLink className="nav-link" to="#AboutMe" onClick={closeNavbar}>About</HashLink>            </li>
            <li className="nav-item">
              {/* <Link className="nav-link" to="/" onClick={closeNavbar}>Services</Link> */}
              <HashLink className='nav-link' to="#Services" onClick={closeNavbar}>Services</HashLink>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/works" onClick={closeNavbar}>Works</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={closeNavbar}>Contact</Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;