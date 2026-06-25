const container = document.querySelector("#container");
const gridSize = document.querySelector("#grid-size");
const changeColor = document.querySelector("#mudar-cor");
const clearGrid = document.querySelector("#clear-all");
const clickToColor = document.querySelector("#click-to-color");

let tamanhoAtual = 16;

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
    tamanhoAtual = getSizeGrid;
    createGrid(container, getSizeGrid);
  })
}

userSize(gridSize)


function createGrid(container, userSize) {
  for (let i = 0; i < userSize ** 2; i++) {
    const div = document.createElement("div");
    const hMin = 200;
    const hMax = 280;
    let opacityEnter = 0;
    let opacityDown = 0;
   

    div.style.width = `calc(100% / ${userSize})`;
    div.style.height = `calc(100% / ${userSize})`;

    div.addEventListener("mouseenter", () => {

      const h = Math.floor(Math.random() * (hMax - hMin) + hMin);
      const hslColor = `hsl(${h}, 60%, 80%)`;
      const newOpacityEnter = Math.min(1, opacityEnter + 0.2);

      if (changeColor.checked && !clickToColor.checked) {
        div.style.backgroundColor = hslColor;
        opacityEnter = newOpacityEnter;
        div.style.opacity = opacityEnter;
      } else if (!clickToColor.checked) {
        div.style.backgroundColor = "gray";
        opacityEnter = newOpacityEnter;
        div.style.opacity = opacityEnter;
      }

    });

    div.addEventListener("mousedown", () => {
      const h = Math.floor(Math.random() * (hMax - hMin) + hMin);
      const hslColor = `hsl(${h}, 60%, 80%)`;
      const newOpacityDown = Math.min(1, opacityDown + 0.2);

      if (clickToColor.checked && changeColor.checked) {
        div.style.backgroundColor = hslColor;
        opacityDown = newOpacityDown;
        div.style.opacity = opacityDown;
      } else if (clickToColor.checked){
        div.style.backgroundColor = "gray";
        opacityDown = newOpacityDown;
        div.style.opacity = opacityDown;

      }

    });

    container.appendChild(div);
  }
}
createGrid(container, 16);


clearGrid.addEventListener("click", () => {
  container.innerHTML = '';
  createGrid(container, tamanhoAtual);
});

