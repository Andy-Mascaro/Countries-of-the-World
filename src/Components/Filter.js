import React from 'react';

export default function Filter({ continents, setSearch }) {
  return (
    <select onChange={(e) => setSearch(e.target.value)}>
      {continents.map((type) => (
        <option key={type}>{type}</option>
      ))}
    </select>
  );
}
