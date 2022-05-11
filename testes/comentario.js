const { Comentarios } = require('../database/models')



// Usuario.create({
//   nome: 'jonas',
//   data_nascimento: '1998-07-15',
//   email: 'jonas@hotmail.com',
//   cpf: '12345671258',
//   senha: 'senha boa'
// })

Comentarios.create({
  comentario: 'muito boa essa receita',
  receita_id: 1,
  usuario_id: 1
}, {
  include: ['receita_comentario', 'usuario_comentario']
})

Comentarios.findAll({ raw: true})
  .then(console.log)