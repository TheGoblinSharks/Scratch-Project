// RightMainContainer.jsx
import React, { useState, useEffect } from 'react';
import ArrayContainer from '../components/ArrayContainer';

const RightMainContainer = () => {
  const [data, setData] = useState({ array: [], currentIndex: 0 });

  useEffect(() => {
    // Fetch data from server
    fetch('/array')
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error('Error fetching array data:', error);
      });
  }, []);

  return (
    <div className="right-main-container">
      <ArrayContainer arrayData={data.array} currentIndex={data.currentIndex} />
    </div>
  );
};
  
export default RightMainContainer;
