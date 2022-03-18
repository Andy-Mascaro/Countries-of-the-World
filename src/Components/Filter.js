import React from 'react';

export default function Filter({ search, setSearch, types }) {
  return (
    <select value={search} onChange={(e) => setSearch(e.target.value)}>
      {types.map((type) => (
        <option key={type}>{type}</option>
      ))}
    </select>
  );
}
