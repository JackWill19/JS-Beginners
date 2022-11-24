// Select the elements, Canvas and Shake Button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('.shake');
const MOVE_AMOUNT = 10;

// Setup Canvas for drawing
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

// const width = canvas.width;
// const height = canvas.height;
const { width, height } = canvas; // Does the same thing as the lines above

// create random x and y starting point

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.beginPath(); //Starts the drawing
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

// Write a draw function
function draw({ key }){
    // Increment hue
    hue++;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath(); // start the the path
    ctx.moveTo(x, y);// move x and y values depending on what the user does

    switch(key) {
        case 'ArrowUp' :
            y = y - MOVE_AMOUNT;
            break;
        case 'ArrowDown' :
            y = y + MOVE_AMOUNT;
            break;
        case 'ArrowLeft' :
            x = x - MOVE_AMOUNT;
            break;
        case 'ArrowRight' :
            x = x + MOVE_AMOUNT;
            break;

        default:
            break;
    }

    ctx.lineTo(x, y); // Moving line to the new x and y values
    ctx.stroke(); // Draw the line
    
}

// Write a handler for the keys
function handleKey(e) {
    if(e.key.includes('Arrow')){
        e.preventDefault();
        draw({ key: e.key });
        
    }
}

// Clear / Shake function
function clearCanvas() {
    canvas.classList.add('shake');
    ctx.clearRect(0, 0, width, height);
    canvas.addEventListener('animationend', () => {
        canvas.classList.remove('shake');
    }, {once : true});
}

// Listen for arrow keys
window.addEventListener('keydown', handleKey);
shakeButton.addEventListener('click', clearCanvas);