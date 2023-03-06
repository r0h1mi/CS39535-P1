import React from 'react';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import Gunter from '../components/images/gunterstealer.webp'
import Iceking from '../components/images/icekingfrozenhands.webp'
import Icemountain from '../components/images/icemountain.jpg'
import './IceKingdom.css';


const IceKingdom = () => {
  const cards = [
    {
      image: Icemountain,
      title: 'Mount Ice',
      description: 'Climb up Mount Ice for scenic views !'
    },
    {
      image: Iceking,
      title: 'Ice King',
      description: 'Defeat the Ice King!!!'
    },
    {
      image: Gunter,
      title: 'Gunter',
      description: 'Meet the cutest penguins of Ooo!!!'
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
