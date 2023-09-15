import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../screens/css/Contact.css'; // CSS file for styling
import img from '../components/assets/contact.png';
import {Helmet} from 'react-helmet'
import succ from '../components/assets/succ.png'

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    workEmail: '',
    bussinesname: '',
    mainChallenge: '',
    briefExplanation: '',
    improvementObjectives: '',
  });

  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    workEmail: '',
    mainChallenge: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Add email validation
    if (name === 'workEmail') {
      const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
      if (!emailRegex.test(value)) {
        setFormErrors({ ...formErrors, [name]: 'Enter a valid email address' });
      } else {
        setFormErrors({ ...formErrors, [name]: '' });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields here
    // Submit data if valid
  };

  function isFormValid() {
    // Implement form validation logic here and return true/false
    return (
      formData.firstName.trim() !== '' &&
      formData.lastName.trim() !== '' &&
      formData.workEmail.trim() !== '' &&
      formData.mainChallenge.trim() !== '' &&
      formErrors.workEmail === '' // Check if email error is empty
    );
  }

  return (
    <div className='bg-white'>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Unlock_solutions_with_us</title>
                <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <br />
      <br />
      <h1 style={{color:'black',textAlign:'center'}}>Unlocking solutions with us is the key to your success</h1>
      <img src={succ} style={{width:'15rem',margin:'0 auto',display: 'block'}}></img>
      <div className="form-container" style={{ backgroundColor: 'white', marginTop: '-10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
        <h2 style={{ fontSize: '40px', color: 'blue' }}>Contact Us</h2>
        <img src={img} style={{ width: '10rem', height: '7rem', margin: '0 230px', marginTop: '-75px' }}></img>
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="firstName" style={{ color: 'black' }}>
              First Name <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            {formErrors.firstName && (
              <span className="error">{formErrors.firstName}</span>
            )}
          </div>
          <div className="form-field">
            <label htmlFor="lastName" style={{ color: 'black' }}>
              Last Name <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
            {formErrors.lastName && (
              <span className="error">{formErrors.lastName}</span>
            )}
          </div>
          <div className="form-field">
            <label htmlFor="workEmail" style={{ color: 'black' }}>
              Email <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="text"
              id="workEmail"
              name="workEmail"
              value={formData.workEmail}
              onChange={handleInputChange}
            />
            {formErrors.workEmail && (
              <span className="error">{formErrors.workEmail}</span>
            )}
          </div>
          <div className="form-field">
            <label htmlFor="businessName" style={{ color: 'black' }}>
              Business Name  <span style={{ color: 'red' }}>*</span>
            </label>
            <input
              type="text"
              id="bussinesname"
              name="bussinesname"
              value={formData.bussinesname}
              onChange={handleInputChange}
            />
            {formErrors.firstName && (
              <span className="error">{formErrors.firstName}</span>
            )}
          </div>
          <div className="form-field">
            <label htmlFor="mainChallenge" style={{ color: 'black' }}>
              Main Operational Challenge <span style={{ color: 'red' }}>*</span>
            </label>
            <select
              id="mainChallenge"
              name="mainChallenge"
              value={formData.mainChallenge}
              onChange={handleInputChange}
            >
              <option value="">Select Challenge</option>
              <option value="Inventory Management">Inventory Management</option>
              <option value="Production Efficiency">Production Efficiency</option>
              <option value="Distribution Streamlining">
                Distribution Streamlining
              </option>
              <option value="Cost Control">Cost Control</option>
            </select>
            {formErrors.mainChallenge && (
              <span className="error">{formErrors.mainChallenge}</span>
            )}
          </div>
          <div className="form-field">
            <label htmlFor="briefExplanation" style={{ color: 'black' }}>Brief Explanation</label>
            <textarea
              id="briefExplanation"
              name="briefExplanation"
              value={formData.briefExplanation}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="form-field">
            <label htmlFor="improvementObjectives" style={{ color: 'black' }}>Improvement Objectives</label>
            <textarea
              id="improvementObjectives"
              name="improvementObjectives"
              value={formData.improvementObjectives}
              onChange={handleInputChange}
            ></textarea>
          </div>
          {/* <div className="form-field"> */}
            <label htmlFor="agreeTerms">
              <input
                type="checkbox"
                id="agreeTerms"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleInputChange}
                style={{width:'20px',color:'white'}}
              />
              <p style={{color:'black',fontWeight: 'normal'}}>I agree to the terms and conditions of cederstone,Inc.processing my data in accordance with the <a href="www.google.com" style={{color:'blue'}}>Privacy Policy</a></p>
            </label>
          {/* </div> */}
          <div className="form-field fs-5">
            <Link to="/submit"><button type="submit" disabled={!isFormValid()} style={{ backgroundColor: 'blue' }}>
              Submit
            </button>
            </Link>
          </div>
        </form>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Contact;
