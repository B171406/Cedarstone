import React, { useState, useEffect } from 'react';
import ChatBot from 'react-simple-chatbot';
import {Helmet} from 'react-helmet'

function ChatbotComponent() {
  const [steps, setSteps] = useState([
    {
      id: '1',
      message: 'Hello!',
      trigger: '2',
    },
    {
      id: '2',
      message: 'Enter your name',
      trigger: '3',
    },
    {
      id: '3',
      user: true,
      trigger: '4',
    },
    {
      id: '4',
      message: 'Hi {previousValue}! How can I assist you',
      trigger: '5',
    },
    {
      id: '5',
      user: true,
      trigger: '6',
    },
    {
      id: '6',
      message: 'I received your message: "{previousValue}" My team will assist you as soon as possible',
      trigger: '7',
    },
    {
      id: '7',
      user: true,
      trigger: '8',
    },
    {
      id: '8',
      message: 'My team will assist you as soon as possible',
      trigger: '9',
    },
    {
      id: '9',
      message: 'Thank You!',
      end: true,
    },
  ]);
  
  const [chatbotWidth, setChatbotWidth] = useState('100%'); // Initial width

  useEffect(() => {
    // Update chatbot width based on screen size
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 768) {
        // Set a fixed width for larger screens
        setChatbotWidth('400px');
      } else {
        // Use a percentage-based width for smaller screens
        setChatbotWidth('80%');
      }
    };

    // Initial call to set the chatbot width
    handleResize();

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="bg-white">
      <Helmet>
                <meta charSet="utf-8" />
                <title> chatbot for instant visitor</title>
                <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="chatbot-container" style={{ margin: '0 auto', maxWidth: chatbotWidth }}>
        <br />
        <br />
        <ChatBot
          steps={steps}
          handleEnd={() => {
            // You can perform any action here when the chat ends
          }}
        />
        <br />
        <br />
      </div>
    </div>
  );
}

export default ChatbotComponent;
