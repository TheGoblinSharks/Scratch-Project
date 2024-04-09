import ArrayContainer from "../components/ArrayContainer";
import NpathsContainer from "../components/NpathsContainer";

const RightMainContainer = (props) => {
  const { currentAlgo, currentIndex } = props;
  const arrayData = [0, 1, 2, 3, 4]
  console.log(currentAlgo)

  switch (currentAlgo) {
    case 'flatArray': 
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
        return (
          <>
          <div className="left">
            <div className="right-main-container">
              <div className="animation-wrapper">
              <NpathsContainer
                currentIndex={currentIndex}
              />
              </div>
            </div>
          </div>
          </>
          
        )
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
