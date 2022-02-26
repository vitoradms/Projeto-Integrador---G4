const usuario = require('../model/Usuario');


const usuarioControllers = {
  cadastro: (req, res) => {
    return res.render('cadastro')
  },
  deletar: (req, res) => {
    return res.send('deletando usuario')
  },
  atualizarDados: (req, res) => {
    return res.send('atualizando dados usuarios')
  },
  salvar: async (req, res) => {
    const { nome_do_usuario, email, criar_senha, confirmar_senha } = req.body

    const novoUsuario = await usuario.salvar(nome_do_usuario, email, criar_senha, confirmar_senha);
    res.send(novoUsuario)
  }
}

module.exports = usuarioControllers