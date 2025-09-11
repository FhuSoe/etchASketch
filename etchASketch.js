const container = document.getElementById("grid-container");
const button = document.getElementById("reset-grid");
//const gridSize = 16;


//button eventListener to let the user choose the size of the grid
button.addEventListener("click", () => {
    let userSize = prompt("Input grid size");
    if (userSize > 100) {
        alert("The maximum size is 100")
     return;   
    }
    //calling the function the to create grids when the page loads
    createGrid(userSize);
});

function createGrid(size) {
    //to clear any existing cells
    container.innerHTML = "";

    //The loop to create the grid based on the size
    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');
        container.appendChild(cell);
        //The event listener for the hover function leaving a black trail
        cell.addEventListener("mouseenter", function() {
            cell.style.backgroundColor = 'black';
        });
    };
};

