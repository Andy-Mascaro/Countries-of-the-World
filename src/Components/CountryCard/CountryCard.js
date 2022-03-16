import React from 'react';
import './CountryCard.css';

export default function CountryCard({ name, iso2 }) {
  const iso = iso2.toLowerCase();
  return (
    <div className="country-card">
      <div className="countries">
        <div className="name">{name}</div>
        <div className="iso2">{iso2}</div>
      </div>
      <div className="image">
        <img src={`https://flagcdn.com/16x12/${iso}.png`}/>

      </div>
    </div>
    
  );
}
