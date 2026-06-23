/*
Configure um efeito “hover” para que os divs da grade mudem de cor quando o mouse passar sobre eles, 
  deixando um rastro (pixelado) pela grade como uma caneta faria.
  * Dica: “Hovering” é o que acontece quando o mouse entra em um div e termina
    quando o mouse sai dele. Você pode configurar ouvintes de eventos para qualquer 
    um desses eventos como ponto de partida.
  * Existem várias maneiras de alterar a cor dos divs, incluindo:
Adicionando uma nova classe ao div.
Alterando a cor de fundo do div usando JavaScript.
*/

const container = document.querySelector("#container");

for (let i = 0; i < 256; i++) {
  const div = document.createElement("div");
  //div.textContent = "Eu sou um h3 azul!";
  

  div.addEventListener("mouseenter", () => {
    div.style.backgroundColor = "gray";
  });
  container.appendChild(div);
}