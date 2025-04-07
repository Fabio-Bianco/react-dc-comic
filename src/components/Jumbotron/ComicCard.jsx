// src/components/Jumbotron/ComicCard.jsx
import React from 'react';
import './ComicCard.css';

const ComicCard = ({ comic }) => {
  console.log('🎯 Comic passato come prop:', comic);

  return (
    <div className="comic-card">
      <img src={comic.thumb} alt={comic.title} className="comic-thumb" />
      <h3>{comic.title}</h3>
  
    </div>
  );
};

export default ComicCard;
