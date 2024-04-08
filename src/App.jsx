import { useState } from 'react';
import NavBar from './components/navBar';
import LeftMainContainer from './Containers/LeftMainContainer'; 
import RightMainContainer from './Containers/RightMainContainer'; 

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleIterate = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 5);
  };

  return (
    <>
      <div>
        <NavBar/>
        <div className="column-wrapper">
          <LeftMainContainer onIterate={handleIterate}/>
          <RightMainContainer currentIndex={currentIndex}/>
        </div>
        <div className="footer-line"></div>
      </div>
    </>
  );
}

export default App;
