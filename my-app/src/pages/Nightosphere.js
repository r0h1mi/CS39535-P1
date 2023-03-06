import React from 'react';
import Card from '../components/Card';
import './Nightosphere.css';
import Marcy from '../components/images/marcelineguitar2.jpg';
import BananaGuards from '../components/images/bananaguards.png';
import Hunson from '../components/images/HunsonEating.png';
import NightosphereParty from '../components/images/nightosphereparty.webp'
import Navbar from '../components/Navbar';

const Nightosphere = () => {
  const cards = [
    {
      image: Hunson,
      title: 'Hunson Abadeer',
      description: 'Enjoy eating snacks with Hunson Abadeer, the Demon King !!!'
    },
    {
      image: Marcy,
      title: 'Marceline',
      description: 'The vampire queen and Hunson Abadeer\'s daughter'
    },
    {
      image: NightosphereParty,
      title: 'Finn and Jake',
      description: 'The heroes of Ooo who venture into the Nightosphere'
    }
  ];

  return (
      <>
      <Navbar></Navbar>
    <div className="night-page-container">
      <h1>Nightosphere</h1>
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

export default Nightosphere;
