// src/components/Jumbotron/JumboContent.jsx
import React from 'react';
import './JumboContent.css';
import ComicCard from './ComicCard';
import comics from '../../data/comics';
import jumboBg from '../../assets/img/jumbotron.jpg';


const JumboContent = () => {
  return (
    <section className="jumbotron">

      {/* SEZIONE IMMAGINE IN ALTO */}
      <div className="jumbotron-top" style={{ backgroundImage: `url(${jumboBg})` }}>
        <button className="current-series-btn">CURRENT SERIES</button>
      </div>

      {/* SEZIONE NERA CON LE CARD */}
      <div className="jumbotron-bottom">
        <div className="cards-container">
          {comics.map((comic) => (
            <ComicCard key={comic} comic={comic} />
          ))}
        </div>

        <button className="load-more">LOAD MORE</button>
      </div>
      
    </section>
  );
};

export default JumboContent;
