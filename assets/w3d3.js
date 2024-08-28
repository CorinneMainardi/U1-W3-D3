//creo evento che scatena caricamento della pagina

window.onload = () => {
  console.log("carimento della pagina andato correttamente a buon fine");
};

const secondDiv = document.querySelector("main> div form div");
const UlList = document.createElement("ul");
UlList.classList.add("todo-list");
secondDiv.appendChild(UlList);
