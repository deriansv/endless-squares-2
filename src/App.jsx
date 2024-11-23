import { useState } from 'react'

import './App.css'
import { AddSquareButton } from './components/AddSquareButton'
import { Square } from './components/Square'
import { SqaureGrid } from './components/SquareGrid'


function getRandomColor(excludeColors) {
  const letters = '0123456789ABCDEF'
  let color;

  const excludeSet = new Set(excludeColors); //konvertera till set

  do {
    color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters [Math.floor(Math.random() * 16)];
    }
  } while (excludeSet.has(color)); //Använd 'Set' för att kontrollera färg

  return color;
}


function App() {
  const [squares, setSquares] = useState([])

  function addSquare() {
    const excludeColors = squares.length > 0 ? squares[squares.length - 1].color : null;
    const newSquare = {
      id: squares.length + 1,
      color: getRandomColor(excludeColors)
    };
    setSquares([...squares, newSquare])
  }
 

  return (
    <>

    <Square />
    <AddSquareButton />
    <SqaureGrid />
    </>
  )
}

export default App
