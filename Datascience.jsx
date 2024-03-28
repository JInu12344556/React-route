import React from 'react';
import datascienceimage from './assets/Datasciene.jpg'

function DataScience() {
  return (
    <div>
      <h2>Data Science</h2>
      <img src={datascienceimage} alt="Datascience" />
      <p>This is the page displaying Data Science course details.</p>
    </div>
  );
}

export default DataScience;
