import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <h1>Get started your exciting <span>journey</span> with us.</h1>
      <div className="image-container">
      <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/600x400" alt="Journey" />
      </div>
      <div className="services">
        <h2>Why Neminath TSS</h2>
        <div className="services-list">
          <div className="service-item">Personalized Itineraries</div>
          <div className="service-item">Affordable Prices</div>
          <div className="service-item">Customer Support</div>
          <div className="service-item">Best Deals Guaranteed</div>
        </div>
        <h2>Our Servises</h2>
        <div className="service-list">
            <div className="service-item">Travel Management</div>
            <div className="service-item">Passenger Assistance</div>
            <div className="service-item">consulting</div>
            <div className="service-item">Marketing</div>
        </div>
      </div>
    </div>
  );
}

export default Home;



