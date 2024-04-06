import './index.css'
import Box from '../Box'


const ArrayContainer = () => {

  const numElements = new Array(3).fill(null)

  return (
    <div className="xarrayContainer">
      <div className="xoverlay"></div>
      {numElements.map(element => {
        return <Box key={crypto.randomUUID()} />
      })}
    </div>
  )
}

export default ArrayContainer