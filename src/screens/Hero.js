import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import bgImage from '../components/assets/bg3.webp';
import '@fortawesome/fontawesome-free/css/all.css';

const styles = {
  backgroundColor: 'white',
  color: 'black',
  padding: '40px 20px',
  textAlign: 'center',
  opacity: '1',
};

const containerStyles = {
  maxWidth: '800px',
  margin: '0 auto',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
};

export default function Hero() {
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

  const fontSize = isMobile ? '24px' : '40px';
  const font = isMobile ? '16px' : '20px';

  const imageStyle = {
    width: '100%',
    maxWidth: '400px', // Adjust the max width as needed
    margin: isMobile ? '20px 0' : '0 20px', // Adjust margins for spacing
  };

  return (
    <div style={styles}>
      <div style={containerStyles}>
        <div style={{ flex: '1', minWidth: '250px' }}>
          <img src={bgImage} alt="Background" style={imageStyle} />
        </div>
        <div style={{ flex: '1' }}>
          <h1 className="card-title" style={{ fontSize }}>
            Navigating Operational Hurdles?
          </h1>
          <p className="card-text" style={{ fontSize, lineHeight: '1.4', marginBottom: '20px' }}>
            Every SME faces obstacles from inventory management to production,
            distribution, and cost control. Cedarstone understands, and we’re
            here to support you.
          </p>
          <Link to="/about" className="btn btn-primary" style={{ fontSize }}>
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
