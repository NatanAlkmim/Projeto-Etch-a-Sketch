const container = document.querySelector("#container");
const checkbox = document.querySelector("#mudar-cor");
const clearGrid = document.querySelector("#clear-all");

function createGrid(container) {
  for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.addEventListener("mouseenter", () => {

      if (checkbox.checked) {
        const hMin = 200;
        const hMax = 280;
        const h = Math.floor(Math.random() * (hMax - hMin) + hMin);
        div.style.backgroundColor = `hsl(${h}, 60%, 80%)`;
      } else {
        div.style.backgroundColor = "gray";
      }

    });
    container.appendChild(div);
  }
}
createGrid(container);


function clearcolors(clearGrid) {
  clearGrid.addEventListener("click", () => {
    container.innerHTML = '';
    createGrid(container);
  });
}
clearcolors(clearGrid);



//container.innerHTML = '';

//btnPedra.addEventListener("click", () => playRound("pedra", getComputerChoice()));

/*
const el = document.querySelector("#meu-elemento");

el.addEventListener("mouseleave", () => {
  el.style.backgroundColor = '';
  el.style.color = '';
});
*/