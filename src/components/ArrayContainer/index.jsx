import '../../index.css';

const ArrayContainer = (props) => {

  const { arrayData, currentIndex } = props
  
  return (
    <div className="arrayContainer">
      <div className="overlay">
        
      </div>
      {arrayData.map((item, index) => (
        <div key={index} className={`box ${index === currentIndex ? 'hover' : ''}`}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default ArrayContainer;
