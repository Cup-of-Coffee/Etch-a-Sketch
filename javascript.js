
/*
Executing functions on window load.
*/
createGrid();



/*
Use DOM to create divs to construct the 16x16 grid with a nestled for loop.
*/
function createGrid(){
    const container = document.querySelector('#container');

    for(i = 0; i < 16; i++){
        const row = document.createElement('div');
        row.classList.add('row');

        container.appendChild(row);

        for(n = 0; n < 16; n++){
            const column = document.createElement('div');
            column.classList.add('column');
            column.setAttribute('onmouseover','etch(this)');
        
            // add a DOM to add the onmouseover="etch()" or hover set

            row.appendChild(column);
        }
    }

}



/*
Use DOM to have grid squares change color when a mouse hovers over them.
*/
function etch(square) {
    square.classList.add('hovered');
}
