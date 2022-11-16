
const gridContainer = document.querySelector('.container')

for (let i = 0; i < 256; i++) {
    gridContainer.innerHTML += ('<div class="item"></div>')
}

gridContainer.addEventListener("mouseover", function(event) {
    if (event.target.classList.contains("item")) {
        event.target.style.backgroundColor = 'gray'
    }
})

function servePrompt() {
    let gridNum = prompt("Enter a value between 2 and 100 to specify the dimensions of the grid")
    if (gridNum > 100 || gridNum < 2) {
        servePrompt()
    }
    gridContainer.style.gridTemplateColumns = "null"
    gridContainer.style.gridTemplateColumns = `repeat(${gridNum}, 1fr)`
}