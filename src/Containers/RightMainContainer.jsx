// RightMainContainer.jsx
import React, { useState, useEffect } from 'react';
import ArrayContainer from '../components/ArrayContainer';

<<<<<<< HEAD
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
=======
const RightMainContainer = ({currentIndex}) => {
  const arrayData = [0, 1, 2, 3, 4]
  
  return (
    <div className="left">
      <div className="right-main-container">
        <div className="animation-wrapper">
          <ArrayContainer  
            arrayData={arrayData} 
            currentIndex={currentIndex} 
          />
        </div>
      </div>
>>>>>>> dev
    </div>

  );
};
  
export default RightMainContainer;
