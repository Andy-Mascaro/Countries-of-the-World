import React from 'react';
import './CountryCard.css';

export default function CountryCard({ name, iso2 }) {
  return (
    <div className="country-card">
      <div className="countries">
        <div className="name">{name}</div>
        <div className="iso2">{iso2}</div>
      </div>
      <div className="image">
        <img src={iso2} />
      </div>
    </div>
    
  );
}
