/*
TODO:
@ button to change number of squares, w/ a limit of 100 and 2.
@ button to change color of paint.

*/


/*
Executing functions on window load.
*/
let gridSize = 16; // The starting grid size of 16x16.
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
    square.classList.add('colored');
}



/*
Use DOM to remove the grid and then execute the createGrid(); funmction.
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

