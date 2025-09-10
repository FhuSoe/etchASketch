const container = document.getElementById("grid-container");
const gridSize = 16;

function createGrid(size) {
    //to clear any existing cells
    container.innerHTML = "";

    //The loop to create the grid based on the size
    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');
        container.appendChild(cell);
    }
}

//calling the function the to create grids when the page loads
createGrid(gridSize);