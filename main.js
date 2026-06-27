const container = document.querySelector("#container");
const gridSize = document.querySelector("#grid-size");
const clearGrid = document.querySelector("#clear-all");

const changeColor = document.querySelector("#change-color");
const clickToColor = document.querySelector("#click-to-color");
const applyOpacity = document.querySelector("#apply-opacity");

let tamanhoAtual = 16;

function userSize(gridSize) {
  gridSize.addEventListener("mousedown", () => {
    
    let getSizeGrid = Number(prompt("Escolha um valor de 1 a 100"));

    while (getSizeGrid < 1 || getSizeGrid > 100 || !Number.isInteger(getSizeGrid) || Number.isNaN(getSizeGrid) ) {

      if (!Number.isInteger(getSizeGrid) || Number.isNaN(getSizeGrid)) {
        alert("Apenas números inteiros");
      } else {
        alert("Precisa ser de 1 a 100!!!");
      }
      
      let input = prompt("Escolha um valor de 1 a 100");
      
      if (input === null) break;
      getSizeGrid = Number(input);
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
      const newOpacityEnter = Math.min(1, opacityEnter + 0.1);

      if (changeColor.checked && !clickToColor.checked) {
        div.style.backgroundColor = hslColor;

        if (applyOpacity.checked) {
          opacityEnter = newOpacityEnter;
          div.style.opacity = opacityEnter;
        } else {
          div.style.opacity = "";
        }

      } else if (!clickToColor.checked) {
        div.style.backgroundColor = "gray";

        if (applyOpacity.checked) {
          opacityEnter = newOpacityEnter;
          div.style.opacity = opacityEnter;
        } else {
          div.style.opacity = "";
        }

      }

    });

    div.addEventListener("mousedown", () => {
      const h = Math.floor(Math.random() * (hMax - hMin) + hMin);
      const hslColor = `hsl(${h}, 60%, 80%)`;
      const newOpacityDown = Math.min(1, opacityDown + 0.1);

      if (clickToColor.checked && changeColor.checked) {
        div.style.backgroundColor = hslColor;

        if (applyOpacity.checked) {
          opacityDown = newOpacityDown;
          div.style.opacity = opacityDown;
        } else {
          div.style.opacity = "";
        }

      } else if (clickToColor.checked){
        div.style.backgroundColor = "gray";
        
        if (applyOpacity.checked) {
          opacityDown = newOpacityDown;
          div.style.opacity = opacityDown;
        } else {
          div.style.opacity = "";
        }

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

