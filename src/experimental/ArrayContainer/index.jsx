import './index.css'
import Box from '../Box'


const ArrayContainer = () => {

  const numElements = new Array(3).fill(null)

  return (
    <div className="arrayContainer">
      <div className="overlay"></div>
      {numElements.map(element => {
        return <Box key={crypto.randomUUID()} />
      })}
    </div>
  )
}

export default ArrayContainer