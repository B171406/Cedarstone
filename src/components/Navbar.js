import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import img from './assets/logo21.png';
import img1 from '../components/assets/chat.png';

export default function Navbar() {
  const [collapseOpen, setCollapseOpen] = useState(false);

  const toggleCollapse = () => {
    setCollapseOpen(!collapseOpen);
  };

  const closeCollapse = () => {
    setCollapseOpen(false);
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-success"
        style={{
          boxShadow:
            '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        }}
      >
        <div className="container">
          <Link
            to="top"
            spy={true}
            smooth={true}
            duration={500}
            className="navbar-brand fs-1 fst-bold"
            style={{ color: 'black' }}
          >
            <RouterLink to="/">
              <img
                src={img}
                alt="Logo"
                className="logo-img"
                style={{
                  width: '200px',
                  height: '40px',
                  marginTop: '-10px',
                }}
              />
            </RouterLink>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse${
              collapseOpen ? ' show' : ''
            }`}
            id="navbarNav"
          >
            <ul className="navbar-nav mx-auto"> {/* Use mx-auto to center-align */}
              <li className="nav-item fs-5 x">
                <RouterLink
                  to="/"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="nav-link active text-black"
                  style={{ fontFamily: 'bold', cursor: 'pointer',margin:'0px 10px' }}
                  onClick={closeCollapse}
                >
                  Home
                </RouterLink>
              </li>
              <li className="nav-item fs-5">
                <RouterLink
                  to="/Services_2"
                  spy={true}
                  smooth={true}
                  duration={100}
                  className="nav-link active text-black"
                  style={{ fontFamily: 'bold', cursor: 'pointer',margin:'0px 10px'  }}
                  onClick={closeCollapse}
                >
                  Services
                </RouterLink>
              </li>
              <li className="nav-item fs-5">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={100}
                  className="nav-link active text-black"
                  style={{ fontFamily: 'bold', cursor: 'pointer',margin:'0px 10px'  }}
                  onClick={closeCollapse}
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item fs-5">
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={100}
                  className="nav-link active text-black"
                  style={{ fontFamily: 'bold', cursor: 'pointer',margin:'0px 10px'  }}
                  onClick={closeCollapse}
                >
                  About
                </Link>
              </li>
            </ul>
            <RouterLink to="/chatbot">
              <img
                src={img1}
                style={{ width: '3rem', cursor: 'pointer' }}
                alt="Chatbot"
              />
            </RouterLink>
          </div>
        </div>
      </nav>
    </div>
  );
}
