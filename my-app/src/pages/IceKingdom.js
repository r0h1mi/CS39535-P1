import React from 'react';
import Card from '../components/Card';
import './IceKingdom.css';
import Navbar from '../components/Navbar';
const IceKingdom = () => {
  const cards = [
    {
      image: 'https://via.placeholder.com/300x200',
      title: 'Finn',
      description: 'The hero of the Ice Kingdom'
    },
    {
      image: 'https://via.placeholder.com/300x200',
      title: 'Jake',
      description: 'Finn\'s best friend and sidekick'
    },
    {
      image: 'https://via.placeholder.com/300x200',
      title: 'Ice King',
      description: 'The main antagonist of the Ice Kingdom'
    }
  ];

  return (
      <>
    <Navbar></Navbar>
    <div className="ice-page-container">
      <h1>Ice Kingdom</h1>
      <div className="cards-container">
        {cards.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>

    </>
  );
};

export default IceKingdom;
