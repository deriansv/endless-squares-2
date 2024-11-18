import Square from "./Square";

const SquareGrid = ({ squares }) => {
    const numColumns = Math.ceil(Math.sqrt(squares.length));
    const numRows = Math.ceil(squares.length / numColumns);

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: `repeat(${numColumns}, 1fr)`,
        gridTemplateRows: `repeat(${numRows}, 1fr)`,
        gap: '10px',
        direction: 'rtl',
        justifyContent: 'end',
        gridAutoFlow: 'dense',
    };

    return (
        <div className="square-container" style={gridStyle}>
            {squares.map((square) => (
                <Square key={square.id} color={square.color} />
            ))}
        </div>
    );
}

export default SquareGrid