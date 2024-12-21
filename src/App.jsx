import { useState } from "react";
import { SquareGrid } from "./components/SquareGrid";
import { getRandomColor } from "./components/RandomColor";
import "./App.css";
import "typeface-roboto";

function App() {
  const [squares, setSquares] = useState([[]]);
  const [nextGridSize, setNextGridSize] = useState(1);

  // const squareTemplate = [
  //   [square, square, square],
  //   [square, square, square],
  //   [square, square, square],
  //   [square, square, square, square],
  // ];

  let isSquare = false;

  //När man klickar på add square, kontrollera om längden på alla kolumner är detsamma OCH
  // att det är samma antal som kolumner#
  // Om ja = en KVADRAT har bildats, och en ny kolumn ska läggas till OCH lägg till en square i den nya kolumnen#
  // Om inte, loopa igenom kolumnerna bakifrån. För varje kolumn:
  //  - Kontroller om kolumnens längd är mer eller likamed första kolumnens längd (index 0).
  //  - Om ja - lägg till ny square och bryt ut ur loopen.
  //.  - Om nej - gå vidare till nästa kolumn.

  function addSquare() {
    const excludeColors =
      squares.length > 0 ? squares[squares.length - 1].color : null;
    const newSquare = {
      id: squares.length + 1,
      color: getRandomColor(excludeColors),
    };
    let newSquares = [];
    isSquare = true;

    if (squares[0].length === 0) {
      squares[0].push(newSquare);
      newSquares = [...squares];
      setSquares(newSquares);
      console.log(squares);
      return;
    }

    squares.forEach((column) => {
      if (column.length !== squares.length) isSquare = false;
     
    });

    if (isSquare) {
      newSquares = [...squares, [newSquare]];
      console.log('Is square!')
    }

    if (!isSquare) {
      for (let i = squares.length - 1; i > 0; i--) {
        if (squares[i].length >= squares[0]) {
          squares[i].push(newSquare);
          newSquares = [...squares];
          return;
        }
      }
    }

    // if (newSquares.length > nextGridSize * nextGridSize) {
    //   setNextGridSize(nextGridSize + 1);
    // }

    setSquares(newSquares);
    console.log(squares);
  }

  function clearSquares() {
    setSquares([]);
    // setNextGridSize(1);
  }

  return (
    <>
      <header className="logo">
        <img src="/src/img/wizardworks-logo-white.svg" alt="" />
      </header>

      <div className="body-container">
        <div className="button-container">
          <button onClick={addSquare}>Add square</button>
          <button
            onClick={clearSquares}
            style={{
              marginLeft: "10px",
              backgroundColor: "#F77171",
              width: "100px",
            }}
          >
            Clear
          </button>
        </div>

        <div className="square-container">
          <SquareGrid squares={squares} dimension={nextGridSize} />
        </div>
      </div>
    </>
  );
}

export default App;
