import React from 'react';
import Card from '../components/Card';
import './Homepage.css';
import Navbar from '../components/Navbar';
const Homepage = () => {

  const cards = [
    {
      image: 'https://qph.cf2.quoracdn.net/main-qimg-df6f63f7251c7d92f1a004eaa7fe003b',
      title: 'Finn',
      description: 'The hero of the Ice Kingdom'
    },
    {
      image: 'https://i.pinimg.com/originals/1a/27/ea/1a27ea7b0e95a1db6a6f4d8da29a82e0.png',
      title: 'Jake',
      description: 'Finn\'s best friend and sidekick'
    },
    {
      image: 'https://w0.peakpx.com/wallpaper/1001/189/HD-wallpaper-adventure-time-tree-house.jpg',
      title: 'TreeHouse',
      description: 'Located on the edge of the Candy Kingdom, this is the home of our heroes!'
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
