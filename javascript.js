
createGrid();

/*
Use DOM to create divs to construct the 16x16 grid with a nestled for loop.
*/
function createGrid(){
    const container = document.querySelector('#container');

    for(x = 0; x < 16; x++){
        const row = document.createElement('div');
        row.classList.add('row');

        container.appendChild(row);

        for(i = 0; i < 16; i++){
            const column = document.createElement('div');
            column.classList.add('column');

            row.appendChild(column);
        }
    }

}





