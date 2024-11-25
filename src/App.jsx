import { useState } from 'react'
import { SquareGrid } from './components/SquareGrid'
import { getRandomColor } from './components/RandomColor';
import './App.css'
import "typeface-roboto";

function App() {
  const [squares, setSquares] = useState([])
  const [nextGridsize, setNextGridSize] = useState(1)

  function addSquare() {
    const excludeColors = squares.length > 0 ? squares[squares.length - 1].color : null;
    const newSquare = {
      id: squares.length + 1,
      color: getRandomColor(excludeColors)
    };

    const newSquares = Array.isArray(squares) ? [...squares, newSquare] : [newSquare];

    if (newSquares.length > nextGridsize * nextGridsize) {
      setNextGridSize(nextGridsize + 1);
    }
    setSquares(newSquares)
  }

  function clearSquares() {
    setSquares([]);
    setNextGridSize(1);
  }

  return (
    <>
    <header className='logo'>
      <img src="/src/img/wizardworks-logo-white.svg" alt="" />
    </header>

    <div className='body-container'>
      
      <div className='button-container'>
        <button onClick={addSquare}>Add square</button>
        <button onClick={clearSquares} style={{marginLeft: '10px', backgroundColor: '#F77171', width: '100px'}}>Clear</button>
      </div>

      <div className='square-container'>
        <SquareGrid squares={squares} dimension={nextGridsize} />
      </div>
    </div>
    </>
  )
}

export default App
