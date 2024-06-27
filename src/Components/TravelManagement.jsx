import React from 'react';
import './managment.css';


const TravelManagement = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="image-section">
          <img src="https://mailmktg.makemytrip.com/mybusiness/images/CTM-2.jpg" alt="Corporate Travel Management" />
        </div>
        <div className="text-section">
          <h1>Corporate Travel Management: An Ultimate Guide for Business Travel</h1>
          <p>Tackle every business travel challenge with this comprehensive handbook!</p>
          <button className="get-started">GET STARTED</button>
          <div className="table-of-contents">
            <h2>Table of Contents:</h2>
            <ol>
              <li><a href="#section1">What is CTM - Corporate Travel Management?</a></li>
              <li><a href="#section2">Business Travel Challenges</a></li>
              <li><a href="#section3">Why is Corporate Travel Management Important?</a></li>
              <li><a href="#section4">Corporate Travel Management Process</a></li>
              <li><a href="#section5">The Role of Corporate Travel Managers</a></li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}


export default TravelManagement;