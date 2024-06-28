import React from 'react';
import { useParams } from 'react-router-dom';

const promotionDetails = {
  'promo-1': {
    title: 'Get up to Rs.5,000 off on Domestic Flights!',
    description: 'Use Coupon Code: CTFLY',
    content: 'Enjoy up to Rs. 5,000 off on domestic flights. Use the coupon code CTFLY at checkout. Hurry, offer expires in 3 days 6 hours!',
  },
  'promo-2': {
    title: 'New Flight Routes by Virgin Atlantic',
    description: 'Daily flights to London are about to depart with Virgin Atlantic',
    content: 'Virgin Atlantic is launching new daily flights to London. Experience comfort and luxury on board. Book your tickets now!',
  },
  'promo-3': {
    title: 'Fly to Doha 4x weekly direct from Mumbai with Vistara',
    description: 'Enjoy direct flights from Mumbai to Doha with Return starting from Rs. 30599 on',
    content: 'Vistara offers direct flights from Mumbai to Doha 4 times a week. Book your return tickets starting from Rs. 30599.',
  },
  'promo-4': {
    title: 'Air India launches non stop flights between Delhi to Phuket!',
    description: 'Direct flights from Delhi to Phuket!',
    content: 'Air India has launched non-stop flights from Delhi to Phuket. Explore the beauty of Phuket with convenient flight options.',
  },
  'promo-5':{
    title:'Akasa launches daily flights from Chennai & Bengaluru to Port Blair',
    description: 'New Flights Launched!',
  }
};

const PromotionDetail = () => {
  const { id } = useParams();
  const promotion = promotionDetails[id];

  if (!promotion) {
    return <div>Promotion not found</div>;
  }

  return (
    <div className="promotion-detail">
      <h2>{promotion.title}</h2>
      <p>{promotion.description}</p>
      <p>{promotion.content}</p>
    </div>
  );
};

export default PromotionDetail;