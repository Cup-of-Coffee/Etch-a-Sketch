/*
TODO:
@ button to change number of squares, w/ a limit of 100 and 2.
@ button to change color of paint.
@ add hover and hold functionality.
*/



/*
Executing functions on window load.
*/
let gridSize = 16; // The starting grid size of 16x16.
let eraseCase = false;
let currentColor = "#5f9ea0";
createGrid();



/*
Use DOM to create divs to construct the 16x16 grid with a nestled for loop.
    PROBLEM: Figure out a way to have onmousedown and onmousehover work at the same time
*/
function createGrid(){
    const grid = document.querySelector('#grid');

    // Remove any existing elements. This is mainly used when calling createGrid again to resize the grid.
    while(grid.firstChild){
        grid.removeChild(grid.lastChild);
    }

    // Use DOM to add to setup a div with the proper classes, events and width/height sizing.
    const square = document.createElement('div');
    square.classList.add('square');
    square.setAttribute('onmouseover','color(this)');

    let squareDimensions = 400/gridSize;
    squareDimensions = Math.round(squareDimensions * 10) / 10;
    square.style.height = squareDimensions + "px";
    square.style.width = squareDimensions + "px";

    // Use a for loop of repeatly generate the div to populate the grid.
    for(i = 0; i < gridSize * gridSize; i++){
        grid.appendChild(square.cloneNode(true));
    }

    // Set the square ID to have the proper height and width sizing of the current grid. This is mainly used when calling createGrid again to resize the grid.

}



/*
Use DOM to have grid squares change color when a mouse hovers over them.
*/
function color(square) {
    if(!eraseCase){
        square.style.backgroundColor = currentColor;
    }else{
        square.style.backgroundColor.remove();
    }
}



/*
Pick colors.
*/
function canvas(){
    const select = document.getElementById('color');
    currentColor = select;

    const colored = document.querySelector('.colored');
    colored.style.color = currentColor;
}



/*
Switch eraseCase to true or false.
*/
function erase() {
    if(!eraseCase){
        eraseCase = true;

        // Change the word of the Erase button to Paint.
        const eraseB = document.getElementById('eraseButton');
        eraseB.innerHTML = "Paint";
    }else{
        eraseCase = false;

        // Change the word of the Erase button back to Erase.
        const eraseB = document.getElementById('eraseButton');
        eraseB.innerHTML = "Erase";
    }
}



/*
Use DOM to remove the grid and then execute the createGrid(); function.
*/
function reset() {
    const grid = document.querySelector('#grid');
    grid.replaceChildren();

    createGrid();
}



/*
Set the gridSize var to the inputted number, executing the reset() function to reset the grid.
*/
function resize(){
    let message = prompt("Enter a number between 1 and 100 for the grid:");

    if(message <= 100 && message >= 1){
        gridSize = message;

        createGrid();
    }else{
        alert("Error! A incorrect input was entered.");
    }
}

