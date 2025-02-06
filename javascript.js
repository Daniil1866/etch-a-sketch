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
      row.appendChild(col);
    }
    container.appendChild(row);
  }
}

button.addEventListener('click', () => {
  drawGrid(prompt("Enter the number of squares per row"));
});

window.addEventListener('resize', () => {
  containerWidth = container.getBoundingClientRect().width;
});