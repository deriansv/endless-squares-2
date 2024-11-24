import { useState } from 'react'
import { SquareGrid } from './components/SquareGrid'
import './App.css'
import "typeface-roboto";


function getRandomColor(excludeColors) {
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
  const [nextDimension, setNextDimension] = useState(1)

  function addSquare() {
    const excludeColors = squares.length > 0 ? squares[squares.length - 1].color : null;
    const newSquare = {
      id: squares.length + 1,
      color: getRandomColor(excludeColors)
    };
    const newSquares = Array.isArray(squares) ? [...squares, newSquare] : [newSquare];

    if (newSquares.length > nextDimension * nextDimension) {
      setNextDimension(nextDimension + 1);
    }
    setSquares(newSquares)
  }

  function clearSquares() {
    setSquares([]);
    setNextDimension(1);
  }

  return (
    <>

    <header className='logo'>
      <img src="/src/img/wizardworks-logo-white.svg" alt="" />
    </header>

    <div className='body-container'>
      
      <div className='button-container'>
        <button onClick={addSquare}>Add square</button>
        <button onClick={clearSquares}>Clear</button>
      </div>

      <div className='square-container'>
        <SquareGrid squares={squares} dimension={nextDimension} />
      </div>


    </div>
   
    </>
  )
}

export default App
