/*
Executing functions on window load.
*/
createGrid();



/*
Use DOM to create divs to construct the 16x16 grid with a nestled for loop.
    PROBLEM: Figure out a way to have onmousedown and onmousehover work at the same time
*/
function createGrid(){
    const grid = document.querySelector('#grid');

    for(i = 0; i < 16; i++){
        const row = document.createElement('div');
        row.classList.add('row');

        grid.appendChild(row);

        for(n = 0; n < 16; n++){
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
