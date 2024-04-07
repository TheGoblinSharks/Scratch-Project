// import { useState } from 'react'
import NavBar from './components/navBar';
import LeftMainContainer from './components/MainContainers/LeftMainContainer'; 
import RightMainContainer from './components/MainContainers/RightMainContainer'; 
// import ArrayContainer from './experimental/ArrayContainer'
import ArrayContainer from './components/ArrayContainer';

function App() {
  return (
    <>
     <div>
      <NavBar/>
      <div className="column-wrapper">
        <LeftMainContainer/>
        <RightMainContainer/>
      </div>
      <div className="footer-line"></div>
    </div>
    </>
  )
}

export default App;
