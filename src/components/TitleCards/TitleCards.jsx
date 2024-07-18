import React from 'react';
import './TitleCards.css';
import cards_data from '../../assets/cards/Cards_data';
import { Link } from 'react-router-dom';

const TitleCards = ({ title }) => {
  return (
    <div className='title-cards'>
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list">
        {cards_data.map((card, index) => (
          <Link to={`/player/${card.id}`} className='card' key={index}>
            <img src={card.image} alt="" />
            <p>{card.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
