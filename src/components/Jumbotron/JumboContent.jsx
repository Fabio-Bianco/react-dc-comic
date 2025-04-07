// src/components/Jumbotron/JumboContent.jsx
import React from 'react';
import './JumboContent.css';
import comics from '../../data/comics';
import ComicCard from './ComicCard';

const JumboContent = () => {
  console.log("📚 Lista comics:", comics);

  return (
    <section className="jumbotron">
      <div className="jumbotron-content">
        <h2>Current Series</h2>

        <div className="cards-container">
          {comics.map((comic) => (
            <ComicCard key={comic.id} comic={comic} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JumboContent;
