

function Square  ({ color }) {
    return (
        <div
            className="square"
            style={{
                backgroundColor: color, 
                width: '50px', 
                height: '50px',
                margin: '5px'
            }}
        />    
    );
}

export default Square 