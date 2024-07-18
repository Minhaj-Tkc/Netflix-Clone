import React from 'react';
import { useParams } from 'react-router-dom';
import cards_data from '../../assets/cards/Cards_data';
import './Player.css';
import back_arrow_icon from '../../assets/back_arrow_icon.png';

const Player = () => {
  const { id } = useParams();
  const card = cards_data.find(card => card.id === parseInt(id));

  if (!card) {
    return <p>Video not found</p>;
  }

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" onClick={() => window.history.back()} />
      <iframe 
        src={card.movielink} 
        title='trailer'
        style={{ border: '1px solid black' }} 
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>20.03.2024</p>
        <p>{card.name}</p>
        <p>Trailer</p>
      </div>
    </div>
  );
};

export default Player;
