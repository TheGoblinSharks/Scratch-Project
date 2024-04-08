
import ArrayContainer from '../components/ArrayContainer';

const RightMainContainer = (props) => {
  const { currentAlgo, currentIndex } = props;
  const arrayData = [0, 1, 2, 3, 4]

  switch (currentAlgo) {
    case 'array': 
      // do whats below
      return (
        <div className="left">
          <div className="right-main-container">
            <div className="animation-wrapper">
              <ArrayContainer  
                arrayData={arrayData} 
                currentIndex={currentIndex} 
              />
            </div>
          </div>
        </div>
      );
    case 'twoDArray': 
      // substitu mike's return in here and delete the 'break;' in this case
      break;
    case 'custom' : 
      // leave blank
      break;
    default:
      // should not happen
      break;
  }
  
  // return (
  //   <div className="left">
  //     <div className="right-main-container">
  //       <div className="animation-wrapper">
  //         <ArrayContainer  
  //           arrayData={arrayData} 
  //           currentIndex={currentIndex} 
  //         />
  //       </div>
  //     </div>
  //   </div>

  // );
};
  
export default RightMainContainer;
  