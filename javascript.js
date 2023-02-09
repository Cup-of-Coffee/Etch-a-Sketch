/*
TODO:
@ button to change number of squares, w/ a limit of 100 and 2.
@ button to change color of paint.
@ button to reset the canves.

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

    for(i = 0; i < gridSize; i++){
        const row = document.createElement('div');
        row.classList.add('row');

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