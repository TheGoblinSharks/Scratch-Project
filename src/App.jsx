// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavBar from './components/navBar';
import MainContainer from './Containers/MainContainer';
import MatrixContainer from './Containers/MatrixContainer'; // Make sure to import your new component

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Link to="/array">
        <button>Go to Array Visualization</button>
      </Link>
      <Link to="/matrix">
        <button>Go to Matrix Visualization</button>
      </Link>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/array" element={<MainContainer />} />
        <Route path="/matrix" element={<MatrixContainer />} />
      </Routes>
    </Router>
  );
}

export default App;
