
const gridContainer = document.querySelector('.container')

function buildGrid(x) {
    for (let i = 0; i < x**2; i++) {
    gridContainer.innerHTML += ('<div class="item"></div>')
    }
}

buildGrid(16)

gridContainer.addEventListener("mouseover", function(event) {
    if (event.target.classList.contains("item")) {
        event.target.style.backgroundColor = 'gray'
    }
})

function servePrompt() {
    let gridNum = prompt("Enter a value between 2 and 100 to specify the dimensions of the grid")
    if (isNaN(Number(gridNum)) || Number(gridNum) > 100 || Number(gridNum) < 2) {
        alert('Enter a number between 2 and 100')
        return 0
    }
    let percent = (Number(gridNum) ** 2) / 100
    console.log(percent)
    gridContainer.innerHTML = ''
    buildGrid(gridNum)
    gridContainer.style.gridTemplateRows = `repeat(${gridNum}, 1fr)`
    gridContainer.style.gridTemplateColumns = `repeat(${gridNum}, 1fr)`
}