import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import bgImage from '../components/assets/bg3.webp';

import '@fortawesome/fontawesome-free/css/all.css';



const styles = {
  // backgroundImage: `url(${bgImage})`,
  backgroundColor: 'white',
  color: 'white',
  padding: '80px 0',
  textalign: 'center',
  opacity: '1',
};

const k = {
  maxwidth: '800px',
  margin: '0 auto',
};
export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the screen width is less than or equal to 767 pixels
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Initial check on component mount
    handleResize();

    // Cleanup by removing event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  // Define font size based on screen size
  const fontSize = isMobile ? '30px' : '50px';
  const font = isMobile ? '20px' : '25px';

  const imageStyle = {
    display: isMobile ? 'block' : 'inline', // Display the image as block in mobile view
    width: isMobile ? '80%' : '30rem', // Set image width to 100% in mobile view
    margin: isMobile ? '10px auto' : '0px', // Center image horizontally in mobile view
    float: isMobile ? 'none' : 'right', // Float the image to the right in desktop view
    marginTop: isMobile ? '0' : '-200px', // Add margin to the top in desktop view
    marginRight: isMobile ? '0px' : '20px',
    marginLeft: isMobile ? '55px' : '0px',
  };

  return (
    <div style={styles}>
      <br />
      <div style={k}>
        <h1 className="card-title" style={{ color: 'black', margin: '0px 61px', fontSize: fontSize }}>
          Navigating Operational Hurdles?
        </h1>
        <br />
        <p className="card-text" style={{ color: 'black', margin: '10px 61px', fontSize: font }}>
          Every SME faces obstacles from inventory managementto production,<br/>  distribution, and cost control. Cedarstone
          understands,  and we’re<br/> here to support you.
        </p>
        <Link to="/about" className="btn btn-primary" style={{ color: 'black', margin: '10px 61px' }}>
          Learn More
        </Link>
        <img src={bgImage} alt="Background" style={imageStyle} />
      </div>
    </div>
  );
}
