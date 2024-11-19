

function AddSquare() {
    const newSquare = {
        id: squares.length,
        color: RandomColor(squares.map(s => s.color))
    };
}

export default AddSquare