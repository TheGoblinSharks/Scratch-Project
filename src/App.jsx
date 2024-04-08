
import NavBar from './components/navBar';
import LeftMainContainer from './Containers/LeftMainContainer'; 
import RightMainContainer from './Containers/RightMainContainer'; 

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
