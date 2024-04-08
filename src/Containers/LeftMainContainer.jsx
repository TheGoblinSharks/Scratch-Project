
// import UserInputCode from '../userInputCode';

const LeftMainContainer = (props) => {
  const { setCurrentAlgo, setCurrentIndex, currentIndex } = props;

  const handleIterate = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 5);
  };

  const handleSetAlgo = () => {
    // newAlgo is what the radiobutton is set to
    setCurrentAlgo(newAlgo);
  }

  let outputString = '';
  for (let i = 0; i <= currentIndex; i++) {
    outputString = `${outputString} \n${i}`;
  } 

  return (
    <div className="left">
      <div className="left-main-container">
        <h2>
          How do we move between each element in an array?
        </h2>

        {/* TO CHANGE BUTTON
        onValueChange(event) {
            this.setState({
              selectedOption: event.target.value
            });
          }
        */}

        <form>
          <fieldset>
            <legend>Array type:</legend>
            <div>
              <input type="radio" id="flatArray" name="arrayType" value="flatArray" /* checked *//>
              <label htmlFor="flatArray">Flat</label>

              <input type="radio" id="twoDArray" name="arrayType" value="twoDArray" />
              <label htmlFor="twoDArray">2D</label>

              <input type="radio" id="custom" name="arrayType" value="custom" />
              <label htmlFor="custom">Custom</label>
            </div>

          </fieldset>
        </form>
      
        <div>
          {/* <span className="explanation">Explanation:</span> */}
          <p>
            We can use a handy built in JavaScript statement called a for loop!
          </p>
          <p>
            A for loop has three parts each separated by a semi colon <b>;</b> <br></br>
            (try hovering over each section of the for loop below!)
          </p>
        </div>


        <pre className="code-example center">
          {/* {description} */}
          {/* <code> */}
            {`for (`}
              <span className="tool-tip">
                <code>
                  let i = 0;
                </code>
                <span className="tool-tip-text">
                  Sets where we start in our array.<br/><br/>In JavaScript arrays are zero indexed which means we start at position 0 instead of position 1
                </span>
              </span>

              <span> </span>

              <span className="tool-tip">
                <code>
                {`i < 4;`}
                </code>
                {/* {`i < 4;`} */}
                <span className="tool-tip-text">
                  Sets when we want our loop to stop<br/><br/>In our case this block is saying keep moving through the items in the array as long as we are at a position that is less than 4
                </span>
              </span>
              
              <span> </span>
              
              <span className="tool-tip">
                <code>
                {`i++`}
                </code>
                {/* i++ */}
                <span className="tool-tip-text">
                  Sets our '<em>step</em>' or how many positions we want move.<br/><br/>In our case we are telling our for loop to move only one item at at time. We could have i += 2 here and in that case we would move two positions each time
                </span>
              </span>
              {`) {\n  console.log(array[i]);\n}`};
            
          {/* </code> */}

        </pre>

        <div className="center">
          <p>
            Lets put it all together and walk through this for loop one step at a time.
          </p>
          <p className="fade">
            What do you think will happen to our yellow block when you press the button?
          </p>
        </div>


        <button className="iterate-button" onClick={handleIterate}> 
          Iterate
        </button>

        <div className="output" style={{'textAlign':'left', 'alignSelf':'flex-start'}}>
          <h2 style={{'marginBottom': '0px'}}>
            OUTPUT:
          </h2>
          <pre style={{'marginTop': '0px'}}>
            {outputString}
          </pre>
        </div>
      </div>
    </div>
  );
};
  
export default LeftMainContainer;


/* 
<div className="output" style={{'textAlign':'left', 'alignSelf':'flex-start'}}>
          <h2 style={{'marginBottom': '0px'}}>
            OUTPUT:
          </h2>
          <pre style={{'marginTop': '0px'}}>
            {outputString}
          </pre>
        </div>
*/