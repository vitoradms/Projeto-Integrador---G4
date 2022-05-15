
// Inputs dinâmicos
let inputs = document.getElementById("inputs");
let addInput = document.getElementById("addInput");
let removeInput = document.getElementById("removeInput");

addInput.onclick = function () {
  let newInput = document.createElement("input");
  newInput.setAttribute("type", "text");
  newInput.setAttribute("name", "ingrediente");
  newInput.setAttribute("class", "input");
  newInput.setAttribute("placeholder", "ADICIONE UM INGREDIENTE");

  inputs.appendChild(newInput);

};

removeInput.onclick = function () {
  if(inputs.children.length > 1) {
      inputs.removeChild(inputs.lastChild)
  }
};

// Validação campo nome receita

let nomeReceita = document.getElementsByName('nome_receita');

