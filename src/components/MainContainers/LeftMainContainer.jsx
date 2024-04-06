import React from 'react';



const LeftMainContainer = () => {
  const description = `
  CODE:
  for (let i = 0; i < 4; i++) {
    console.log(i + 2);
  };
  `
    return (
      <div>
        <div className="left-main-container">
          <h2>
            What is the problem?
          </h2>
          <p>
            {description}
          </p>
          <h2>
            OUTPUT:
          </h2>
          

        </div>
      </div>
    );
  };
  
  export default LeftMainContainer;
  