

export function getRandomColor(excludeColors) {
    const letters = '0123456789ABCDEF'
    let color;
  
    const excludeSet = new Set(excludeColors); // Skapa ett Set med färger som ska exkluderas
  
    do { //do the loop first, then check the conditions
      color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters [Math.floor(Math.random() * 16)];
      }
    } while (excludeSet.has(color)); // Repetera om färgen finns i excludeSet
  
    return color;
  }

  //while loop = repeat some code while the condition is true