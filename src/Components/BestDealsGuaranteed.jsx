import React from 'react';
import './GiftPage.css';
import { Link } from 'react-router-dom';
const promotions = [
  {
    id: 'promo-1',
    image: 'https://www.cleartrip.com/offers/sites/default/files/styles/deal-image/public/ctfly.png?itok=nYKncein',
    title: 'Get up to Rs.5,000 off on Domestic Flights!',
    description: 'Use Coupon Code : CTFLY',
    buttonText: 'Know More',
    
  },
  {
    id: 'promo-2',
    image: 'https://www.cleartrip.com/offers/sites/default/files/styles/deal-image/public/virgin_atlantic_1.png?itok=yPD6F9_a',
    title: 'New Flight Routes by Virgin Atlantic',
    description: 'Daily flights to London are about to depart with Virgin Atlantic',
    buttonText: 'Know More'
  },
  {
    id: 'promo-3',
    image: 'https://www.cleartrip.com/offers/sites/default/files/styles/deal-image/public/vistara_15.png?itok=X46F-vwx',
    title: 'Fly to Doha 4x weekly direct from Mumbai with Vistara',
    description: 'Enjoy direct flights from Mumbai to Doha with Return starting from Rs. 30599 on',
    buttonText: 'Know More'
  },
  {
    id: 'promo-4',
    image: 'https://www.cleartrip.com/offers/sites/default/files/styles/deal-image/public/op_airindia_1_2.jpg?itok=JYhW9d_z',
    title: 'Air India launches non stop flights between Delhi to Phuket!',
    description: 'Direct flights from Delhi to Phuket!',
    buttonText: 'Know More'
  }
];

const BestDealsGuaranteed = () => (
    
  <div className="promotions">
  {promotions.map((promo) => (
    <div key={promo.id} className="promo-card">
      <img src={promo.image} alt={promo.title} className="promo-image" />
      <div className="promo-content">
        <h3>{promo.title}</h3>
        <p>{promo.description}</p>
        <Link to={`/promotions/${promo.id}`} className="promo-button">{promo.buttonText}</Link>
        {promo.footer && <p className="promo-footer">{promo.footer}</p>}
      </div>
    </div>
  ))}
</div>
);

  

export default BestDealsGuaranteed;