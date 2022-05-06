let ingredientes = document.getElementsByClassName("hidden");

let funcaoMostrar = (evento, id)=>{ 
    let elemento = document.getElementById(id);
    elemento.classList.toggle("hidden");
    if(evento.innerHTML === '<span class="material-symbols-outlined"> expand_less </span>') {
        evento.innerHTML = '<span class="material-symbols-outlined"> expand_more </span>'
    } else {
        evento.innerHTML = '<span class="material-symbols-outlined"> expand_less </span>'
    }
}

