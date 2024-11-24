import '../App.css'


function Square  ({ color }) {
    return (
        <div
            className="square"
            style={{
                backgroundColor: color, 
                width: '60px', 
                height: '60px',
                margin: '2px',
                border: '1px solid black',
                display: 'flex',
                justifyContent:'center',
                alignItems: 'center',
                borderRadius: '5px'
            }}
        />    
    );
}

export default Square 