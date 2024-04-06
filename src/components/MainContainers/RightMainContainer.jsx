import React from 'react';
import ArrayContainer from '../ArrayContainer';



const RightMainContainer = () => {
  return (
    <div>
      <div className="right-main-container">
        <ArrayContainer  arrayData={[0, 1, 2, 3, 4]} currentIndex={0} />
      </div>
    </div>
  );
};
  
export default RightMainContainer;
  