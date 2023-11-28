// BusList.js

import React from 'react';

const BusList = ({ results }) => {
  return (
    <>
      <h2>Bus List</h2>
      <ul>
        {results.map(bus => (
          <li key={bus.id}>{bus.name}</li>
        ))}
      </ul>
    </>
  );
};

export default BusList;