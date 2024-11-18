import { useState } from 'react'

import './App.css'
import { AddSquareButton } from './components/AddSquareButton'
import { Square } from './components/Square'
import { SqaureGrid } from './components/SquareGrid'

function App() {
  const [squares, setSquares] = useState([])

  return (
    <>

    <Square />
    <AddSquareButton />
    <SqaureGrid />
    </>
  )
}

export default App
