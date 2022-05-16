
const formSubmit = document.querySelector('#formComentario');
const inputComentario = document.querySelector('#comentario')

formSubmit.addEventListener('submit', (e) => {
    const valorComentario = inputComentario.value;

   

    if (valorComentario.length < 1) {
        alert('Comentário vazio! preencha antes de enviar');
        e.preventDefault();
    }
})

inputComentario.addEventListener('blur', e => {
    const { value } = inputComentario;
    const botao = document.querySelector('#botaoComentario')

    if (value.length > 1) {
        botao.removeAttribute('disabled')
    }
})