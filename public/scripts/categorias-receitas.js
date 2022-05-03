let ingredientes = document.getElementsByClassName("hidden");

let funcaoMostrar = (evento, id)=>{ 
    let elemento = document.getElementById(id);
    elemento.classList.toggle("hidden");
    if(evento.value === "Mostrar") {
        evento.value = "Ocultar"
    } else {
        evento.value = "Mostrar"
    }
}

