import React from 'react';
import Card from '../components/Card';
import './Nightosphere.css';
import Navbar from '../components/Navbar';

const Nightosphere = () => {
  const cards = [
    {
      image: 'https://via.placeholder.com/500x200',
      title: 'Hunson Abadeer',
      description: 'The lord of the Nightosphere'
    },
    {
      image: 'https://via.placeholder.com/500x200',
      title: 'Marceline',
      description: 'The vampire queen and Hunson Abadeer\'s daughter'
    },
    {
      image: 'https://via.placeholder.com/500x200',
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
