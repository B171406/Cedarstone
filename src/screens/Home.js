import React from 'react'
import Contact_Home from '../screens/Contact_Home'
import About from '../screens/About'
import Hero from './Hero'
import ChatbotComponent from './Chatbot'
import { Helmet } from 'react-helmet'

export default function () {
  return (
    <div id="home" className='k'>
      <Helmet>
                <meta charSet="utf-8" />
                <title>Cedarstone Ltd: Empowering SME Success in Mauritius</title>
                <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div><Hero/></div>
      <div id="contact"><Contact_Home/></div>
      <div id="about" ><About/></div>
    </div>
  )
}
