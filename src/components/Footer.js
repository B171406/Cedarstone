import React from 'react';
import {Link} from 'react-scroll'
import { MDBFooter, MDBContainer, MDBBtn } from 'mdb-react-ui-kit';
import { FaFacebook, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <MDBFooter className='bg-green text-center '>
      <MDBContainer className='p-4 pb-0'>
      <ul className="nav justify-content-center border-bottom pb-3 mb-3" >
          <li className="nav-item " style={{ fontFamily: 'bold', cursor: 'pointer' }}><Link to="home" className="nav-link px-2 text-muted">Home</Link></li>
          <li className="nav-item" style={{ fontFamily: 'bold', cursor: 'pointer' }}><Link to="contact" className="nav-link px-2 text-muted">Contact</Link></li>
          <li className="nav-item" style={{ fontFamily: 'bold', cursor: 'pointer' }}><Link to="/" className="nav-link px-2 text-muted">Services</Link></li>
          <li className="nav-item" style={{ fontFamily: 'bold', cursor: 'pointer' }}><Link to="/" className="nav-link px-2 text-muted">FAQs</Link></li>
          <li className="nav-item" style={{ fontFamily: 'bold', cursor: 'pointer' }}><Link to="about" className="nav-link px-2 text-muted">About</Link></li>
        </ul>
        <div className='text-center p-3' >
        © 2020 Copyright,Inc:
      </div>
      </MDBContainer>
      <section >
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <FaFacebook />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <FaTwitter />
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <FaInstagram />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <FaLinkedin />
          </MDBBtn>
        </section>
    </MDBFooter>
  );
}
