import React, { useState } from 'react';
import LeftMainContainer from './LeftMainContainer'; 
import RightMainContainer from './RightMainContainer'; 

function MainContainer() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleIterate = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 5);
  };

  return (
    <main className="column-wrapper">
      <LeftMainContainer onIterate={handleIterate} currentIndex={currentIndex} />
      <div className="line"></div>
      <RightMainContainer currentIndex={currentIndex}/>
    </main>
  );
}

export default MainContainer;
