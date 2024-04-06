import React from 'react';
import './index.css';

const ArrayContainer = ({ arrayData, currentIndex }) => {
  return (
    <div className="arrayContainer">
      {arrayData.map((item, index) => (
        <div key={index} className={`box ${index === currentIndex ? 'hover' : ''}`}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default ArrayContainer;
