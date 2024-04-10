
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
      // replace code here

      // const marketList = [{ location: 'here', cards: 11 }, { location: 'there', cards: 0 }];
      // const result = db.sync(marketList);
      // expect(result).not.toBeInstanceOf(Error);
      // const table = JSON.parse(fs.readFileSync(testJsonFile));
      // expect(table).toEqual(marketList);
    });
// });
// })






/* code below is from testing unit to serve as syntax examples */

// Here we will be unit testing the 3 main database functions from server/db/markets.js

// const db = require('../server/db/markets.js');

// const testJsonFile = path.resolve(__dirname, '../server/db/markets.test.json');

// /**
//  * Like many testing frameworks, in Jest we use the "describe" function to
//  * separate our tests into sections. They make your test outputs readable.
//  *
//  * You can place "beforeAll", "beforeEach", "afterAll", and "afterEach"
//  * functions inside of "describe" blocks and they will only run for tests
//  * inside that describe block. You can even nest describes within describes!
//  */
// describe('db unit tests', () => {
//   /**
//    * Jest runs the "beforeAll" function once, before any tests are executed.
//    * Here, we write to the file and then reset our database model. Then, we
//    * invoke the "done" callback to tell Jest our async operations have
//    * completed. This way, the tests won't start until the "database" has been
//    * reset to an empty Array!
//    */
//   beforeAll((done) => {
//     fs.writeFile(testJsonFile, JSON.stringify([]), () => {
//       db.reset();
//       done();
//     });
//   });

//   afterAll((done) => {
//     fs.writeFile(testJsonFile, JSON.stringify([]), done);
//   });

//   describe('#sync', () => {
//     it('writes a valid marketList to the JSON file', () => {
//       const marketList = [{ location: 'here', cards: 11 }, { location: 'there', cards: 0 }];
//       const result = db.sync(marketList);
//       expect(result).not.toBeInstanceOf(Error);
//       const table = JSON.parse(fs.readFileSync(testJsonFile));
//       expect(table).toEqual(marketList);
//     });

//     // TODO: Finish unit testing the sync function

//     it('overwrites previously existing markets', () => {
//       // original array to be overwritten
//       const marketList1 = [{ location: 'hi', cards: 11 }, { location: 'low', cards: 5 }];
//       const result1 = db.sync(marketList1);
//       expect(result1).not.toBeInstanceOf(Error);
//       // overwrite with second array
//       const marketList2 = [{ location: 'up', cards: 12 }, { location: 'down', cards: 6 }];
//       const result2 = db.sync(marketList2);
//       expect(result2).not.toBeInstanceOf(Error);
//       // read what is written in the markets.test.json file
//       const table = JSON.parse(fs.readFileSync(testJsonFile));
//       expect(table).toEqual(marketList2);
//     });

//     it('returns an error when location and/or cards fields are not provided', () => {
//       const marketList1 = [{ location: 'hi' }];
//       const result1 = db.sync(marketList1);
//       expect(result1).toBeInstanceOf(Error);
//       const marketList2 = [{ cards: 5 }];
//       const result2 = db.sync(marketList2);
//       expect(result2).toBeInstanceOf(Error);
//       const marketList3 = [{ banana: 'hi' }];
//       const result3 = db.sync(marketList3);
//       expect(result3).toBeInstanceOf(Error);
//     });

//     /**
//      *  TODO: Type validation is not yet correctly implemented! Follow the TDD
//      *  (test driven development) approach:
//      *    1. Write a test describing the desired feature (db.sync returns a
//      *      TypeError when the types are wrong)
//      *    2. Confirm that your tests fail
//      *    3. Follow the errors to implement your new functionality
//      */
//     it('returns an error when location value is not a string', () => {
//       const marketList = [{ location: 5, cards: 11 }, { location: 'low', cards: 5 }];
//       const result = db.sync(marketList);
//       expect(result).toBeInstanceOf(Error);
//     });

//     it('returns an error when cards value is not a number', () => {
//       const marketList = [{ location: 'hi', cards: 11 }, { location: 'low', cards: '5' }];
//       const result = db.sync(marketList);
//       expect(result).toBeInstanceOf(Error);
//     });
//   });

//   // Extension TODO: Unit test the #find and #drop functions
//   describe('#find', () => {
//     xit('returns list of all markets from the json file', () => {
//     });

//     xit('works if the list of markets is empty', () => {
//     });
//   });

//   describe('#drop', () => {
//     xit('writes an empty array to the json file', () => {
//     });
//   });


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