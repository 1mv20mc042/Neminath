import React,{ useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  const [info, setInfo] = useState('');

  const handleClick = (message) => {
      setInfo(message);
    };
    const infoMessages = {
      'Personalised Itineraries': 'We provide tailored travel itineraries based on your preferences and interests.',
      'Affordable Prices': 'Our services are competitively priced to ensure you get the best value for your money.',
      'Customer Support': 'Our customer support team is available 24/7 to assist you with your needs.',
      'Best Deals Guaranteed': 'We offer the best deals on travel packages and services.',
      'Travel Management': 'Our travel management services ensure a hassle-free travel experience.',
      'Passenger Assistance': 'We provide assistance to passengers at every step of their journey.',
      'Consulting': 'Our consulting services help you plan and execute your travel plans efficiently.',
      'Marketing': 'We offer marketing services to promote your travel-related business.',
      'Visa': 'We assist with visa applications and processing for various destinations.'
    };
  
  return (
    <div className="home">
      <h1>START YOUR EXCITING <span>JOURNEY</span> WITH US</h1>
      <div className="image-container">
      <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/600x400" alt="Journey" />
      </div>
      <div className="services">
        <h2>WHY NEMINATH T C</h2>
        <div className="buttons-container">
        <Link to="/customer-support"><button>Customer Support</button></Link>
        <Link to="/best-deals-guaranteed"><button>Best Deals Guaranteed</button></Link>
      
      <Link to="/affordable-prices"><button>Affordable Prices</button></Link>
      
      
        </div>
        <h2>OUR SERVICES</h2>
        <div className="service-container">
        <Link to="/visa"><button>Visa</button></Link>
      <Link to="/travel-management"><button>Travel Management</button></Link>
      
      
      <Link to="/marketing"><button>Marketing</button></Link>
      
        </div>
        {info && <div className="info-box">{info}</div>}
      </div>
    </div>
  );
}

export default Home;



