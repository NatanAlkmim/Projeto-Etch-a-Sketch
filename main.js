const container = document.querySelector("#container");
const gridSize = document.querySelector("#grid-size");
const changeColor = document.querySelector("#mudar-cor");
const clearGrid = document.querySelector("#clear-all");
const clickToColor = document.querySelector("#click-to-color");


function userSize(gridSize) {
  gridSize.addEventListener("mousedown", () => {

    let getSizeGrid = prompt("Escolha um valor de 1 a 100");

    while (getSizeGrid < 1 || getSizeGrid > 100) {
            if (getSizeGrid === null) {
        break;
      }
      alert("Precisa ser de 1 a 100!!!");
      getSizeGrid = prompt("Escolha um valor de 1 a 100");
    }
    container.innerHTML = '';
    createGrid(container, getSizeGrid);
  })
}

userSize(gridSize)


function createGrid(container, userSize) {
  for (let i = 0; i < userSize ** 2; i++) {
    const div = document.createElement("div");
    const hMin = 200;
    const hMax = 280;
    const h = Math.floor(Math.random() * (hMax - hMin) + hMin);
    const hslColor = `hsl(${h}, 60%, 80%)`;
    
    div.style.width = `calc(100% / ${userSize})`;
    div.style.height = `calc(100% / ${userSize})`;

    div.addEventListener("mouseenter", () => {

      if (changeColor.checked && !clickToColor.checked) {
        div.style.backgroundColor = hslColor;
      } else if (!clickToColor.checked) {
        div.style.backgroundColor = "gray";
      }

    });

    div.addEventListener("mousedown", () => {
      
      if (clickToColor.checked && changeColor.checked) {
        div.style.backgroundColor = hslColor;
      } else if (clickToColor.checked){
        div.style.backgroundColor = "gray";
      }

    });

    container.appendChild(div);
  }
}
createGrid(container, 4);


clearGrid.addEventListener("click", () => {
  container.innerHTML = '';
  createGrid(container, userSize);
});

