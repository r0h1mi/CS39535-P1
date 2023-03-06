import React from 'react';
import Card from '../components/Card';
import './Homepage.css';
import Navbar from '../components/Navbar';
const Homepage = () => {

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
      title: 'TreeHouse',
      description: 'The main antagonist of the Ice Kingdom'
    }
  ];

  return (
      <>
    <Navbar></Navbar>
    <div className="home-page-container">
      <h1>Welcome to Adventure Time </h1>
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

export default Homepage;
