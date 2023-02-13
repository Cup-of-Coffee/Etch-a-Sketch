/*
TODO:
@ button to change number of squares, w/ a limit of 100 and 2.
@ button to change color of paint.

*/


/*
Executing functions on window load.
*/
let gridSize = 16;
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

    // Use a for loop of the grid's size to create the rows and column elements, using DOM to add in the proper classes.
    for(i = 0; i < gridSize; i++){
        const row = document.createElement('div');
        row.classList.add('row');
        console.log("row #" + i);

        grid.appendChild(row);

        for(n = 0; n < gridSize; n++){
            const column = document.createElement('div');
            column.classList.add('column');
            column.setAttribute('onmouseover','color(this)');
            
            row.appendChild(column);
        }
    }
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
        reset();

        gridSize = message;

        createGrid();
    }else{
        alert("Error! A incorrect input was entered.");
    }
}

