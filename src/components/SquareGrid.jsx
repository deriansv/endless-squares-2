import Square from "./Square";

export function SquareGrid ({ squares, dimension }) {
 
    const squaresArray = Array.isArray(squares) ? squares : [];

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: `repeat(${dimension}, 1fr)`,
        gridTemplateRows: `repeat(${dimension}, 1fr)`,
        gap: '5px',
        direction: 'rtl',
        gridAutoFlow: 'row',
        marginBottom: '30px',
        marginTop: '100px',
        // height: '100%'
        // justifyContent: 'start',
        // alignItems: 'start',
    };

    return (
        <>
        <div className="grid-container" style={gridStyle}>
            {squaresArray.map((square) => (
                <Square key={square.id} color={square.color} />
            ))}
        </div>
        </>
    );
}
