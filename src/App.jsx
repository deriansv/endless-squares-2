import { useState } from 'react'

import './App.css'
import { AddSquareButton } from './Button'

function App() {
  const [squares, setSquares] = useState([])

  return (
    <>


    <AddSquareButton />
    </>
  )
}

export default App
