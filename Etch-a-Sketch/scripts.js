// Select relevant DOM elements and store in variables
const gridContainer = document.querySelector('.container')
const resetButton = document.querySelector('.resetButton')

// Iteratively build a grid of dynamic size and append to container
function buildGrid(x) {
    for (let i = 0; i < x**2; i++) {
        const gridItem = document.createElement('div')
        gridItem.classList.add('item')
        gridContainer.appendChild(gridItem)
    }
}

// Call the function to build grid on first render
buildGrid(16)

// Use event delegation to effect style change on children elements of container div
gridContainer.addEventListener("mouseover", function(event) {
    if (event.target.classList.contains("item")) {
        event.target.style.backgroundColor = 'gray'
    }
})

// When the user specifies the grid size via prompt, clear the current grid and re-render at chosen size
// Chosen size is stored in the id of the reset button, so that the grid can be re-rendered at the same size 
// without refreshing the page (which would render at the default 16x16 size)
function servePrompt() {
    let gridNum = prompt("Enter a value between 2 and 100 to specify the dimensions of the grid")
    if (isNaN(Number(gridNum)) || Number(gridNum) > 100 || Number(gridNum) < 2) {
        alert('Enter a number between 2 and 100')
        return 0
    }
    gridContainer.innerHTML = ''
    buildGrid(gridNum)
    gridContainer.style.gridTemplateRows = `repeat(${gridNum}, 1fr)`
    gridContainer.style.gridTemplateColumns = `repeat(${gridNum}, 1fr)`
    resetButton.id = gridNum
}

// id value of reset button is used to refresh the grid at the same size without reloading the page
function reset(id) {
    gridContainer.innerHTML = ''
    buildGrid(id)
}