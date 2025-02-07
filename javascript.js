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
  square.dataset.opacity = 0; // stores opacity directly in the element, across multiple events

  square.addEventListener('mouseover', () => {
    let currentOpacity = parseFloat(square.dataset.opacity);

    if (!square.dataset.color) {
      square.dataset.color = getRandomRGB();
    }

    if (currentOpacity < 1) {
      currentOpacity += 0.2;
      square.dataset.opacity = currentOpacity;
      square.style.backgroundColor = square.dataset.color;
      square.style.opacity = currentOpacity;
    }
  });
}

function getRandomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
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