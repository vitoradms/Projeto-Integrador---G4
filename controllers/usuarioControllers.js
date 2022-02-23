const usuarioModel = require('../model/cadastroUsuario');


const loginControllers = {
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
    console.log(req.body)
    const { nome_do_usuario} = req.body
    const { criar_senha } = req.body
    const { confirmar_senha } = req.body
   
   const novoUsuario = await usuarioModel.salvar(nome_do_usuario, criar_senha, confirmar_senha);
    res.send('Usuario salvo')
}
}

module.exports = loginControllers