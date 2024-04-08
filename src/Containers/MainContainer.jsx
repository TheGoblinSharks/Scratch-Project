import React, { useState } from 'react';
import LeftMainContainer from './LeftMainContainer'; 
import RightMainContainer from './RightMainContainer'; 

function MainContainer() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <main className="column-wrapper">
      <LeftMainContainer currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
      <div className="line"></div>
      <RightMainContainer currentIndex={currentIndex}/>
    </main>
  );
}

export default MainContainer;
