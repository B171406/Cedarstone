import React, { useState, useEffect } from 'react';
import img from '../components/assets/about-us.jpg';
import img1 from '../components/assets/call.png';
import { Link } from 'react-router-dom';

function useIsMobile() {
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

  return isMobile;
}

export default function About() {
  const isMobile = useIsMobile();

  const fontSize = isMobile ? '25px' : '55px';
  const f1 = isMobile ? '22px' : '30px';
  const f2 = isMobile ? '14px' : '18px';

  const cardStyle = {
    width: isMobile ? '100%' : '70rem',
    margin: '10px auto', // Center the card horizontally
    backgroundColor: 'white',
    boxShadow:
      '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    padding:'20px 20px',
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: '20px',
  };

  const innerContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: '20px',
  };
  return (
    <div style={containerStyle}>
      <div className="card bg-white" style={cardStyle}>
        <br />
        <div
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'center',
          }}
        >
          <h1
            style={{
              color: 'black',
              fontFamily: 'Bold',
              margin: '0px 100px',
              fontSize: fontSize,
            }}
          >
            About Us
          </h1>
          <img
            src={img}
            style={{ width: '5rem', marginLeft: '-10px' }}
            alt="About Us Image"
          />
        </div>
        <br />
        <div style={innerContainerStyle}>
          <div className="card bg-info" style={cardStyle}>
            <div className="card-body">
              <h1 className="card-title" style={{ color: 'black', fontSize: f1, marginTop: '-17px' }}>Why Choose Cedarstone?</h1>
              <p className="card-text" style={{ color: 'black', fontSize: f2 }}>
                • Complimentary Expert Advice
                <br />• Committed to Mauritius’s SMEs, we provide free initial guidance and
                recommendations. Our expertise becomes your advantage.
              </p>
              <h1 className="card-title" style={{ color: 'black', fontSize: f1 }}>Transforming Challenges into Opportunities</h1>
              <p className="card-text" style={{ color: 'black', fontSize: f2 }}>
                Our aim? Convert your operational hurdles into avenues of growth. Today’s
                conversation could be tomorrow’s triumph.
              </p>
            </div>
          </div>
        </div>
        <div style={innerContainerStyle}>
          <div className="card bg-info" style={cardStyle}>
            <div className="card-body">
              <h1 className="card-title" style={{ color: 'black', fontSize: f1, marginTop: '-17px' }}>A Partner for Progress</h1>
              <p className="card-text" style={{ color: 'black', fontSize: f2 }}>
                While we offer free initial support, our goal is lasting partnerships. When
                you’re prepared for advancement, we’re here as your guiding force.
              </p>
              <h1 className="card-title" style={{ color: 'black', fontSize: f1 }}>Take the First Leap</h1>
              <p className="card-text" style={{ color: 'black', fontSize: f2 }}>
                Great transformations begin with small steps. Share your challenges today,
                paving the path to a more efficient tomorrow.
                  <br/>
              </p>
            </div>
          </div>
        </div>
        <br />
        <Link to="/contact" className="btn btn-primary explore-button bg-success" style={{ margin: '10px 50px',width:'15rem'}}>
        Share Your Challenges<img src={img1} style={{width:'2rem'}}></img>
          </Link>
        <br />
      </div>
    </div>
  );
}



