import { useState } from 'react'
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
      <button onClick={handleButtonClick}>Move</button>
      <ArrayContainer arrayData={arrayData} currentIndex={currentIndex} />
    </div>
    </>
  )
}

export default App;
