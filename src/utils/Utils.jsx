
function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    return '#' + Array.from({ length: 6 }, () => letters[Math.floor(Math.random() * 16)]).join('');
}

function getRandomColor(excludeColors) {
    let color;
    
    // Fortsätt generera tills vi får en färg som inte finns i excludeColors
    while (!color || excludeColors.includes(color)) {
        color = generateRandomColor();
    }
    
    return color;
}