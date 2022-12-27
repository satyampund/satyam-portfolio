import React from 'react';
import './NavBar.css';
import SatyamPhoto from './../../assests/satyam-photo.png';

const NavBar = () => {
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary bg-light">
        <a class="navbar-brand ms-4" href="#d">
          <img src={SatyamPhoto} className="my-photo" alt="satyam" />
          <span className="ms-3 brand-name">Satyam Pund</span>
        </a>
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
              <a className="nav-link" href="#dfdf">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#dgd">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Pojrct">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#dgd">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
