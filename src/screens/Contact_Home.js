import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import img from '../components/assets/con.jpg.png';
import img1 from '../components/assets/call.png';
import '../screens/css/Contact_Home.css';

export default function Contact_Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Define font sizes based on screen size
  const titleFontSize = isMobile ? '24px' : '36px';
  const textFontSize = isMobile ? '16px' : '18px';
  const buttonFontSize = isMobile ? '16px' : '18px';

  return (
    <div className="contact-home-container">
      <div className="contact-card">
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <h1 className="card-title" style={{ margin: '0px 50px', fontSize: titleFontSize }}>
            Unlock Solutions with Us
          </h1>
          <img
            src={img}
            style={{ width: '10rem', margin: '0px 5px' }}
            alt="About Us Image"
          />
        </div>
        <div className="card-body">
          <p className="card-text" style={{ fontSize: textFontSize }}>
            We invite you to share your primary operational challenges. Whether it's
            optimizing inventory, boosting production, streamlining distribution,
            or mastering cost control, we're eager to listen.
          </p>
          <Link to="/contact" className="btn btn-primary explore-button bg-warning" style={{ margin: '5px 10px', fontSize: buttonFontSize }}>
          Unlock <img src={img1} style={{width:'2rem',margin:'0px 10px'}}></img>
          </Link>
        </div>
      </div>
    </div>
  );
}
