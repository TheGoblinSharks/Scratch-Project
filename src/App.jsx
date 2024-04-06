import { useState } from 'react'
import NavBar from './components/navBar';
import LeftMainContainer from './components/MainContainers/LeftMainContainer'; 
import RightMainContainer from './components/MainContainers/RightMainContainer'; 
// import ArrayContainer from './experimental/ArrayContainer'
import ArrayContainer from './components/ArrayContainer';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const arrayData = [1, 2, 3, 4]; 
  const handleButtonClick = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex < arrayData.length - 1) {
        return prevIndex + 1;
      } else {
        return 0;
      }
    });
  };

  return (
    <>
     <div>
      <NavBar/>
      <div className="column-wrapper">
        <LeftMainContainer/>
        <RightMainContainer/>
      </div>



      <button onClick={handleButtonClick}>Move</button>
      <ArrayContainer arrayData={arrayData} currentIndex={currentIndex} />
    </div>
    </>
  )
}

export default App;
