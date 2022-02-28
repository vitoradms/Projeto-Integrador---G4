const usuario = require('../model/Usuario')

const usuarioControllers = {
  showCadastro: (req, res) => {
    return res.render('cadastro')
  },
  deletar: (req, res) => {
    return res.send('deletando usuario')
  },
  atualizarDados: (req, res) => {
    return res.send('atualizando dados usuarios')
  },
  salvarUsuario: async (req, res) => {
    const { nome, email, senha } = req.body

    const novoUsuario = await usuario.salvar(nome, email, senha);
    res.send(novoUsuario)
  }
}

module.exports = usuarioControllers