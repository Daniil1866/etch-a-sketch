const container = document.querySelector(".container");
const button = document.querySelector("button");
let containerWidth = container.getBoundingClientRect().width;
let coefficient = 16;

drawGrid(16);

function drawGrid(coefficient) {
  container.innerHTML = '';
  for (let i = 0; i < coefficient; i++) {
    const row = document.createElement("div");
    let colSize = containerWidth.toFixed(0) / coefficient + "px";

    for (let j = 0; j < coefficient; j++) {
      const col = document.createElement("div");
      col.style.border = "0.1px solid black";
      col.style.width = colSize;
      col.style.height = colSize;
      col.style.flexShrink = "1";
      addHover(col);
      row.appendChild(col);
    }
    container.appendChild(row);
  }
}

function addHover(square) {
  square.addEventListener('mouseover', () => {
    square.style.backgroundColor = "#ddba3d";
  });
}

button.addEventListener('click', () => {
  let gridSize = prompt("Enter the number of squares per row (max 100)");
  parseInt(gridSize, 10);

  if (gridSize > 100 && !isNaN(gridSize)) {
    alert("Your number is more than 100, a 100x100 grid will be created.");
    drawGrid(100);
  } else if (isNaN(gridSize) || gridSize === '' || gridSize === ' ' || gridSize == undefined) {
    alert("Enter a valid number.");
  }
  else drawGrid(gridSize);
});

window.addEventListener('resize', () => {
  containerWidth = container.getBoundingClientRect().width;
});