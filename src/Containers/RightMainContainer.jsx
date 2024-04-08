
import ArrayContainer from '../components/ArrayContainer';

const RightMainContainer = () => {
  const arrayData = [0, 1, 2, 3, 4]
  return (
    <div className="right-main-container">
      <ArrayContainer  
        arrayData={arrayData} 
        currentIndex={0} 
      />
    </div>
  );
};
  
export default RightMainContainer;
  