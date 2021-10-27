const grid = document.querySelector(".grid")

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  
  const clearBtn = document.getElementById("clearButton")
  clearBtn.addEventListener("click", () => {
      gridSizeInput = prompt("Please enter new grid size.")
    if(gridSizeInput > 100 || gridSizeInput < 1) alert("Enter between 1 and 100")
    deleteGrid()
    createGrid(gridSizeInput)
})

const deleteGrid = () => grid.innerHTML = ""

const createGrid = size => {
    for(let i = 0; i < size ** 2; i++) {
        const squareDiv = document.createElement("div")
        squareDiv.style.height = `calc(100% / ${size})`
        squareDiv.style.width = `calc(100% / ${size})`
        squareDiv.addEventListener("mouseover", e => e.target.style.backgroundColor = "rgba(150, 180, 0, 0.5)")
        grid.appendChild(squareDiv)
    }
}

createGrid(20)

const squareDivs = document.querySelectorAll(".grid div")
const rgbBrush = document.getElementById("rgbBrush")

rgbBrush.addEventListener("click", () => {
    squareDivs.forEach(div => div.addEventListener("mouseover", e => e.target.style.backgroundColor = getRandomColor()))
})

const grayScale = document.getElementById("grayScale")

grayScale.addEventListener("click", () => {
    squareDivs.forEach(div => {
        div.addEventListener("mouseover", e => {
            //get opacity
            //increase opacity by .1
            // e.target.style.backgroundColor = "rgba(150, 180, 0, 0.5)"
            let currentOpacity = Number(e.target.style.backgroundColor.slice(-4, -1))
            let rgb = e.target.style.backgroundColor.slice(0, 16)
            // console.log(rgb)
            console.log(e.target.style.backgroundColor)
            e.target.style.backgroundColor = `${rgb}${currentOpacity + 0.1})`
            console.log(e.target.dataset.times)
            
            // console.log(e.target.style.backgroundColor)
            // console.log(currentOpacity)
    })})
})