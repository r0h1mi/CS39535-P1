import React from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Cinnabon from '../components/images/CinnamonBun.png';
import Bubblegum from '../components/images/bubblegumwavy.png';
import BananaGuards from '../components/images/bananaguards.png';
import './CandyLand.css';


const CandyLand = () => {
  return (
      <>
      <Navbar />
    <div className="candy-page-container">
      <h1>Candy Land</h1>
      <div className="cards-container">
        <Card
          title="Meet Cinnabon !"
          description="Cinnabon is the sweetest helper. Often anxious, he means the best"
          image={Cinnabon}
        />
        <Card
          image={Bubblegum}
          title="Princess Bubblegum"
          description="Come Party With the Princess!"
        />
        <Card
          image={BananaGuards}
          title="Banana Guards"
          description="Safely Explore the Secrets of the Candy Kingdom with the Banana Guards!"
        />
      </div>
    </div>

    </>
  );
};

export default CandyLand;
