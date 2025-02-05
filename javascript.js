const container = document.querySelector(".container");
let containerWidth = container.getBoundingClientRect().width;
let coefficient = 13;

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

window.addEventListener('resize', () => {
  containerWidth = container.getBoundingClientRect().width;
});