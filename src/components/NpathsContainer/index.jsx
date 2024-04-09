import ArrayContainer from "../ArrayContainer"
import { useState,useEffect } from "react"
import nPaths from "./helpers"

const NpathsContainer = (props) => {
  const { currentIndex } = props
  const [ positions, setPositions ] = useState([0,0])
  console.log(positions)
  const currentPosition = positions[currentIndex]

  let rowOne = 0
  let rowTwo = null
  let rowThree = null

  // if(currentPosition[0] > 0) {
    if(currentPosition[0] === 0) {
      rowOne = currentPosition[1]
      rowTwo = null;
      rowThree = null;
    }
    else if(currentPosition[0] === 1) {
      rowOne = null;
      rowTwo = currentPosition[1];
      rowThree = null
    }
    else if(currentPosition[0] === 2) {
      rowOne = null;
      rowTwo = null;
      rowThree = currentPosition[1]
    }
  // }

  useEffect(() => {
    setPositions(nPaths(3))
  },[])

  return (
    <>
    <ArrayContainer
      arrayData={[0,1,2]}
      currentIndex={rowOne}
    />
    <ArrayContainer
      arrayData={[0,1,2]}
      currentIndex={rowTwo}
    />
    <ArrayContainer
      arrayData={[0,1,2]}
      currentIndex={rowThree}
    />
    </>
  )
}

export default NpathsContainer