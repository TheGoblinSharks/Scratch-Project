import { useState } from 'react';
import NavBar from './components/navBar';
import MainContainer from './Containers/MainContainer';

function App() {
  
  return (
    <>
      <div>
        <NavBar/>     
        <MainContainer />
        <div className="footer-line"></div>
      </div>
    </>
  );
}

export default App;
