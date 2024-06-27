import React from 'react';
import './visa.css';

const Visa = () => {
  return (
  <div className="container">
  <h1>Meet your trusted travel partner</h1>
  <p>Whether you’re planning a trip to a remote mountain or an all-inclusive resort, Visa has benefits you don’t want to miss.</p>
  <div className="card-container">
    <div className="card">
      <img src="https://www.visa.co.in/dam/VCOM/global/travel-with-visa/images/confident-traveler-800x450.jpg" alt="Less queue time" />
      <h2>Less queue time, more you time</h2>
      <p>Next time you travel, take Visa and skip the currency exchange line.</p>
    </div>
    <div className="card">
      <img src="https://www.visa.co.in/dam/VCOM/global/travel-with-visa/images/relaxed-traveler-800x450.jpg" alt="Leave your worries" />
      <h2>Leave your worries (and your cash) behind</h2>
      <p>When you travel, you can’t lose cash if you don’t carry cash.</p>
    </div>
    <div className="card">
      <img src="https://www.visa.co.in/dam/VCOM/global/travel-with-visa/images/off-track-traveler-400x225.jpg" alt="Welcomed around the world" />
      <h2>Welcomed around the world</h2>
      <p>Wherever you find yourself, find Visa.</p>
      <a href="https://www.visa.com" target="_blank" rel="noopener noreferrer">Pay with Visa around the globe</a>
    </div>
    <div className="card">
      <img src="https://www.visa.co.in/dam/VCOM/regional/ap/india/global-elements/images/scotland-promo-1600x900.jpg" alt="Trip to Scotland" />
      <h2>Pay with Visa and stand a chance to win an all-expense trip to Scotland</h2>
      <a href="https://www.visa.com" target="_blank" rel="noopener noreferrer">Learn more</a>
    </div>
  </div>
</div>
);
}




export default Visa;