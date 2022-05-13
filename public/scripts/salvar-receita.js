
// Inputs dinâmicos
let ingredientes = document.getElementById("ingredientes");
let addInput = document.getElementById("addInput");
let removeInput = document.getElementById("removeInput");

addInput.onclick = function () {
  let newInput = document.createElement("input");
  newInput.setAttribute("type", "text");
  newInput.setAttribute("name", "ingrediente[]");
  ingredientes.appendChild(newInput);
};

removeInput.onclick = function () {
  if(ingredientes.children.length > 1) {
      ingredientes.removeChild(ingredientes.lastChild)
  }
};

// Validação campo nome receita

let nomeReceita = document.getElementsByName('nome_receita');

