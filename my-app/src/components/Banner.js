import React from 'react';
import Card from './Card';
import './Banner.css';

const Banner = ({ cards }) => {
  return (
    <div className="banner">
      {/* {cards.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          description={card.description}
          image={card.image}
        />
      ))} */}
    </div>
  );
};

export default Banner;
