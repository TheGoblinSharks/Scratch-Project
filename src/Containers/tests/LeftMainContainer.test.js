
/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LeftMainContainer from '../LeftMainContainer.jsx';

describe('iterate button tests', () => {
  xit('currentIndex is different from previous currentIndex', () => {
    const oldResult = 0;
    const iterateButton = app.querySelector(`[id="fix-button"]`)
    console.log(iterateButton)
  });

  it('currentIndex is increased by 1', () => {

  });

  xit('currentIndex = 4 becomes currentIndex = 0', () => {

  });
});

describe('LeftMainContainer', () => {
  test('handleIterate function is called when the Iterate button is clicked', () => {
    // Mock handleIterate function
    const handleIterateMock = jest.fn();

    // Render LeftMainContainer component with mock function
    const { getByText } = render(
      <LeftMainContainer
        handleIterate={handleIterateMock}
        currentIndex={0}
        setCurrentIndex={() => {}}
        setCurrentAlgo={() => {}}
        currentAlgo="flatArray"
      />
    );

  // Find the "Iterate" button
  const iterateButton = getByText('Iterate');
  iterateButton.onclick = () => handleIterateMock();
  
  // Simulate a click on the "Iterate" button
  fireEvent.click(iterateButton);

  // Check if handleIterateMock is called
  expect(handleIterateMock).toHaveBeenCalledTimes(1);
});

/*
CODE GRAVEYARD

// import { JSDOM } from 'jsdom';

// const dom = new JSDOM('<!doctype html><html><body></body></html>');
// global.document = dom.window.document;
// global.window = dom.window;
// global.navigator = {
//   userAgent: 'node.js',
// };

// beforeAll((done) => {
    // const app = await render(
    //   // <Provider store={store}>
    //     <App />
    //   // </Provider>,
    // );
    // replace code here

    // fs.writeFile(testJsonFile, JSON.stringify([]), () => {
    //   db.reset();
    //   done();
    // });
  // });

  // afterAll((done) => {

  //   // replace code here

  //   // fs.writeFile(testJsonFile, JSON.stringify([]), done);
  // });


  // replace code here

      // const marketList = [{ location: 'here', cards: 11 }, { location: 'there', cards: 0 }];
      // const result = db.sync(marketList);
      // expect(result).not.toBeInstanceOf(Error);
      // const table = JSON.parse(fs.readFileSync(testJsonFile));
      // expect(table).toEqual(marketList);



 // replace code here

      // const marketList = [{ location: 'here', cards: 11 }, { location: 'there', cards: 0 }];
      // const result = db.sync(marketList);
      // expect(result).not.toBeInstanceOf(Error);
      // const table = JSON.parse(fs.readFileSync(testJsonFile));
      // expect(table).toEqual(marketList);


// replace code here

      // const marketList = [{ location: 'here', cards: 11 }, { location: 'there', cards: 0 }];
      // const result = db.sync(marketList);
      // expect(result).not.toBeInstanceOf(Error);
      // const table = JSON.parse(fs.readFileSync(testJsonFile));
      // expect(table).toEqual(marketList);

  // describe('iterate button is present', () => {
  //   it('check if there is a button', () => {

// describe('LeftMainContainer unit tests', () => {
  // });  

*/
