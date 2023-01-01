import React from 'react';
import './NavBar.css';
import SatyamPhoto from './../../assests/satyam-photo.png';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

const NavBar = () => {
  return (
    <BrowserRouter>
      <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary bg-light">
        <Link class="navbar-brand ms-4" to="#home" smooth>
          <img src={SatyamPhoto} className="my-photo" alt="satyam" />
          <span className="ms-3 brand-name">Satyam Pund</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ms-lg-auto mx-5">
            <li className="nav-item">
              <Link className="nav-link" to="#home" smooth>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#about" smooth>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#projects" smooth>
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#contact" smooth>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </BrowserRouter>
  );
};

export default NavBar;
