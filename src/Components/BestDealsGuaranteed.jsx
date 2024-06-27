import React from 'react';
import './GiftPage.css';

const BestDealsGuaranteed = () => {
    
return (
    <div className="gift-page-container">
      <div className="banner">
        <img src="https://promos.makemytrip.com/appfest/2x/banner_corporate_gc.png" alt="Corporate Gifting" className="corporate-gifting" />
        <div className="banner-content">
          <h1>Christmas Gift</h1>
          <div className="wedding-gift-card">
            <img src="https://promos.makemytrip.com/appfest/2x/banner_corporate_gc.png" alt="Wedding Gift Card" />
            
          </div>
          <div className="options">
            <button>Add Gift Card</button>
            <button>My Gift Card</button>
            <button>Check Balance</button>
            <button>How To Use</button>
          </div>
        </div>
      </div>
      <div className="gift-cards">
        <img src="gift-card1.jpg" alt="Gift Card 1" />
        <img src="gift-card2.jpg" alt="Gift Card 2" />
      </div>
    </div>
  );
};


  

export default BestDealsGuaranteed;