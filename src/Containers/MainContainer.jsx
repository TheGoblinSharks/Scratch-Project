import React, { useState } from 'react';
import LeftMainContainer from './LeftMainContainer'; 
import RightMainContainer from './RightMainContainer'; 

function MainContainer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentAlgo, setCurrentAlgo] = useState('flatArray');

  return (
    <main className="column-wrapper">
      <LeftMainContainer 
        setCurrentAlgo={setCurrentAlgo} 
        setCurrentIndex={setCurrentIndex} 
        currentIndex={currentIndex}
      />
      <div className="line"></div>
      <RightMainContainer
        currentAlgo={currentAlgo}
        currentIndex={currentIndex}/>
    </main>
  );
}

export default MainContainer;
