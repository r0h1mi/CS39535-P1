import React from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import './CandyLand.css';


const CandyLand = () => {
  return (
      <>
      <Navbar />
    <div className="candy-page-container">
      <h1>Candy Land</h1>
      <div className="cards-container">
        <Card
          image="https://via.placeholder.com/500x300.png?text=Candy+Kingdom"
          title="Candy Kingdom"
          description="The sweetest place in all of Ooo! Home to Princess Bubblegum and her loyal subjects."
        />
        <Card
          image="https://via.placeholder.com/500x300.png?text=Lumpy+Space"
          title="Lumpy Space"
          description="A land of bouncy hills and silly creatures, where Lumpy Space Princess rules as queen."
        />
        <Card
          image="https://via.placeholder.com/500x300.png?text=Bad+Lands"
          title="Bad Lands"
          description="A dangerous wasteland full of dangers, where the evil Ice King plots his evil schemes."
        />
      </div>
    </div>

    </>
  );
};

export default CandyLand;
