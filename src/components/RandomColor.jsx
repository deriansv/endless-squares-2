import { useState } from "react";

function RandomColor() {
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState("#000000")

    function randomColorUtility(length) {
        return Math.floor(Math.random() * length)
    }

    function randomHex(){
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexColor = "#";
        for (let i = 0; i < 6; i++) { //Loopen startar med att sätta variabeln i till 0, och så länge i är mindre än 6, kommer den att köra ett kodblock och sedan öka värdet på i med 1 för varje varv, tills i når 6
            hexColor += hex[randomColorUtility(hex.length)];
        } 
        setColor(hexColor);
    }

    function rgb() {
        // Implementation for RGB color generation
      }

    return(
        <div>
            <button onClick={typeOfColor === "hex" ? randomHex : rgb}></button>
        </div>
    );
}


export default RandomColor