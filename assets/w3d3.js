//creo evento che scatena caricamento della pagina

const input = document.getElementById("newTask");

const button = document.getElementById("addTask");
const main = document.querySelector("main");
const div = document.getElementById("error");

const createUl = (event) => {
  event.preventDefault();
  let ul = document.querySelector("ul");
  if (!ul) {
    //se non esiste entro e creo ul
    ul = document.createElement("ul");
    main.appendChild(ul);
  }
  addTask();
};

const addTask = () => {
  let task = input.value;
  let ul = document.querySelector("ul");
  const li = document.createElement("li");
  const buttonLi = document.createElement("button");
  const deleteLi = document.createElement("button");

  li.innerText = task;
  buttonLi.innerText = "fatto";
  deleteLi.innerHTML = "&#128465";

  buttonLi.addEventListener("click", () => {
    li.style.textDecoration = "line-through";
  });
  deleteLi.addEventListener("click", () => {
    li.remove();
  });
  ul.appendChild(li);
  if (task === "") {
    li.remove();

    let p = document.querySelector(".errorP");
    if (p) {
      p.remove();
    }
    p = document.createElement("p");
    p.classList.add("errorP");
    p.innerText = "input vuoto! Scrivi qualcosa";
    main.appendChild(p);
  } else {
    let p = document.querySelector(".errorP");
    if (p) {
      p.remove();
    }
  }

  li.appendChild(buttonLi);
  li.appendChild(deleteLi);
  input.value = "";
};
button.addEventListener("click", createUl);
